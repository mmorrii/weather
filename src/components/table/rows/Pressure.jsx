import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {displaySomeElements} from "../../../utils/utils";
import PressureIcon from "../../../icons/PressureIcon";
import {useResize} from "../../../hooks/useResize";

const Pressure = ({ weather, selectedCardIndex, pageIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const pressureData = displaySomeElements(weather?.hourly?.pressure_msl, selectedCardIndex)
	const pressure = (windowWidth <= 1050 && windowWidth > 590) ? pressureData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? pressureData?.slice(pageIndex * 2, pageIndex * 2 + 2) : pressureData
	
	return (
		<tr className={`border-y border-solid ${theme.borderColor} ${theme.bg50} dark:bg-neutral-800`}>
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