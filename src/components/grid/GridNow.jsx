import Card from "../../common/Card";
import WindSpeed from "./items/WindSpeed";
import WindDirection from "./items/WindDirection";
import Pressure from "./items/Pressure";
import Humidity from "./items/Humidity";
import {useContext} from "react";
import {ThemeContext} from "../../App";
import Cloudy from "./items/Cloudy";
import Visibility from "./items/Visibility";
import {useResize} from "../../hooks/useResize";

const GridNow = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const windowWidth = useResize()
	
	return (
		<Card className="flex-auto">
			<div className="flex gap-4">
				{ windowWidth > 550 &&
					<>
						<div className="flex-auto flex justify-center">
							<div className="flex flex-col gap-4">
								<Cloudy weather={weather}/>
								<Visibility weather={weather}/>
							</div>
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex-auto flex justify-center">
							<div className="flex flex-col gap-4">
								<WindSpeed weather={weather}/>
								<WindDirection weather={weather}/>
							</div>
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex-auto flex justify-center">
							<div className="flex flex-col gap-4">
								<Pressure weather={weather}/>
								<Humidity weather={weather}/>
							</div>
						</div>
					</>
				}
				{ (windowWidth <= 550 && windowWidth > 400) &&
					<>
						<div className="flex-auto flex justify-center">
							<div className="flex flex-col gap-4">
								<Cloudy weather={weather}/>
								<Visibility weather={weather}/>
								<Pressure weather={weather}/>
							</div>
						</div>
						<div className={`max-h-full w-0.5 ${theme.bg700} dark:bg-neutral-700 rounded`}></div>
						<div className="flex-auto flex justify-center">
							<div className="flex flex-col gap-4">
								<WindSpeed weather={weather}/>
								<WindDirection weather={weather}/>
								<Humidity weather={weather}/>
							</div>
						</div>
					</>
				}
				{ windowWidth <= 400 &&
					<>
						<div className="flex flex-col gap-4">
							<Cloudy weather={weather}/>
							<Visibility weather={weather}/>
							<Pressure weather={weather}/>
							<Humidity weather={weather}/>
							<WindSpeed weather={weather}/>
							<WindDirection weather={weather}/>
						</div>
					</>
				}
			</div>
		</Card>
	)
}

export default GridNow