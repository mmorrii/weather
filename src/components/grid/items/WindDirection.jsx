import ArrowIcon from "../../../icons/ArrowIcon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {windDirection} from "../../../utils/windDirection.js";
import {useLocation} from "react-router-dom";

const WindDirection = ({ weather, selectedCardIndex }) => {
	const location = useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const currentData = {
		"/": weather?.current?.wind_direction_10m,
		"/today": weather?.daily?.wind_direction_10m_dominant[0],
		"/weekly": weather?.daily?.wind_direction_10m_dominant[selectedCardIndex]
	}
	
	const windDir = windDirection(currentData[location.pathname])
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11 h-11">
				<ArrowIcon
					color={isDark ? theme.hexColorDark : theme.hexColor}
					dir={windDir?.icon}
				/>
			</div>
			<div>
				<p>Направление ветра</p>
				<p className="font-bold">{ windDir?.text }</p>
			</div>
		</div>
	)
}

export default WindDirection