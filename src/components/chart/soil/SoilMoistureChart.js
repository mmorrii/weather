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
import DailyCard from "../../DailyCard";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const SoilMoistureChart = ({weather}) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const date = weather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	const moisture0To1 = weather.hourly?.soil_moisture_0_to_1cm
	const moisture1To3 = weather.hourly?.soil_moisture_1_to_3cm
	const moisture3To9 = weather.hourly?.soil_moisture_3_to_9cm
	
	const data = {
		labels: displaySomeElements(date, selectedCardIndex),
		datasets: [
			{
				label: '0-1 см',
				data: displaySomeElements(moisture0To1, selectedCardIndex),
				borderColor: '#60a5fa',
				backgroundColor: 'rgb(96, 165, 250, 0.5)',
				yAxisID: 'y',
				tension: 0.3
			},
			{
				label: '1-3 см',
				data: displaySomeElements(moisture1To3, selectedCardIndex),
				borderColor: '#2dd4bf',
				backgroundColor: 'rgba(45, 212, 191, 0.5)',
				yAxisID: 'y',
				tension: 0.3
			},
			{
				label: '3-9 см',
				data: displaySomeElements(moisture3To9, selectedCardIndex),
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
				className="max-md:px-3"
				weather={weather}
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
			/>
		</>
	)
}

export default SoilMoistureChart
