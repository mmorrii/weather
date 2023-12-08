import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import EyeIcon from "../../../icons/EyeIcon";

const Visibility = ({ weather, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const visibility = displaySomeElements(weather.hourly?.visibility, selectedCardIndex)
	
	return (
		<tr className={theme.bg50}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="w-6 h-6">
						<EyeIcon color={theme.hexColor}/>
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