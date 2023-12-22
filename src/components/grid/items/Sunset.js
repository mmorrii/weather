import {DateTime} from "luxon";
import SunsetIcon from "../../../icons/SunsetIcon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";

const Sunset = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const sunsetTime = weather.daily?.sunset[0]
	
	return (
		<div className="max-sm:flex-auto flex items-center gap-3">
			<div className="w-11 h-11">
				<SunsetIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Закат</p>
				<p className="font-bold">
					{ DateTime.fromISO(sunsetTime).toFormat('HH:mm') }
				</p>
			</div>
		</div>
	)
}

export default Sunset