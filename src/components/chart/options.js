import {DateTime} from "luxon";

export const chartOptions = (color, temp) => {
	return {
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
				min: Math.min(...temp) - 1,
				max: Math.max(...temp) + 1,
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
				top: 35, // Расстояние от верхнего края до текста
			},
		},
		animation: {
			onProgress: (animation, color) => {
				const ctx = animation.chart.ctx;
				const chart = animation.chart;
				ctx.font = '14px Arial';
				ctx.fillStyle = color;
				ctx.textAlign = 'center';
				ctx.textBaseline = 'bottom';
				
				chart.config.data.datasets.forEach((dataset, i) => {
					const meta = chart.getDatasetMeta(i);
					if (!meta.hidden) {
						meta.data.forEach((element, index) => {
							const data = dataset.data[index];
							ctx.fillText(data, element.x, element.y - 10); // 10 - расстояние от верхнего края до текста
						})
					}
				})
			}
		},
		annotation: {
			annotations: [
				{
					type: 'line',
					mode: 'vertical',
					scaleID: 'x',
					value: DateTime.now().toFormat('HH:mm'), // Значение в формате текущего времени
					borderColor: 'red', // Цвет вертикальной линии
					borderWidth: 2,
					label: {
						enabled: true,
						content: 'Current Time',
					},
				},
			],
		},
	}
	
};