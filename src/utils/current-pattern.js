import {currentSeason} from "./current-season";
import {BASE_URL} from "../config/config";

const patterns = {
	"summer": `url(${BASE_URL}/images/pattern/summer.png)`,
	"autumn": `url(${BASE_URL}/images/pattern/autumn.png)`,
	"winter": `url(${BASE_URL}/images/pattern/winter.png)`,
	"spring": `url(${BASE_URL}/images/pattern/spring.png)`
}

export const currentPattern = (code, tz, lat) => {
	return patterns[currentSeason(code, tz, lat)]
}