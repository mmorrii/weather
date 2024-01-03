import {DateTime} from "luxon";

const seasons = {
	"Зима": [12, 1, 2],
	"Весна": [3, 4, 5],
	"Лето": [6, 7, 8],
	"Осень": [9, 10, 11]
};

const getCurrentMonth = (tz) => {
	const month = DateTime.local().setZone(tz).c.month;
	return Object.keys(seasons).find(season => seasons[season].includes(month));
};

const isEquatorCountries = (lat) => {
	return Math.abs(lat) <= 25
}

const isSnowCode = (code) => {
	return code === 71 || code === 73 || code === 75 || code === 77;
}

export const currentSeason = (code, tz, lat) => {
	const month = getCurrentMonth(tz)
	const isSnow = isSnowCode(code)
	const isEquator = isEquatorCountries(lat)

	if ( isEquator || month === "Лето" ) {
		return "summer"
	} else if ( isSnow || month === "Зима" ) {
		return "winter"
	} else if ( month === "Весна" ) {
		return "spring"
	} else if ( month === "Осень" ) {
		return "autumn"
	}
}