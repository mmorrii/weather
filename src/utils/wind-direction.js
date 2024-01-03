export const windDirection = (w) => {
	const directions = [
		{ range: [0, 10, 350, 360], text: "северное", icon: "rotate-0" },
		{ range: [11, 79], text: "северно-восточное", icon: "rotate-45" },
		{ range: [80, 100], text: "восточное", icon: "rotate-90" },
		{ range: [101, 169], text: "южно-восточное", icon: "rotate-[135deg]" },
		{ range: [170, 190], text: "южное", icon: "rotate-180" },
		{ range: [191, 259], text: "южно-западное", icon: "-rotate-[135deg]" },
		{ range: [260, 280], text: "западное", icon: "-rotate-90" },
		{ range: [281, 349], text: "северно-западное", icon: "-rotate-45" },
	];
	
	const direction = directions.find((dir) =>
		dir.range.some((rangeValue, index, array) =>
			(index % 2 === 0) ? w >= rangeValue && w <= array[index + 1] : false
		)
	)
	
	return direction || { text: "неверное значение", icon: "" }
}