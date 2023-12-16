import ArrowIcon from "../../../icons/ArrowIcon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {windDirection} from "../../../utils/wind-direction";

const WindDirection = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windDir = windDirection(weather.current?.wind_direction_10m)
	
	return (
		<div className="flex items-center gap-3">
			<div
				className="w-11 h-11"
				title="Текущее направление ветра"
			>
				<ArrowIcon
					color={isDark ? theme.hexColorDark : theme.hexColor}
					dir={windDir?.icon}
				/>
			</div>
			<div>
				<p>Направление ветра</p>
				<p className="font-bold">
					{ windDir?.text }
				</p>
			</div>
		</div>
	)
}

export default WindDirection