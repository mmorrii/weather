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
import {displaySomeElements} from "../../../utils/utils";
import {barOption} from "../options/bar";
import DailyCardHumidity from "./DailyCardHumidity";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const HumidityChart = ({ weather, labels }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const humidity = weather.hourly?.relative_humidity_2m
	
	const data = {
		labels: displaySomeElements(labels, selectedCardIndex),
		datasets: [
			{
				data: displaySomeElements(humidity, selectedCardIndex),
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
					options={barOption}
					data={data} />
			</div>
			<DailyCardHumidity
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
				weather={weather}
				humidity={humidity}
			/>
		</>
	)
}

export default HumidityChart