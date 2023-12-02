import SunriseIcon from "../../icons/SunriseIcon";
import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const Sunrise = ({ currentWeather }) => {
	const theme = useContext(ThemeContext)
	const sunriseTime = currentWeather.daily?.sunrise[0]
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11">
				<SunriseIcon color={theme.hexColor}/>
			</div>
			<div>
				<p>Восход</p>
				<p className="font-bold">
					{ DateTime.fromISO(sunriseTime).toFormat('HH:mm') }
				</p>
			</div>
		</div>
	)
}

export default Sunrise