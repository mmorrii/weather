export const multiaxisLineOption = () => {
	return {
		maintainAspectRatio: false,
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: false,
			},
		},
		scales: {
			y: {
				type: 'linear',
				display: true,
				position: 'left',
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
		layout: {
			padding: {
				top: 10, // Установите желаемый отступ сверху
			},
		},
		// animation: {
		// 	onProgress: (animation) => {
		// 		const ctx = animation.chart.ctx;
		// 		const chart = animation.chart;
		// 		ctx.font = '12px Arial';
		// 		ctx.textAlign = 'center';
		// 		ctx.textBaseline = 'bottom';
		//
		// 		chart.config.data.datasets.forEach((dataset, i) => {
		// 			const meta = chart.getDatasetMeta(i);
		// 			if (!meta.hidden) {
		// 				meta.data.forEach((element, index) => {
		// 					ctx.fillText(dataset.data[index], element.x, element.y - 10); // 10 - расстояние от верхнего края до текста
		// 				})
		// 			}
		// 		})
		// 	}
		// },
	}
}