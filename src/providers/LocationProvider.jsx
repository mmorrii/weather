import { LocationContext } from "../hooks/useLocality.js"
import { useEffect, useState } from "react"

export const LocationProvider = ({ children }) => {
   const [location, setLocation] = useState()

   useEffect(() => {
      fetch("https://api.ipify.org?format=json")
         .then(res => res.json())
         .then(result => {
            return fetch(`https://data-api.oxilor.com/rest/network?ip=${String(result.ip)}`, {
               headers: {
                  "Content-Type": "application/json",
                  "Authorization": import.meta.env.VITE_AUTH_KEY,
               },
            })
         })
         .then((res) => res.json())
         .then((data) => setLocation(data.region))
         .catch(error => console.error("Error current location: ", error))
   }, [])

   const locationDataAdapter = (data) => {
      return {
         id: data.osm_id,
         name: data.address?.city || data.address?.town || data.address?.village || data.address?.state || "N/A",
         latitude: Number(data.lat),
         longitude: Number(data.lon),
         type: data.type,
         continentCode: "",
         countryCode: data.address?.country_code,
         division1Code: "",
         division2Code: null,
         division3Code: null,
         division4Code: null,
         population: null,
         timezone: null,
         parentRegions: []
      }
   }

   return (
      <LocationContext.Provider value={{ location, setLocation, locationDataAdapter }}>
         { children }
      </LocationContext.Provider>
   )
}