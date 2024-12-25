import { formatTime } from "../utils/formatTime.js"
import { WeatherIcon } from "./WeatherIcon.jsx"
import { MoveUp, Info } from "lucide-react"
import { getWindDirection } from "../utils/windDirection.js"
import { useForecast } from "../hooks/useForecast.js"
import { getAirQuality } from "../utils/airQuality.js"

export const TodayForecastCard = () => {
   const { forecast, airQuality } = useForecast()

   return (
      <div className="dark:bg-zinc-600/40 rounded-lg p-[6px_12px_8px] flex flex-col gap-[16px]">
         <p className="font-light">Прогноз на {formatTime(forecast?.current?.time, "T")}</p>

         <div className="flex items-center gap-[10px]">
            <div className="size-[5rem]">
               <WeatherIcon code={forecast?.current?.weather_code} isDay={!!forecast?.current?.is_day} />
            </div>

            <div className="flex gap-[16px]">
               <p className="font-medium text-6xl">{Math.round(forecast?.current?.temperature_2m)}&deg;</p>
               <div className="flex flex-col justify-between pt-[0.6rem] gap-[4px]">
                  <p className="text-sm font-light">
                     Ощущается как {Math.round(forecast?.current?.apparent_temperature)}&deg;
                  </p>
                  <p className="text-sm font-light">
                     Ночью {Math.round(forecast?.daily?.temperature_2m_min?.[0])}&deg;
                  </p>
               </div>
            </div>
         </div>

         <div className="flex gap-[30px]">
            <div className="flex flex-col items-center gap-[4px]">
               <p className="dark:text-blue-200 font-light">Ветер</p>
               <p className="flex items-center gap-[4px] font-semibold">
                  <MoveUp size="0.875rem"
                     style={{ transform: `rotate(${getWindDirection(forecast?.current?.wind_direction_10m)?.angle || 0}deg)` }}
                  />
                  <span>{Math.round(forecast?.current?.wind_speed_10m)} км/ч</span>
               </p>
            </div>

            <div className="flex flex-col items-center gap-[4px]">
               <p className="dark:text-blue-200 font-light">Влажность</p>
               <p className="font-semibold">{forecast?.current?.relative_humidity_2m}%</p>
            </div>

            <div className="flex flex-col items-center gap-[4px]">
               <p className="dark:text-blue-200 font-light">Давление</p>
               <p className="font-semibold">{Math.round(forecast?.current?.surface_pressure)} мбар</p>
            </div>

            <div className="flex flex-col items-center gap-[4px]">
               <p className="dark:text-blue-200 font-light">УФ-индекс</p>
               <p className="font-semibold">{forecast?.daily?.uv_index_max?.[0]}</p>
            </div>

            <div className="flex flex-col items-center gap-[4px]">
               <p className="dark:text-blue-200 font-light">Качество воздуха</p>
               <p className="font-semibold flex gap-[5px] items-center">
                  <span className={getAirQuality(airQuality?.current?.us_aqi)?.color}>
                      {airQuality?.current?.us_aqi}
                  </span>
                  <span className="cursor-pointer text-gray relative top-[0.5px]"
                     title={getAirQuality(airQuality?.current?.us_aqi)?.value}
                  >
                      <Info size={14} />
                  </span>
               </p>
            </div>
         </div>
      </div>
   )
}
