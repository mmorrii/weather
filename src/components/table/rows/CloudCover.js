import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import CloudIcon from "../../../icons/CloudIcon";

const CloudCover = ({ weather, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const cloudCover = displaySomeElements(weather.hourly?.cloud_cover_low, selectedCardIndex)
	
	return (
		<tr className={`border-y border-solid border-blue-800 ${theme.bg50}`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="w-6 h-6"><CloudIcon color={theme.hexColor}/></div>
					<p>Облачность</p>
				</div>
			</td>
			{cloudCover && cloudCover.map((c, index) => (
				<td key={index} className="text-center p-2">
					{ c }%
				</td>
			))}
		</tr>
	)
}

export default CloudCover