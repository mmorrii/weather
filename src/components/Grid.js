import {useContext} from "react";
import {ThemeContext} from "../App";
import Sunrise from "./grid-items/Sunrise";
import WindSpeed from "./grid-items/WindSpeed";
import WindDirection from "./grid-items/WindDirection";
import Sunset from "./grid-items/Sunset";
import PrecipitationProbability from "./grid-items/PrecipitationProbability";
import Humidity from "./grid-items/Humidity";

const Grid = ({ currentWeather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className={`p-5 border-2 ${theme.border} rounded-xl
			border-solid bg-white flex-shrink-0`} >
			<div className="flex gap-4">
				<div className="flex flex-col gap-3">
					<Sunrise currentWeather={currentWeather} />
					<WindSpeed currentWeather={currentWeather} />
					<WindDirection currentWeather={currentWeather} />
				</div>
				<div className={`max-h-full w-0.5 ${theme.bg700} rounded`}></div>
				<div className="flex flex-col gap-3">
					<Sunset currentWeather={currentWeather} />
					<PrecipitationProbability currentWeather={currentWeather} />
					<Humidity currentWeather={currentWeather} />
				</div>
			</div>
		</div>
	)
}

export default Grid