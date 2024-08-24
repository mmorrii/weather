import {createContext, useContext} from "react";

export const LocationContext = createContext(null)

export const useLocality = () => {
    return useContext(LocationContext)
}