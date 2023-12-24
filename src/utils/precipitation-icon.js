import CloudIcon from "../icons/CloudIcon";
import HeavyRainIcon from "../icons/HeavyRainIcon";
import RainIcon from "../icons/RainIcon";
import SnowRainIcon from "../icons/SnowRainIcon";

export const precipitationIcon = (p, t, color) => {
	if (t > 0 && (p >= 60 && p < 80)) {
		return <RainIcon color={color} />
	} else if (t > 0 && p >= 80) {
		return <HeavyRainIcon color={color} />
	} else if (t <= 0 && p >= 60) {
		return <SnowRainIcon color={color} />
	} else {
		return <CloudIcon color={color} />
	}
}