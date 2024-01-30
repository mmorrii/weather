import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import EyeIcon from "../../../icons/EyeIcon";
import {extractSomeElementsFromArray, getCurrentIndex} from "../../../utils/utils";

const Visibility = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const visibility = extractSomeElementsFromArray(weather?.hourly?.visibility)
	const timeZone = weather?.timezone
	const currentTimeIndex = getCurrentIndex(weather?.hourly?.time, timeZone)
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11 h-11">
				<EyeIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Видимость</p>
				<p className="font-bold">
					{visibility ? visibility[currentTimeIndex] : null} м
				</p>
			</div>
		</div>
	)
}

export default Visibility