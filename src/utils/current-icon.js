export const weatherIcons = (code, isDay) => {
	const dayNightSuffix = isDay ? "_day" : "_night";
	
	switch (code) {
		case 0:
		case 1:
			return `/images/icons/clearly_icon${dayNightSuffix}.svg`
		case 2:
			return `/images/icons/partly_cloudy_icon${dayNightSuffix}.svg`
		case 3:
			return "/images/icons/cloud_icon.svg"
		case 45:
		case 48:
			return "/images/icons/fog_icon.svg"
		case 51:
		case 53:
		case 55:
		case 56:
		case 61:
		case 63:
			return "/images/icons/rain_icon.svg"
		case 57:
		case 65:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			return "/images/icons/heavy_rain_icon.svg"
		case 71:
		case 73:
		case 75:
		case 77:
			return "/images/icons/snow_icon.svg"
		case 85:
		case 86:
			return "/images/icons/snow_and_rain_icon.svg"
		case 95:
		case 96:
		case 99:
			return "/images/icons/thunder_icon.svg"
		default:
			return "Нет данных"
	}
}