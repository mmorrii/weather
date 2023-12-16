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
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
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

const TempChart = ({ weather, labels, tempHeight, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const temp2m = weather.hourly?.temperature_2m.map(item => Math.round(item))
	const temp80m = weather.hourly?.temperature_80m.map(item => Math.round(item))
	const temp120m = weather.hourly?.temperature_120m.map(item => Math.round(item))
	const textColor = isDark ? "#ffffff" : "#000000"
	const bgColor = isDark ? theme.hoverDarkColor : theme.hoverColor
	
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
				borderColor: isDark ? theme.hexColorDark : theme.hexColor,
				backgroundColor: bgColor,
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
					options={lineOption(textColor, getData())}
					data={data} />
			</div>
			<DailyCardTemp
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={onSelectedCardIndex}
				weather={weather}
				tempHeight={tempHeight}
				temp80m={temp80m}
				temp120m={temp120m}
			/>
		</>
	)
}

export default TempChart