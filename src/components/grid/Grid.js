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

const Grid = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const windowWidth = useResize()
	
	return (
		<Card>
			<div className="flex justify-around max-[500px]:justify-start gap-4">
				{ (windowWidth > 1200 || (windowWidth < 1024 && windowWidth > 650) ) &&
					<>
						<div className="flex flex-col gap-4">
							<Sunrise weather={weather} />
							<Sunset weather={weather} />
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex flex-col gap-4">
							<WindSpeed weather={weather} />
							<WindDirection weather={weather} />
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex flex-col gap-4">
							<Pressure weather={weather} />
							<Humidity weather={weather} />
						</div>
					</>
				}
				{ ((windowWidth < 1200 && windowWidth >= 1024) || (windowWidth <= 650 && windowWidth > 500)) &&
					<>
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
					</>
				}
				{ windowWidth <= 500 &&
					<>
						<div className="flex flex-col gap-4 w-full">
							<div className="flex gap-2">
								<Sunrise weather={weather} />
								<Sunset weather={weather} />
							</div>
							<WindSpeed weather={weather} />
							<WindDirection weather={weather} />
							<Pressure weather={weather} />
							<Humidity weather={weather} />
						</div>
					</>
				}
			</div>
		</Card>
	)
}

export default Grid