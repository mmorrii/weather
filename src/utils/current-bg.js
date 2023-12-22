import {currentSeason} from "./current-season";

export const weatherImgBg = ( code, tz, lat, isDay ) => {
	const season = currentSeason(code, tz, lat)
	const dayOrNight = isDay ? "day" : "night"
	
	switch (code) {
		case 0:
		case 1:
		case 2:
			return {
				backgroundImage: `url('/images/bg/${season}_clearly_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "0 -315px",
			}
		case 3:
			return {
				backgroundImage:`url('/images/bg/${season}_cloudy_${dayOrNight}.jpg')`,
				backgroundSize: "100% auto",
				backgroundPosition: "0 -355px",
			}
		case 45:
		case 48:
			return {
				backgroundImage:`url('/images/bg/${season}_fog_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "0 -315px",
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
				backgroundImage:`url('/images/bg/${season}_rainy_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "0 -300px",
			}
		case 71:
		case 73:
		case 75:
		case 77:
			return {
				backgroundImage:`url('/images/bg/winter_snow_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "0 -285px",
			}
		case 85:
		case 86:
			return {
				backgroundImage:`url('/images/bg/winter_snow_with_rain_${dayOrNight}.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "0 -285px",
			}
		case 95:
			return {
				backgroundImage: `url('/images/bg/thunder.jpg')`,
				backgroundSize: "100% auto",
				backgroundPosition: "0 -24px",
			}
		case 96:
		case 99:
			return {
				backgroundImage: `url('/images/bg/thunder_with_shower_rain.jpg')`,
				backgroundSize: "cover",
				backgroundPosition: "0 -255px",
			}
		default:
			return {}
	}
}