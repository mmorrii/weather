import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import ClearlyDayIcon from "../../../icons/ClearlyDayIcon";

const UvIndex = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const uvIndex = weather.daily?.uv_index_max
	
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