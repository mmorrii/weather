import WindIcon from "../../../icons/WindIcon";
import {windSpeed} from "../../../utils/wind-speed";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {useLocation} from "react-router-dom";

const WindSpeed = ({ weather }) => {
	const location = useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const currentWindSpeed = weather?.current?.wind_speed_10m
	const todayWindSpeed = weather?.daily?.wind_speed_10m_max[0]
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11 h-11">
				<WindIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Скорость ветра</p>
				{ location.pathname === "/" &&
					<p className="font-bold">{Math.round(currentWindSpeed)} м/с
						<span className="font-normal ml-1 text-xs">({windSpeed(currentWindSpeed)})</span>
					</p>
				}
				{ location.pathname === "/today" &&
					<p className="font-bold">{Math.round(todayWindSpeed)} м/с
						<span className="font-normal ml-1 text-xs">({windSpeed(todayWindSpeed)})</span>
					</p>
				}
			</div>
		</div>
	)
}

export default WindSpeed