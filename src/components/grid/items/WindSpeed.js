import WindIcon from "../../../icons/WindIcon";
import {windSpeed} from "../../../utils/wind-speed";
import {useContext} from "react";
import {ThemeContext} from "../../../App";

const WindSpeed = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex items-center gap-3">
			<div
				className="w-11 h-11"
				title="Текущая скорость ветра"
			>
				<WindIcon color={theme.hexColor} />
			</div>
			<div>
				<p>Скорость ветра</p>
				<p className="font-bold">
					{Math.round(weather.current?.wind_speed_10m)} м/с
					<span className="font-normal ml-1 text-xs">
						({ windSpeed(weather.current?.wind_speed_10m) })
					</span>
				</p>
			</div>
		</div>
	)
}

export default WindSpeed