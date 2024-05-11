import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import ClearlyDayIcon from "../../../icons/ClearlyDayIcon";
import {useLocation} from "react-router-dom";

const UvIndex = ({ weather, selectedCardIndex }) => {
	const location = useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const currentUvIndex = {
		"/today": weather?.daily?.uv_index_max[0],
		"/weekly": weather?.daily?.uv_index_max[selectedCardIndex]
	}
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11 h-11">
				<ClearlyDayIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>УФ-индекс</p>
				<p className="font-bold">
					{ currentUvIndex[location.pathname] }
				</p>
			</div>
		</div>
	)
}

export default UvIndex