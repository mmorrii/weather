import {weatherIcons} from "../../utils/current-icon";
import {weatherCodeFn} from "../../utils/interpretation-weather-codes";
import {IsDarkContext} from "../../App";
import {useContext} from "react";
import {useLocation} from "react-router-dom";
import {DateTime} from "luxon";

const TodayTemp = ({ weather, selectedCardIndex }) => {
	const location = useLocation()
	const isDark = useContext(IsDarkContext)
	
	const weatherCode = location.pathname === "/today" ? weather?.daily?.weather_code[0] : weather?.daily?.weather_code[selectedCardIndex]
	const isDay = weather?.current?.is_day === 1
	const color = isDark ? "#fafafa" : "#ffffff"
	const date = location.pathname === "/today" ? weather?.daily?.time[0] : weather?.daily?.time[selectedCardIndex]
	const weekDay = DateTime.fromISO(date).setZone(weather?.timezone).weekdayShort
	
	return (
		<div className="bg-black rounded-2xl px-3 bg-opacity-30 py-2">
			<div className="flex justify-between">
				<div className="w-16 mb-1">
					{weatherIcons(weatherCode, isDay, color)}
				</div>
				<p>{weekDay}, {DateTime.fromISO(date).toFormat('dd.MM')}</p>
			</div>
			<p>Макс t°:
				<span className="text-lg font-semibold ml-1.5 text-red-300">
					{location.pathname === "/today" && Math.round(weather?.daily?.temperature_2m_max[0])}
					{location.pathname === "/weekly" && Math.round(weather?.daily?.temperature_2m_max[selectedCardIndex])}°C
				</span>,
				ощущается как
				<span className="text-lg font-semibold ml-1.5 text-red-300">
					{location.pathname === "/today" && Math.round(weather?.daily?.apparent_temperature_max[0])}
					{location.pathname === "/weekly" && Math.round(weather?.daily?.apparent_temperature_max[selectedCardIndex])}°C
				</span>
			</p>
			<p className="mb-1">Мин t°:
				<span className="text-lg font-semibold ml-1.5 text-blue-300">
					{location.pathname === "/today" && Math.round(weather?.daily?.temperature_2m_min[0])}
					{location.pathname === "/weekly" && Math.round(weather?.daily?.temperature_2m_min[selectedCardIndex])}°C
				</span>,
				ощущается как
				<span className="text-lg font-semibold ml-1.5 text-blue-300">
					{location.pathname === "/today" && Math.round(weather?.daily?.apparent_temperature_min[0])}
					{location.pathname === "/weekly" && Math.round(weather?.daily?.apparent_temperature_min[selectedCardIndex])}°C
				</span>
			</p>
			<p className="text-lg">{weatherCodeFn(weatherCode)}</p>
		</div>
	)
}

export default TodayTemp