import Map, {
    FullscreenControl,
    GeolocateControl,
    Marker,
    NavigationControl,
    Popup,
    ScaleControl, useMap,
} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import {useLocality} from "../hooks/useLocality.js";
import {useRef} from "react";

export const InteractiveMap = () => {
    const {location} = useLocality()
    const mapRef = useRef()

    const handleClick = () => {
        console.log("i click right button")
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
            {/*<Popup longitude={-122.4} latitude={37.8} >*/}
            {/*    You are here*/}
            {/*</Popup>*/}
            {/*<GeolocateControl />*/}

            {/*<Source id="my-data" type="geojson" data={geojson}>*/}
            {/*    <Layer {...layerStyle} />*/}
            {/*</Source>*/}
        </Map>
    )
}