
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