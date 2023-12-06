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
import {useContext, useState} from "react";
import {ThemeContext} from "../../../App";
import DailyCardWindSpeed from "./DailyCardWindSpeed";
import {lineOption} from "../options/line";
import {displaySomeElements} from "../../../utils/utils";

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

const WindSpeedChart = ({ weather, labels }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const windSpeed = weather.hourly?.wind_speed_10m.map(item => Math.round(item))
	const windArr = displaySomeElements(windSpeed, selectedCardIndex)
	
	const data = {
		labels: displaySomeElements(labels, selectedCardIndex),
		datasets: [
			{
				fill: true,
				data: windArr,
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
					options={lineOption(theme.hexColor, windArr)}
					data={data} />
			</div>
			<DailyCardWindSpeed
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
				weather={weather}
			/>
		</>
	)
}

export default WindSpeedChart