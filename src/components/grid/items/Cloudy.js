import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import CloudIcon from "../../../icons/CloudIcon";

const Cloudy = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11 h-11">
				<CloudIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Облачность</p>
				<p className="font-bold">{weather?.current?.cloud_cover}%</p>
			</div>
		</div>
	)
}

export default Cloudy