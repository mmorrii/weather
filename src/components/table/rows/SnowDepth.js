import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import SnowDepthIcon from "../../../icons/SnowDepthIcon";

const SnowDepth = ({ weather, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const depth = displaySomeElements(weather.hourly?.snow_depth, selectedCardIndex)
	
	return (
		<tr className={`border-y border-solid border-blue-800 ${theme.bg50}`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="w-6 h-6">
						<SnowDepthIcon color={theme.hexColor}/>
					</div>
					<p>Глубина снега</p>
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