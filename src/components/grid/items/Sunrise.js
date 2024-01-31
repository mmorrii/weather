import SunriseIcon from "../../../icons/SunriseIcon";
import {DateTime} from "luxon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {useLocation} from "react-router-dom";

const Sunrise = ({ weather, selectedCardIndex }) => {
	const location= useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const sunrise = location.pathname === "/today" ? weather?.daily?.sunrise[0] : weather?.daily?.sunrise[selectedCardIndex]
	
	return (
		<div className="max-sm:flex-auto flex items-center gap-3">
			<div className="w-11 h-11">
				<SunriseIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Восход</p>
				<p className="font-bold">
					{ DateTime.fromISO(sunrise).toFormat('HH:mm') }
				</p>
			</div>
		</div>
	)
}

export default Sunrise