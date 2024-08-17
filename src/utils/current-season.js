import {DateTime} from "luxon";

const seasons = {
	"winter": [12, 1, 2],
	"spring": [3, 4, 5],
	"summer": [6, 7, 8],
	"autumn": [9, 10, 11]
}

const getCurrentMonth = (tz) => {
	const month = DateTime.local().setZone(tz).c.month;
	return Object.keys(seasons).find(season => seasons[season].includes(month))
}

const isSnowCode = (code) => {
	return code === 71 || code === 73 || code === 75 || code === 77
}

export const currentSeason = (code, tz, lat) => {
	const month = getCurrentMonth(tz)
	const isSnow = isSnowCode(code)
	const isEquatorial = Math.abs(lat) <= 25

	if ( isEquatorial || month === "summer" ) {
		return "summer"
	} else if ( isSnow || month === "winter" ) {
		return "winter"
	} else if ( month === "spring" ) {
		return "spring"
	} else if ( month === "autumn" ) {
		return "autumn"
	}
}