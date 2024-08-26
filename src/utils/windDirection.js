export const windDirection = (w) => {
	const directions = [
		{ range: [0, 10, 350, 360], text: "северное", icon: "rotate-0" },
		{ range: [11, 79], text: "северо-восточное", icon: "rotate-45" },
		{ range: [80, 100], text: "восточное", icon: "rotate-90" },
		{ range: [101, 169], text: "южно-восточное", icon: "rotate-[135deg]" },
		{ range: [170, 190], text: "южное", icon: "rotate-180" },
		{ range: [191, 259], text: "южно-западное", icon: "-rotate-[135deg]" },
		{ range: [260, 280], text: "западное", icon: "-rotate-90" },
		{ range: [281, 349], text: "северо-западное", icon: "-rotate-45" },
	];
	
	const direction = directions.find((dir) =>
		dir.range.some((rangeValue, index, array) =>
			(index % 2 === 0) ? w >= rangeValue && w <= array[index + 1] : false
		)
	)
	
	return direction || { text: "неверное значение", icon: "" }
}

export const getWindDirection = (degree) => {
	const directions = [
		{value: "С", angle: "0"},
		{value: "С-В", angle: "45"},
		{value: "В", angle: "90"},
		{value: "Ю-В", angle: "135"},
		{value: "Ю", angle: "180"},
		{value: "Ю-З", angle: "225"},
		{value: "З", angle: "270"},
		{value: "С-З", angle: "315"}
	]

	// Convert degree to range from 0 to 360 if degree value will be greater than 360 or negative
	const normalizedDegree = (degree % 360 + 360) % 360;

	// Get centre of the axial directions
	const index = Math.floor((normalizedDegree + 22.5) / 45) % 8;

	return directions[index];
}