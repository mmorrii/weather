import {weatherIcons} from "../../utils/current-icon";
import {weatherCodeFn} from "../../utils/interpretation-weather-codes";
import {IsDarkContext} from "../../App";
import {useContext} from "react";

const TodayTemp = ({ weather }) => {
	const isDark = useContext(IsDarkContext)
	
	const weatherCode = weather?.daily?.weather_code[0]
	const isDay = weather?.current?.is_day === 1
	const color = isDark ? "#fafafa" : "#ffffff"
	
	return (
		<div className="bg-black rounded-2xl px-3 bg-opacity-30 py-2">
			<div className="w-16 mb-1">
				{ weatherIcons(weatherCode, isDay, color) }
			</div>
			<p>Макс t°:
				<span className="text-lg font-semibold ml-1.5 text-red-300">
					{Math.round(weather?.daily?.temperature_2m_max[0])}°C
				</span>,
				ощущается как
				<span className="text-lg font-semibold ml-1.5 text-red-300">
					{Math.round(weather?.daily?.apparent_temperature_max[0])}°C</span>
			</p>
			<p className="mb-1">Мин t°:
				<span className="text-lg font-semibold ml-1.5 text-blue-300">
					{Math.round(weather?.daily?.temperature_2m_min[0])}°C
				</span>,
				ощущается как
				<span className="text-lg font-semibold ml-1.5 text-blue-300">
					{Math.round(weather?.daily?.apparent_temperature_min[0])}°C
				</span>
			</p>
			<p>{weatherCodeFn(weatherCode)}</p>
		</div>
	)
}

export default TodayTemp