import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';
import {Bar} from "react-chartjs-2";
import {useContext, useState} from "react";
import {ThemeContext} from "../../../App";
import DailyCardPrecipitation from "./DailyCardPrecipitation";
import {precipitationOptions} from "./options";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const PrecipitationChart = ({ weather, labels }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const precipitation = weather.hourly?.precipitation_probability
	const precipitationFiltered = precipitation?.filter((value, i) => (i + 1) % 3 === 0) ?? []
	// console.log(tempFiltered)
	
	// отображение 8 элементов из массива
	const displaySomeElements = (value) => {
		return value.slice(selectedCardIndex * 8, selectedCardIndex * 8 + 8)
	}
	
	const precipitationArr = [...displaySomeElements(precipitationFiltered)]
	const labelsArr = [...displaySomeElements(labels)]
	
	const options = precipitationOptions()
	
	const data = {
		labels: labelsArr,
		datasets: [
			{
				data: precipitationArr,
				borderColor: theme.hexColor,
				backgroundColor: theme.hexColor,
			},
		],
	};
	
	return (
		<>
			<div className="w-full mb-2">
				<Bar
					height={200}
					options={options}
					data={data} />
			</div>
			<DailyCardPrecipitation
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
				weather={weather}
			/>
		</>
	)
}

export default PrecipitationChart