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


const icons = (code, color, isDay= true)=> {
	return {
		'0,1': {
			day: <ClearlyDayIcon color={color}/>,
			night: <ClearlyNightIcon color={color}/>,
		},
		'2': {
			day: <PartlyCloudyDayIcon color={color}/>,
			night: <PartlyCloudyNightIcon color={color}/>,
		},
		'3': {
			day: <CloudIcon color={color}/>,
			night: <CloudIcon color={color}/>,
		},
		'45,48': {
			day: <FogIcon color={color}/>,
			night: <FogIcon color={color}/>,
		},
		'51,53,55,56,61,63': {
			day: <RainIcon color={color}/>,
			night: <RainIcon color={color}/>,
		},
		'57,65,66,67,80,81,82': {
			day: <HeavyRainIcon color={color}/>,
			night: <HeavyRainIcon color={color}/>,
		},
		'71,73,75,77': {
			day: <SnowIcon color={color}/>,
			night: <SnowIcon color={color}/>,
		},
		'85,86': {
			day: <SnowRainIcon color={color}/>,
			night: <SnowRainIcon color={color}/>,
		},
		'95,96,99': {
			day: <ThunderIcon color={color}/>,
			night: <ThunderIcon color={color}/>,
		}
	}
};

export const weatherIcons = (code, isDay, color) => {
	const icon = icons(code, color, isDay)
	const weatherCode = Object.keys(icon).find(key => key.split(',').includes(code?.toString()));
	const getIcon = weatherCode ? icon[weatherCode] : {};
	
	return isDay ? getIcon.day : getIcon.night;
}
