import FogIcon from "../../../icons/FogIcon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";

const Humidity = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11">
				<FogIcon color={theme.hexColor} />
			</div>
			<div>
				<p>Относительная влажность</p>
				<p className="font-bold">
					{ Math.round(weather.current?.relative_humidity_2m) }%
				</p>
			</div>
		</div>
	)
}

export default Humidity