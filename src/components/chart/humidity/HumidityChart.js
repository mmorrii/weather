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
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
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

const HumidityChart = ({ weather, labels, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const humidity = weather.hourly?.relative_humidity_2m
	const textColor = isDark ? "#ffffff" : "#000000"
	
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
					options={barOption(textColor)}
					data={data} />
			</div>
			<DailyCardHumidity
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={onSelectedCardIndex}
				weather={weather}
				humidity={humidity}
			/>
		</>
	)
}

export default HumidityChart