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
import { Line } from 'react-chartjs-2';
import {DateTime} from "luxon";
import {useContext, useState} from "react";
import {ThemeContext} from "../../App";
import DailyCard from "../DailyCard";

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

const ChartComponent = ({ currentWeather }) => {
	const [startIndex, setStartIndex] = useState(0);
	const theme = useContext(ThemeContext)
	
	const temp = currentWeather.hourly?.temperature_2m.map(item => Math.round(item))
	const labels = currentWeather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	// Фильтрация данных с шагом 3
	const tempFiltered = temp?.filter((value, i) => (i + 1) % 3 === 0) ?? []
	const labelsFiltered = labels?.filter((label, i) => (i + 1) % 3 === 0) ?? []
	// console.log(tempFiltered)
	// console.log(labelsFiltered)
	
	const displaySomeElements = (temp) => {
		return temp.slice(startIndex, startIndex + 8)
	}
	
	const handleNextClick = () => {
		if (startIndex + 8 < tempFiltered.length) {
			setStartIndex(startIndex + 8);
		}
	};
	
	const handlePrevClick = () => {
		if (startIndex - 8 >= 0) {
			setStartIndex(startIndex - 8);
		}
	};
	
	const options = {
		maintainAspectRatio: false, // Отключаем автоматическое регулирование высоты
		responsive: true,
		plugins: {
			legend: false,
			tooltip: {
				enabled: false, // Отключаем всплывающие подсказки
			},
		},
		scales: {
			y: {
				// min: Math.min(...tempFiltered) - 2,
				// max: Math.max(...tempFiltered) + 2,
				display: false,
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
		layout: {
			padding: {
				top: 40, // Расстояние от верхнего края до текста
			},
		},
		animation: {
			onProgress: (animation) => {
				const ctx = animation.chart.ctx;
				const chart = animation.chart;
				ctx.font = '14px Arial';
				ctx.fillStyle = theme.hexColor;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';

				chart.config.data.datasets.forEach((dataset, i) => {
					const meta = chart.getDatasetMeta(i);
					if (!meta.hidden) {
						meta.data.forEach((element, index) => {
							const data = dataset.data[index];
							ctx.fillText(data, element.x, element.y - 10); // 10 - расстояние от верхнего края до текста
						});
					}
				});
			},
		}
	};
	
	const data = {
		labels: displaySomeElements(labelsFiltered),
		datasets: [
			{
				fill: true,
				data: displaySomeElements(tempFiltered),
				borderColor: theme.hexColor,
				backgroundColor: theme.hoverColor,
				radius: 0,
				tension: 0.3,
			},
		],
	};
	
	return (
		<div className={`${theme.border} border-2 border-solid rounded-xl bg-white p-5`}>
			<div className="w-full">
				<Line
					height={200}
					options={options}
					data={data} />
			</div>
			<div>
				<div>
					<button
						className="mr-2"
						onClick={handlePrevClick}
						disabled={startIndex === 0}
					>
						Previous
					</button>
					<button
						onClick={handleNextClick}
						disabled={startIndex + 8 >= tempFiltered.length}
					>
						Next
					</button>
				</div>
				<DailyCard currentWeather={currentWeather} />
			</div>
		</div>
	)
}

export default ChartComponent
