export const windSpeed = (windSpeed) => {
	let wind = Math.round(windSpeed)
	
	if (wind <= 3) {
		return "слабый"
	} else if (wind >= 4 && wind <= 7) {
		return "умеренный"
	} else if (wind >= 8 && wind <= 14) {
		return "сильный"
	} else if (wind >= 15 && wind <= 19) {
		return "очень сильный"
	} else if (wind >= 20 && wind <= 30) {
		return "шторм"
	} else if (wind >= 31) {
		return "ураган"
	}
}