import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import ClearlyDayIcon from "../../../icons/ClearlyDayIcon";
import {useResize} from "../../../hooks/useResize";

const UvIndex = ({ weather, pageIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const uvIndexData = weather?.daily?.uv_index_max
	const uvIndex = (windowWidth <= 1050 && windowWidth > 590) ? uvIndexData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? uvIndexData?.slice(pageIndex * 2, pageIndex * 2 + 2) : uvIndexData
	
	return (
		<tr className={`border-y border-solid ${theme.borderColor} ${theme.bg50} dark:bg-neutral-800`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="flex-shrink-0 w-6 h-6">
						<ClearlyDayIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
					</div>
					<p className="leading-4">УФ-индекс</p>
				</div>
			</td>
			{uvIndex && uvIndex.map((uv, index) => (
				<td key={index} className="text-center p-2">
					{uv}
				</td>
			))}
		</tr>
	)
}

export default UvIndex