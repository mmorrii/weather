import {Fragment, useContext, useState} from "react";
import {ThemeContext} from "../../App";
import TempChart from "./temperature/TempChart";
import {DateTime} from "luxon";
import PrecipitationChart from "./precipitation/PrecipitationChart";
import WindSpeedChart from "./wind-speed/WindSpeedChart";
import Card from "../../common/Card";
import HumidityChart from "./humidity/HumidityChart";
import {Figcaption} from "../../common/Caption";

const ChartComponent = ({ weather }) => {
	const [navBarIndex, setNavBarIndex] = useState(0)
	const [tempHeight, setTempHeight] = useState(2)
	const [windSpeedHeight, setWindSpeedHeight] = useState(10)
	const theme = useContext(ThemeContext)
	
	// const timezone = weather.timezone
	// const currentTime = DateTime.now().setZone(timezone).toFormat('HH:mm')
	// const currentTimeIndex = labelsFiltered.findIndex(
	// 	(label) => label === currentTime || label > currentTime
	// )
	// console.log(currentTimeIndex)
	const labels = weather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	const navBar = ["температура", "вероятность осадков", "скорость ветра", "относительная влажность"]
	
	return (
		<figure className="w-full">
			<Card>
				<div className="flex justify-between">
					<div className="flex gap-2">
						{ navBar.map((item, index) => (
							<Fragment key={item}>
								<button
									className={ navBarIndex === index ? theme.textNavBar : "opacity-50 hover:opacity-70" }
									onClick={() => setNavBarIndex(index)}
								>
									{item}
								</button>
								{ index !== navBar.length - 1 && <div className="opacity-50">|</div> }
							</Fragment >
						))}
					</div>
					{ navBarIndex === 0 &&
						<button className={`${theme.textNavBar} hover:text-blue-950`}
								  onClick={() => setTempHeight(tempHeight === 2 ? 80 : tempHeight === 80 ? 120 : 2)}
						>{tempHeight}м</button>
					}
					{ navBarIndex === 2 &&
						<button className={`${theme.textNavBar} hover:text-blue-950`}
								  onClick={() => setWindSpeedHeight(windSpeedHeight === 10 ? 80 : windSpeedHeight === 80 ? 120 : 10)}
						>{windSpeedHeight}м</button>
					}
				</div>
				{ navBarIndex === 0 && <TempChart weather={weather} labels={labels} tempHeight={tempHeight} /> }
				{ navBarIndex === 1 && <PrecipitationChart weather={weather} labels={labels} /> }
				{ navBarIndex === 2 && <WindSpeedChart weather={weather} labels={labels} windSpeedHeight={windSpeedHeight} /> }
				{ navBarIndex === 3 && <HumidityChart weather={weather} labels={labels} /> }
			</Card>
			<Figcaption>Температура воздуха </Figcaption>
		</figure>
	)
}

export default ChartComponent
