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
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import DailyCardWindSpeed from "./DailyCardWindSpeed";
import {lineOption} from "../options/line";
import {displaySomeElements} from "../../../utils/utils";
import {useResize} from "../../../hooks/useResize";

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

const WindSpeedChart = ({ weather, labels, windSpeedHeight, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const windSpeed10m = weather.hourly?.wind_speed_10m.map(item => Math.round(item))
	const windSpeed80m = weather.hourly?.wind_speed_80m.map(item => Math.round(item))
	const windSpeed120m = weather.hourly?.wind_speed_120m.map(item => Math.round(item))
	const textColor = isDark ? "#ffffff" : "#000000"
	const bgColor = isDark ? theme.hoverDarkColor : theme.hoverColor
	
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
					height={ (windowWidth > 700) ? 200 : 180 }
					options={lineOption(textColor, getData())}
					data={data} />
			</div>
			<DailyCardWindSpeed
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={onSelectedCardIndex}
				weather={weather}
				windSpeedHeight={windSpeedHeight}
				windSpeed80m={windSpeed80m}
				windSpeed120m={windSpeed120m}
			/>
		</>
	)
}

export default WindSpeedChart