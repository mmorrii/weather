import {DateTime} from "luxon";
import SunsetIcon from "../../icons/SunsetIcon";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const Sunset = ({ currentWeather }) => {
	const theme = useContext(ThemeContext)
	const sunsetTime = currentWeather.daily?.sunset[0]
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11">
				<SunsetIcon color={theme.hexColor} />
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