import WindIcon from "../../../icons/WindIcon";
import {windSpeed} from "../../../utils/wind-speed";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {useLocation} from "react-router-dom";

const WindSpeed = ({ weather, selectedCardIndex }) => {
	const location = useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const getWindSpeed = (speed) => (
		<p className="font-bold">{Math.round(speed)} м/с
			<span className="font-normal ml-1 text-xs">({windSpeed(speed)})</span>
		</p>
	)
	
	const windSpeedText = {
		"/": getWindSpeed(weather?.current?.wind_speed_10m),
		"/today": getWindSpeed(weather?.daily?.wind_speed_10m_max[0]),
		"/weekly": getWindSpeed(weather?.daily?.wind_speed_10m_max[selectedCardIndex])
	}
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11 h-11">
				<WindIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Скорость ветра</p>
				{ windSpeedText[location.pathname] }
			</div>
		</div>
	)
}

export default WindSpeed