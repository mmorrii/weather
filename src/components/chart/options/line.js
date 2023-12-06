export const lineOption = (color, arr) => {
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
				min: Math.min(...arr) - 1,
				max: Math.max(...arr) + 1,
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
};