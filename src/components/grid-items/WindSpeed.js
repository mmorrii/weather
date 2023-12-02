import WindIcon from "../../icons/WindIcon";
import {windSpeed} from "../../utils/wind-speed";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const WindSpeed = ({ currentWeather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11">
				<WindIcon color={theme.hexColor} />
			</div>
			<div>
				<p>Скорость ветра</p>
				<p className="font-bold">
					{Math.round(currentWeather.current?.wind_speed_10m)} м/с
					<span className="font-normal ml-1 text-xs">
						({ windSpeed(currentWeather.current?.wind_speed_10m) })
					</span>
				</p>
			</div>
		</div>
	)
}

export default WindSpeed