import {DateTime} from "luxon";
import SunsetIcon from "../../../icons/SunsetIcon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {useLocation} from "react-router-dom";

const Sunset = ({ weather, selectedCardIndex }) => {
	const location= useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const sunset = location.pathname === "/today" ? weather?.daily?.sunset[0] : weather?.daily?.sunset[selectedCardIndex]
	
	return (
		<div className="max-sm:flex-auto flex items-center gap-3">
			<div className="w-11 h-11">
				<SunsetIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Закат</p>
				<p className="font-bold">
					{ DateTime.fromISO(sunset).toFormat('HH:mm') }
				</p>
			</div>
		</div>
	)
}

export default Sunset