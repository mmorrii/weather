import ClearlyDayIcon from "../icons/ClearlyDayIcon";
import ClearlyNightIcon from "../icons/ClearlyNightIcon";
import PartlyCloudyDayIcon from "../icons/PartlyCloudyDayIcon";
import PartlyCloudyNightIcon from "../icons/PartlyCloudyNightIcon";
import CloudIcon from "../icons/CloudIcon";
import FogIcon from "../icons/FogIcon";
import RainIcon from "../icons/RainIcon";
import HeavyRainIcon from "../icons/HeavyRainIcon";
import SnowIcon from "../icons/SnowIcon";
import SnowRainIcon from "../icons/SnowRainIcon";
import ThunderIcon from "../icons/ThunderIcon";

export const weatherIcons = (code, isDay=true, color) => {
	switch (code) {
		case 0:
		case 1:
			return isDay ?
				<ClearlyDayIcon color={color} /> :
				<ClearlyNightIcon color={color} />
		case 2:
			return isDay ?
				<PartlyCloudyDayIcon color={color} /> :
				<PartlyCloudyNightIcon color={color} />
		case 3:
			return <CloudIcon color={color} />
		case 45:
		case 48:
			return <FogIcon color={color} />
		case 51:
		case 53:
		case 55:
		case 56:
		case 61:
		case 63:
			return <RainIcon color={color} />
		case 57:
		case 65:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			return <HeavyRainIcon color={color} />
		case 71:
		case 73:
		case 75:
		case 77:
			return <SnowIcon color={color} />
		case 85:
		case 86:
			return <SnowRainIcon color={color} />
		case 95:
		case 96:
		case 99:
			return <ThunderIcon color={color} />
		default:
			return "Нет данных"
	}
}