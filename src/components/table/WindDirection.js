import ArrowIcon from "../../icons/ArrowIcon";
import {windDirection} from "../../utils/wind-direction";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const WindDirection = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	const windDir = weather.daily?.wind_direction_10m_dominant
	
	return (
		<tr className={theme.bg50}>
			<td className="font-semibold pl-3">Направление ветра</td>
			{windDir && windDir.map((w, index) => (
				<td key={index}
					 className="text-center p-2"
				>
					<div className="w-6 h-5 m-auto mb-1">
						<ArrowIcon
							color={theme.hexColor}
							dir={windDirection(w).icon}
						/>
					</div>
					<p className="text-xs tracking-wide">{ windDirection(w).text }</p>
				</td>
			))}
		</tr>
	)
}

export default WindDirection