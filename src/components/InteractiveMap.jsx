import Map, {FullscreenControl, Marker, NavigationControl, ScaleControl} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import {useLocality} from "../hooks/useLocality.js";
import {useEffect, useMemo, useRef, useState} from "react";
import { Check, X } from 'lucide-react';
import {useDarkMode} from "../hooks/useDarkMode.js";

const getMapStyle = (isDark) => {
    return isDark
        ? `https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/style.json?key=${import.meta.env.VITE_MAP_STYLE_KEY}`
        : `https://api.maptiler.com/maps/ch-swisstopo-lbm-grey/style.json?key=${import.meta.env.VITE_MAP_STYLE_KEY}`
}

/** Interactive map with the ability to change current location */
export const InteractiveMap = () => {
    const {location, setLocation} = useLocality()
    const mapRef = useRef()

    const [coords, setCoords] = useState(null)
    const [action, setAction] = useState(false)

    const {darkMode} = useDarkMode()
    const mapStyle = useMemo(() => getMapStyle(darkMode), [darkMode])

    useEffect(() => {
        if (action) {
            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`)
                .then(response => response.json())
                .then(data => {
                    setLocation(data)
                    setAction(false)
                    setCoords(null)
                })
                .catch((err) => console.log("Error in geocoding coordinates: " + err))

            return () => setAction(false)
        }
    }, [action])

    return (
        <Map
            ref={mapRef}
            initialViewState={{
                longitude: location?.longitude ?? location?.lon,
                latitude: location?.latitude ?? location?.lat,
                zoom: 8
            }}
            dragRotate={true} style={{width: "100%", height: "100%"}}
            mapStyle={mapStyle}
            onContextMenu={(e) => setCoords(e.lngLat)}
        >
            <FullscreenControl/>
            <Marker longitude={location?.longitude ?? location?.lon} latitude={location?.latitude ?? location?.lat} color={"#dc2626"} />
            {coords && <Marker longitude={coords?.lng} latitude={coords?.lat} draggable={true} color={"#16a34a"}
                               onDrag={({lngLat}) => setCoords(lngLat)} />
            }
            <NavigationControl position="top-left"/>
            <ScaleControl position="bottom-left"/>
            {coords && <Modal coords={coords} setCoords={setCoords} setAction={setAction} mapRef={mapRef.current} />}
        </Map>

    )
}

const Modal = ({ coords, setCoords, setAction, mapRef }) => {
    return (
        <div className="bg-neutral-800 fontSize13 rounded-full p-[3px_4px_4px_10px] absolute top-[10px] left-1/2 -translate-x-1/2 flex items-center gap-[6px]">
            <p className="flex items-center truncate">Изменить местоположение на -
                <span className="ml-[4px] max-w-24 truncate"><b className="mr-[2px] dark:text-blue-500">Ш:</b>{coords.lat}</span>,
                <span className="ml-[4px] max-w-24 truncate"><b className="mr-[2px] dark:text-green-500">Д:</b>{coords.lng}</span>
            </p>
            <div className="flex items-center gap-[4px]">
                <button type="button" onClick={() => {
                    setAction(true)
                    mapRef.flyTo({center: [coords.lng, coords.lat]})
                }}
                    className="rounded-full bg-green-600 p-1 hover:brightness-125 duration-150"
                >
                    <Check size={16} strokeWidth={2.5}/>
                </button>
                <button type="button" onClick={() => setCoords(null)}
                    className="rounded-full bg-red-600 p-1 hover:brightness-125 duration-150"
                >
                    <X size={16} strokeWidth={2.5}/>
                </button>
            </div>
        </div>
    )
}