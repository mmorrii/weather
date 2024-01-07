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
import DailyCardPrecipitation from "./DailyCardPrecipitation";
import {displaySomeElements} from "../../../utils/utils";
import {barOption} from "../options/bar";
import {useResize} from "../../../hooks/useResize";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const PrecipitationChart = ({ weather, labels, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const precipitation = weather?.hourly?.precipitation_probability
	const textColor = isDark ? "#ffffff" : "#000000"
	
	const data = {
		labels: displaySomeElements(labels, selectedCardIndex),
		datasets: [
			{
				data: displaySomeElements(precipitation, selectedCardIndex),
				backgroundColor: theme.hexColor,
			},
		],
	};
	
	return (
		<>
			<div className="w-full mb-2">
				<Bar
					height={ (windowWidth > 700) ? 200 : 180 }
					options={barOption(textColor)}
					data={data} />
			</div>
			<DailyCardPrecipitation
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={onSelectedCardIndex}
				weather={weather}
			/>
		</>
	)
}

export default PrecipitationChart