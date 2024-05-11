import {currentSeason} from "./current-season";
import {BASE_URL} from "../config/config";

const patterns = {
	"summer": "url(/images/pattern/summer.png)",
	"autumn": "url(/images/pattern/autumn.png)",
	"winter": "url(/images/pattern/winter.png)",
	"spring": "url(/images/pattern/spring.png)"
}

export const currentPattern = (code, tz, lat) => {
	return patterns[currentSeason(code, tz, lat)]
}