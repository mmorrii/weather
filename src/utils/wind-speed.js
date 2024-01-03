export const windSpeed = (windSpeed) => {
	const wind = Math.round(windSpeed);
	
	const windCategories = [
		{ max: 3, label: "слабый" },
		{ max: 7, label: "умеренный" },
		{ max: 14, label: "сильный" },
		{ max: 19, label: "очень сильный" },
		{ max: 30, label: "шторм" },
		{ max: Infinity, label: "ураган" }
	];
	
	const category = windCategories.find(category => wind <= category.max)
	return category ? category.label : "нет данных"
}
