import {weatherIcons} from "../../utils/current-icon";
import {weatherCodeFn} from "../../utils/interpretation-weather-codes";

const CurrentTemp = ({ weather }) => {
	const weatherCode = weather?.current?.weather_code
	const isDay = weather?.current?.is_day === 1
	
	return (
		<div className="bg-black rounded-2xl px-3 bg-opacity-30 py-2">
			<div className="w-16 mb-1">
				{ weatherIcons(weatherCode, isDay, "white") }
			</div>
			<p className="text-4xl font-semibold mb-1" title="Текущая температура воздуха">
				{Math.round(weather?.current?.temperature_2m)}°C{' '}
				<span className="text-base font-normal">
								Ощущается как {' '}
					{Math.round(weather?.current?.apparent_temperature)}°C
						</span>
			</p>
			<p>{ weatherCodeFn(weatherCode) }</p>
		</div>
	)
}

export default CurrentTemp