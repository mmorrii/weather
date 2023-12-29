import {currentSeason} from "./current-season";
import {BASE_URL} from "../settings/baseUrl";

export const currentPattern = (code, tz, lat) => {
	const season = currentSeason(code, tz, lat)
	
	switch (season) {
		case "summer":
			return `url(${BASE_URL}/images/pattern/summer.png)`
		case "autumn":
			return `url(${BASE_URL}/images/pattern/autumn.png)`
		case "winter":
			return `url(${BASE_URL}/images/pattern/winter.png)`
		case "spring":
			return `url(${BASE_URL}/images/pattern/spring.png)`
		default:
			return null
	}
}