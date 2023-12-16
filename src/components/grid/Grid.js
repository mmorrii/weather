import {useContext} from "react";
import {ThemeContext} from "../../App";
import Sunrise from "./items/Sunrise";
import WindSpeed from "./items/WindSpeed";
import WindDirection from "./items/WindDirection";
import Sunset from "./items/Sunset";
import Pressure from "./items/Pressure";
import Humidity from "./items/Humidity";
import Card from "../../common/Card";

const Grid = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<Card>
			<div className="flex gap-4">
				<div className="flex flex-col gap-4">
					<Sunrise weather={weather} />
					<WindSpeed weather={weather} />
					<WindDirection weather={weather} />
				</div>
				<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
				<div className="flex flex-col gap-4">
					<Sunset weather={weather} />
					<Pressure weather={weather} />
					<Humidity weather={weather} />
				</div>
			</div>
		</Card>
	)
}

export default Grid