import PrecipitationIcon from "../../icons/PrecipitationIcon";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const PrecipitationProbability = ({ currentWeather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex items-center gap-3">
			<div className="w-11" title="Максимальная суточная вероятность осадков">
				<PrecipitationIcon color={theme.hexColor} />
			</div>
			<div>
				<p>Вероятность осадков</p>
				<p className="font-bold">
					{currentWeather.daily?.precipitation_probability_max[0]}%
				</p>
			</div>
		</div>
	)
}

export default PrecipitationProbability