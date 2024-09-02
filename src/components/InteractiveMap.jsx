import Map, {
    FullscreenControl,
    GeolocateControl, Layer,
    Marker,
    NavigationControl,
    Popup,
    ScaleControl, Source, useMap,
} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import {useLocality} from "../hooks/useLocality.js";
import {useRef, useState} from "react";
import { Check, X } from 'lucide-react';

export const InteractiveMap = () => {
    const {location} = useLocality()
    const mapRef = useRef()

    const [coords, setCoords] = useState(null)

    const handleClick = (event) => {
        const { lngLat } = event
        setCoords(lngLat)
    }

    return (
        <Map
            ref={mapRef}
            initialViewState={{
                longitude: location.longitude,
                latitude: location.latitude,
                zoom: 8
            }}
            dragRotate={false} style={{width: "100%", height: "100%"}}
            mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${import.meta.env.VITE_MAP_KEY}`}
            onContextMenu={handleClick}
        >
            <FullscreenControl/>
            <Marker longitude={location.longitude} latitude={location.latitude} color="red"/>
            <NavigationControl position="top-left"/>
            <ScaleControl position="bottom-left"/>
            {coords && <Modal coords={coords} setCoords={setCoords} />}

            {/*<Source id="my-source" type="geojson" data={{*/}
            {/*    type: 'FeatureCollection',*/}
            {/*    features: [*/}
            {/*        {type: 'Feature', geometry: {type: 'Point', coordinates: [0, 0]}}*/}
            {/*    ]*/}
            {/*}}>*/}
            {/*    <Layer {...layerStyle} />*/}
            {/*</Source>*/}
        </Map>
    )
}

const Modal = ({ coords, setCoords }) => {
    return (
        <div
            className="bg-neutral-800 text-[13px] rounded-full p-[3px_4px_4px_10px] absolute top-[10px] left-1/2 -translate-x-1/2 flex items-center gap-[6px]">
            <p className="flex items-center fontSize13">Изменить местоположение на -
                <span className="ml-[4px] max-w-24 truncate"><b className="mr-[2px] dark:text-blue-500">Ш:</b>{coords.lat}</span>,
                <span className="ml-[4px] max-w-24 truncate"><b className="mr-[2px] dark:text-green-500">Д:</b>{coords.lng}</span>
            </p>
            <div className="flex items-center gap-[4px]">
                <button type="button" className="rounded-full bg-green-600 p-1 hover:brightness-125 duration-150">
                    <Check size={16} strokeWidth={2.5}/>
                </button>
                <button
                    type="button" onClick={() => setCoords(null)}
                    className="rounded-full bg-red-600 p-1 hover:brightness-125 duration-150"
                >
                    <X size={16} strokeWidth={2.5}/>
                </button>
            </div>
        </div>
    )
}