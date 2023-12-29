import {currentSeason} from "./current-season";
import {BASE_URL} from "../settings/baseUrl";

export const weatherImgBg = ( code, tz, lat, isDay, windowWidth ) => {
	const season = currentSeason(code, tz, lat)
	const dayOrNight = isDay ? "day" : "night"
	
	switch (code) {
		case 0:
		case 1:
		case 2:
			return {
				backgroundImage: `url('${BASE_URL}/images/bg/${season}_clearly_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1250) ? "0 -315px" :
					(windowWidth <= 1250 && windowWidth > 1060) ? "0 -215px" :
						(windowWidth <= 1060 && windowWidth > 890) ? "0 -115px" :
							(windowWidth <= 890 && windowWidth > 620) ? "0 -35px" : "center",
			}
		case 3:
			return {
				backgroundImage:`url('${BASE_URL}/images/bg/${season}_cloudy_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1250) ? "0 -355px" :
					(windowWidth <= 1250 && windowWidth > 1060) ? "0 -255px" :
						(windowWidth <= 1060 && windowWidth > 890) ? "0 -155px" :
							(windowWidth <= 890 && windowWidth > 620) ? "0 -55px" : "center",
			}
		case 45:
		case 48:
			return {
				backgroundImage:`url('${BASE_URL}/images/bg/${season}_fog_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1200) ? "0 -315px" :
					(windowWidth <= 1200 && windowWidth > 1020) ? "0 -215px" :
						(windowWidth <= 1020 && windowWidth > 800) ? "0 -115px" : "center",
			}
		case 51:
		case 53:
		case 55:
		case 56:
		case 57:
		case 65:
		case 61:
		case 63:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			return {
				backgroundImage:`url('${BASE_URL}/images/bg/${season}_rainy_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1200) ? "0 -300px" :
					(windowWidth <= 1200 && windowWidth > 1024) ? "0 -200px" : "center",
			}
		case 71:
		case 73:
		case 75:
		case 77:
			return {
				backgroundImage:`url('${BASE_URL}/images/bg/winter_snow_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1350) ? "0 -285px" :
					(windowWidth <= 1350 && windowWidth > 1100) ? "0 -185px" : "center",
			}
		case 85:
		case 86:
			return {
				backgroundImage:`url('${BASE_URL}/images/bg/winter_snow_with_rain_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1200) ? "0 -285px" :
					(windowWidth <= 1200 && windowWidth > 960) ? "0 -185px" : "center",
			}
		case 95:
			return {
				backgroundImage: `url('${BASE_URL}/images/bg/thunder.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 790) ? "0 -24px" : "50% 0",
			}
		case 96:
		case 99:
			return {
				backgroundImage: `url('${BASE_URL}/images/bg/thunder_with_shower_rain.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: (windowWidth > 1200) ? "0 -255px" : "center",
			}
		default:
			return {}
	}
}