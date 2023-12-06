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
import {displaySomeElements} from "../../../utils/utils";
import {barOption} from "../options/bar";

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
	
	const data = {
		labels: displaySomeElements(labels, selectedCardIndex),
		datasets: [
			{
				data: displaySomeElements(precipitation, selectedCardIndex),
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
			<DailyCardPrecipitation
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
				weather={weather}
			/>
		</>
	)
}

export default PrecipitationChart