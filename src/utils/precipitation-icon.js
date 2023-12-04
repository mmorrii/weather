import CloudIcon from "../icons/CloudIcon";
import HeavyRainIcon from "../icons/HeavyRainIcon";

export const precipitationIcon = (p, color) => {
	if (p >= 60) {
		return <HeavyRainIcon color={color} />
	} else {
		return <CloudIcon color={color} />
	}
}