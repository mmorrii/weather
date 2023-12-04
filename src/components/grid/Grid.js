import {useContext} from "react";
import {ThemeContext} from "../../App";
import Sunrise from "./items/Sunrise";
import WindSpeed from "./items/WindSpeed";
import WindDirection from "./items/WindDirection";
import Sunset from "./items/Sunset";
import PrecipitationProbability from "./items/PrecipitationProbability";
import Humidity from "./items/Humidity";

const Grid = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className={`p-5 border-2 ${theme.border} rounded-xl
			border-solid bg-white`} >
			<div className="flex gap-4">
				<div className="flex flex-col gap-4">
					<Sunrise weather={weather} />
					<WindSpeed weather={weather} />
					<WindDirection weather={weather} />
				</div>
				<div className={`max-h-full w-0.5 ${theme.bg700} rounded`}></div>
				<div className="flex flex-col gap-4">
					<Sunset weather={weather} />
					<PrecipitationProbability weather={weather} />
					<Humidity weather={weather} />
				</div>
			</div>
		</div>
	)
}

export default Grid