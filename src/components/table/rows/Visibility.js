import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import EyeIcon from "../../../icons/EyeIcon";
import {useResize} from "../../../hooks/useResize";

const Visibility = ({ weather, selectedCardIndex, pageIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const visibilityData = displaySomeElements(weather.hourly?.visibility, selectedCardIndex)
	const visibility = (windowWidth <= 1050 && windowWidth > 590) ? visibilityData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? visibilityData?.slice(pageIndex * 2, pageIndex * 2 + 2) : visibilityData
	
	return (
		<tr className={`${theme.bg50} dark:bg-neutral-800`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="flex-shrink-0 w-6 h-6" title="Дальность видимости в метрах">
						<EyeIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
					</div>
					<p>Видимость</p>
				</div>
			</td>
			{visibility && visibility.map((v, index) => (
				<td key={index} className="text-center p-2">
					{ v } м
				</td>
			))}
		</tr>
	)
}

export default Visibility