import {Fragment, useContext, useState} from "react";
import {ThemeContext} from "../../App";
import TempChart from "./temperature/TempChart";
import {DateTime} from "luxon";
import PrecipitationChart from "./precipitation/PrecipitationChart";
import WindSpeedChart from "./wind-speed/WindSpeedChart";
import Card from "../../common/Card";

const ChartComponent = ({ weather }) => {
	const [navBarIndex, setNavBarIndex] = useState(0)
	const theme = useContext(ThemeContext)
	
	// const timezone = weather.timezone
	// const currentTime = DateTime.now().setZone(timezone).toFormat('HH:mm')
	// const currentTimeIndex = labelsFiltered.findIndex(
	// 	(label) => label === currentTime || label > currentTime
	// )
	// console.log(currentTimeIndex)
	const labels = weather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	const labelsFiltered = labels?.filter((label, i) => (i + 1) % 3 === 0) ?? []
	const navBar = ["температура", "вероятность осадков", "скорость ветра"]
	
	return (
		<div className="w-full">
			<Card>
				<div className="flex gap-2">
					{ navBar.map((item, index) => (
						<Fragment key={item}>
							<button
								className={ navBarIndex === index ? theme.textNavBar : "opacity-50" }
								onClick={() => setNavBarIndex(index)}
							>
								{item}
							</button>
							{ index !== navBar.length - 1 && <div className="opacity-50">|</div> }
						</Fragment >
					))}
				</div>
				{ navBarIndex === 0 && <TempChart weather={weather} labels={labelsFiltered} /> }
				{ navBarIndex === 1 && <PrecipitationChart weather={weather} labels={labelsFiltered} /> }
				{ navBarIndex === 2 && <WindSpeedChart weather={weather} labels={labelsFiltered} /> }
			</Card>
		</div>
	)
}

export default ChartComponent
