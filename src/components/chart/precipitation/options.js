export const precipitationOptions = () => {
	return {
		maintainAspectRatio: false, // Отключаем автоматическое регулирование высоты
		responsive: true,
		plugins: {
			legend: false,
			tooltip: {
				enabled: false, // Отключаем всплывающие подсказки
			},
			hover: {
				mode: null,
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
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
	}
}