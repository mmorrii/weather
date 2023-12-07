import {currentSeason} from "./current-season";

export const currentPattern = (code, tz, lat) => {
	const season = currentSeason(code, tz, lat)
	
	switch (season) {
		case "summer":
			return 'url(/images/pattern/summer.png)'
		case "autumn":
			return 'url(/images/pattern/autumn.png)'
		case "winter":
			return 'url(/images/pattern/winter.png)'
		case "spring":
			return 'url(/images/pattern/spring.png)'
		default:
			return null
	}
}