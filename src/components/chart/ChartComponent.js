import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {DateTime} from "luxon";
import {Fragment, useContext, useState} from "react";
import {ThemeContext} from "../../App";
import DailyCard from "../DailyCard";
import {chartOptions} from "./options";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const ChartComponent = ({ currentWeather }) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	const [navBarIndex, setNavBarIndex] = useState(0)
	const theme = useContext(ThemeContext)
	
	const timezone = currentWeather.timezone
	const temp = currentWeather.hourly?.temperature_2m.map(item => Math.round(item))
	const labels = currentWeather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	// Фильтрация данных с шагом 3
	const tempFiltered = temp?.filter((value, i) => (i + 1) % 3 === 0) ?? []
	const labelsFiltered = labels?.filter((label, i) => (i + 1) % 3 === 0) ?? []
	// console.log(tempFiltered)
	// console.log(labelsFiltered)
	
	const currentTime = DateTime.now().setZone(timezone).toFormat('HH:mm')
	
	const displaySomeElements = (value) => {
		return value.slice(selectedCardIndex * 8, selectedCardIndex * 8 + 8)
	}
	
	const currentTimeIndex = labelsFiltered.findIndex(
		(label) => label === currentTime || label > currentTime
	)
	// console.log(currentTimeIndex)
	
	const tempArr = [...displaySomeElements(tempFiltered)]
	const labelsArr = [...displaySomeElements(labelsFiltered)]
	
	const options = chartOptions(theme.hexColor, tempArr)
	
	const data = {
		labels: labelsArr,
		datasets: [
			{
				fill: true,
				data: tempArr,
				borderColor: theme.hexColor,
				backgroundColor: theme.hoverColor,
				radius: 0,
				tension: 0.3,
			},
		],
	};
	
	const navBarChart = ["температура", "вероятность осадков", "скорость ветра", "направление ветра"]
	
	return (
		<div className={`${theme.border} border-2 border-solid rounded-xl bg-white p-5`}>
			<div className="flex gap-2">
				{ navBarChart.map((item, index) => (
					<Fragment key={item}>
						<button
							className={ navBarIndex === index ? theme.textNavBar : "opacity-50" }
							onClick={() => setNavBarIndex(index)}
						>
							{item}
						</button>
						{ index !== navBarChart.length - 1 && <div className="opacity-50">|</div> }
					</Fragment >
				))}
			</div>
			<div className="w-full mb-2">
				<Line
					height={200}
					options={options}
					data={data} />
			</div>
			<DailyCard
				setSelectedCardIndex={setSelectedCardIndex}
				currentWeather={currentWeather}
			/>
		</div>
	)
}

export default ChartComponent
