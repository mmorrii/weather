import { createContext, useContext } from "react"

export const ForecastContext = createContext(null)

export const useForecast = () => {
   return useContext(ForecastContext)
}