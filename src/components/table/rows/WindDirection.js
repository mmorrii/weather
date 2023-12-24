import ArrowIcon from "../../../icons/ArrowIcon";
import {windDirection} from "../../../utils/wind-direction";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import WindIcon from "../../../icons/WindIcon";
import {useResize} from "../../../hooks/useResize";

const WindDirection = ({ weather, pageIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const winDirData = weather.daily?.wind_direction_10m_dominant
	const windDir = (windowWidth <= 1050 && windowWidth > 590) ? winDirData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? winDirData?.slice(pageIndex * 2, pageIndex * 2 + 2) : winDirData
	
	return (
		<tr className={`${theme.bg50} dark:bg-neutral-800`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="flex-shrink-0 w-6 h-6">
						<WindIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
					</div>
					<p className="leading-4">Направление ветра</p>
				</div>
			</td>
			{ windDir && windDir.map((w, index) => (
				<td key={index}
					 className="text-center p-2"
				>
					<div className="w-6 h-5 m-auto mb-1">
						<ArrowIcon
							color={isDark ? theme.hexColorDark : theme.hexColor}
							dir={windDirection(w).icon}
						/>
					</div>
					<p className="text-xs tracking-wide">{ windDirection(w).text }</p>
				</td>
			))}
		</tr>
	)
}

export default WindDirection