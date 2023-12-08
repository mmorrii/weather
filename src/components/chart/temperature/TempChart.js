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
import {useContext, useState} from "react";
import {ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import {lineOption} from "../options/line";

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

const TempChart = ({ weather, labels, tempHeight }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const temp2m = weather.hourly?.temperature_2m.map(item => Math.round(item))
	const temp80m = weather.hourly?.temperature_80m.map(item => Math.round(item))
	const temp120m = weather.hourly?.temperature_120m.map(item => Math.round(item))
	
	const getData = () => {
		const heightMapping = {
			2: temp2m,
			80: temp80m,
			120: temp120m
		};
		
		return displaySomeElements(heightMapping[tempHeight], selectedCardIndex);
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
			<DailyCardTemp
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
				weather={weather}
			/>
		</>
	)
}

export default TempChart