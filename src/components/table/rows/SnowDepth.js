import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import SnowDepthIcon from "../../../icons/SnowDepthIcon";
import {useResize} from "../../../hooks/useResize";

const SnowDepth = ({ weather, selectedCardIndex, pageIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const depthData = displaySomeElements(weather?.hourly?.snow_depth, selectedCardIndex)
	const depth = (windowWidth <= 1050 && windowWidth > 590) ? depthData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? depthData?.slice(pageIndex * 2, pageIndex * 2 + 2) : depthData
	
	return (
		<tr className={`border-y border-solid ${theme.borderColor} ${theme.bg50} dark:bg-neutral-800`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="flex-shrink-0 w-6 h-6" title="Глубина снега на земле">
						<SnowDepthIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
					</div>
					<p className="leading-4">Глубина снега</p>
				</div>
			</td>
			{depth && depth.map((d, index) => (
				<td key={index} className="text-center p-2">
					{d} м
				</td>
			))}
		</tr>
	)
}

export default SnowDepth