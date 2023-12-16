import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import PressureIcon from "../../../icons/PressureIcon";

const Pressure = ({ weather, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const pressure = displaySomeElements(weather.hourly?.pressure_msl, selectedCardIndex)
	
	return (
		<tr className={`border-y border-solid border-blue-800 ${theme.bg50} dark:bg-neutral-800`}>
			<td className="font-semibold pl-2 cursor-default">
				<div className="flex items-center gap-1">
					<div className="flex-shrink-0 w-6 h-6" title="Атмосферное давление на среднем уровне моря">
						<PressureIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
					</div>
					<p>Давление</p>
				</div>
			</td>
			{pressure && pressure.map((p, index) => (
				<td key={index} className="text-center p-2">
					{ Math.round(p) } гПа
				</td>
			))}
		</tr>
	)
}

export default Pressure