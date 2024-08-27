import {LocationContext} from "../hooks/useLocality.js";
import {useEffect, useState} from "react";

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState()

    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(result => {
                return fetch(`https://data-api.oxilor.com/rest/network?ip=${String(result.ip)}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer xS9W6HOMQnQKipQ6K_ewl4umZBHlP-"
                    }
                })
            })
            .then((res) => res.json())
            .then((data) => setLocation(data.region))
            .catch(error => console.log('Error: ', error))
    }, []);

    return (
        <LocationContext.Provider value={{ location, setLocation }}>
            { children }
        </LocationContext.Provider>
    )
}