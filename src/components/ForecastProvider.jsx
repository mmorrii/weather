import {useLocality} from "../hooks/useLocality.js";
import {useEffect} from "react";
import {ForecastContext} from "../hooks/useForecast.js";
import {useLocation} from "react-router-dom";
import {useRest} from "../hooks/useRest.js";

export const ForecastProvider = ({ children }) => {
    const {location} = useLocality()
    const {state} = useLocation()
    const {data: forecast, state: status, get: getForecast} = useRest()
    const {data: airQuality, get: getAirQuality} = useRest()

    useEffect(() => {
        if (location && state) {
            getForecast({path: `https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude ?? location?.lat}&longitude=${location?.longitude ?? location?.lon}&forecast_days=${state?.timeStamp}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m,cloud_cover&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,snow_depth,pressure_msl,cloud_cover_low,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_direction_10m,wind_direction_80m,wind_direction_120m,temperature_80m,temperature_120m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`})
            getAirQuality({path: `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${location?.latitude ?? location?.lat}&longitude=${location?.longitude ?? location?.lon}&current=us_aqi&timezone=auto`})
        }
    }, [location, state])

    return (
        <ForecastContext.Provider value={{ forecast, status, airQuality }}>
            { children }
        </ForecastContext.Provider>
    )
}