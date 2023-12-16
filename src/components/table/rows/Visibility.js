import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import EyeIcon from "../../../icons/EyeIcon";

const Visibility = ({ weather, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const visibility = displaySomeElements(weather.hourly?.visibility, selectedCardIndex)
	
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