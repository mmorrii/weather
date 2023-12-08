import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {DateTime} from "luxon";
import {useState} from "react";
import {displaySomeElements} from "../../../utils/utils";
import {multiaxisLineOption} from "../options/multiaxisLine";
import DailyCard from "../DailyCard";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const SoilTempChart = ({weather}) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const date = weather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	const temp0 = weather.hourly?.soil_temperature_0cm
	const temp6 = weather.hourly?.soil_temperature_6cm
	const temp18 = weather.hourly?.soil_temperature_18cm
	
	const data = {
		labels: displaySomeElements(date, selectedCardIndex),
		datasets: [
			{
				label: '0 см',
				data: displaySomeElements(temp0, selectedCardIndex),
				borderColor: '#60a5fa',
				backgroundColor: 'rgb(96, 165, 250, 0.5)',
				yAxisID: 'y',
				tension: 0.3
			},
			{
				label: '6 см',
				data: displaySomeElements(temp6, selectedCardIndex),
				borderColor: '#2dd4bf',
				backgroundColor: 'rgba(45, 212, 191, 0.5)',
				yAxisID: 'y',
				tension: 0.3
			},
			{
				label: '18 см',
				data: displaySomeElements(temp18, selectedCardIndex),
				borderColor: '#f87171',
				backgroundColor: 'rgba(248, 113, 113, 0.5)',
				yAxisID: 'y',
				tension: 0.3
			},
		],
	};
	
	return (
		<>
			<div className="mb-4">
				<Line
					height={200}
					options={multiaxisLineOption()}
					data={data}
				/>
			</div>
			<DailyCard
				weather={weather}
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
			/>
		</>
	)
}

export default SoilTempChart
