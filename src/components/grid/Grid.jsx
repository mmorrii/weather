import {useContext} from "react";
import {ThemeContext} from "../../App";
import Sunrise from "./items/Sunrise";
import WindSpeed from "./items/WindSpeed";
import WindDirection from "./items/WindDirection";
import Sunset from "./items/Sunset";
import Pressure from "./items/Pressure";
import Humidity from "./items/Humidity";
import Card from "../../common/Card";
import {useResize} from "../../hooks/useResize";
import {useLocation} from "react-router-dom";
import UvIndex from "./items/UvIndex";

const Grid = ({ weather, selectedCardIndex }) => {
	const location = useLocation()
	const theme = useContext(ThemeContext)
	const windowWidth = useResize()
	
	return (
		<Card className="w-[56%] max-lg:w-full px-6">
			<div className="flex justify-around max-[424px]:justify-start gap-4">
				{ (windowWidth > 1100 || (windowWidth < 1024 && windowWidth > 550) ) &&
					<>
						<div className="flex flex-col gap-4">
							<Sunrise weather={weather} selectedCardIndex={selectedCardIndex} />
							<Sunset weather={weather} selectedCardIndex={selectedCardIndex} />
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex flex-col gap-4">
							<WindSpeed weather={weather} selectedCardIndex={selectedCardIndex} />
							<WindDirection weather={weather} selectedCardIndex={selectedCardIndex} />
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex flex-col gap-4">
							<Pressure weather={weather} />
							{location.pathname === "/" ? <Humidity weather={weather} /> :
								<UvIndex weather={weather} selectedCardIndex={selectedCardIndex} />}
						</div>
					</>
				}
				{ ((windowWidth <= 1100 && windowWidth >= 1024) || (windowWidth <= 550 && windowWidth > 424)) &&
					<>
						<div className="flex flex-col gap-4">
							<Sunrise weather={weather} selectedCardIndex={selectedCardIndex} />
							<WindSpeed weather={weather} selectedCardIndex={selectedCardIndex} />
							<WindDirection weather={weather} selectedCardIndex={selectedCardIndex} />
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex flex-col gap-4">
							<Sunset weather={weather} selectedCardIndex={selectedCardIndex} />
							<Pressure weather={weather} />
							{location.pathname === "/" ? <Humidity weather={weather} /> :
								<UvIndex weather={weather} selectedCardIndex={selectedCardIndex} />}
						</div>
					</>
				}
				{ windowWidth <= 424 &&
					<div className="flex flex-col gap-4 w-full">
						<div className="flex gap-2">
							<Sunrise weather={weather} selectedCardIndex={selectedCardIndex} />
							<Sunset weather={weather} selectedCardIndex={selectedCardIndex} />
						</div>
						<WindSpeed weather={weather} selectedCardIndex={selectedCardIndex} />
						<WindDirection weather={weather} selectedCardIndex={selectedCardIndex} />
						<Pressure weather={weather} />
						{location.pathname === "/" ? <Humidity weather={weather} /> :
							<UvIndex weather={weather} selectedCardIndex={selectedCardIndex} />}
					</div>
				}
			</div>
		</Card>
	)
}

export default Grid