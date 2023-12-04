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
import {Line} from "react-chartjs-2";
import DailyCardTemp from "./DailyCardTemp";
import {chartOptions} from "../options";
import {useContext, useState} from "react";
import {ThemeContext} from "../../../App";

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

const TempChart = ({ weather, labels }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const temp = weather.hourly?.temperature_2m.map(item => Math.round(item))
	const tempFiltered = temp?.filter((value, i) => (i + 1) % 3 === 0) ?? []
	// console.log(tempFiltered)
	
	// отображение 8 элементов из массива
	const displaySomeElements = (value) => {
		return value.slice(selectedCardIndex * 8, selectedCardIndex * 8 + 8)
	}
	
	const tempArr = [...displaySomeElements(tempFiltered)]
	const labelsArr = [...displaySomeElements(labels)]
	
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
	
	return (
		<>
			<div className="w-full mb-2">
				<Line
					height={200}
					options={options}
					data={data} />
			</div>
			<DailyCardTemp
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
				weather={weather}
			/>
		</>
	)
}

export default TempChart