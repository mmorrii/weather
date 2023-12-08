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

const WindSpeedChart = ({ weather, labels, windSpeedHeight }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const windSpeed10m = weather.hourly?.wind_speed_10m.map(item => Math.round(item))
	const windSpeed80m = weather.hourly?.wind_speed_80m.map(item => Math.round(item))
	const windSpeed120m = weather.hourly?.wind_speed_120m.map(item => Math.round(item))
	
	const getData = () => {
		const heightMapping = {
			10: windSpeed10m,
			80: windSpeed80m,
			120: windSpeed120m
		};
		
		return displaySomeElements(heightMapping[windSpeedHeight], selectedCardIndex);
	}
	
	const data = {
		labels: displaySomeElements(labels, selectedCardIndex),
		datasets: [
			{
				fill: true,
				data: getData(),
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
					options={lineOption(theme.hexColor, getData())}
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