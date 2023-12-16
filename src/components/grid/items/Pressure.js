import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import PressureIcon from "../../../icons/PressureIcon";

const Pressure = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	return (
		<div className="flex items-center gap-3">
			<div
				className="w-11 h-11"
				title="Атмосферное давление воздуха на среднем уровне моря"
			>
				<PressureIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</div>
			<div>
				<p>Давление</p>
				<p className="font-bold">
					{Math.round(weather.current?.pressure_msl)} гПа
				</p>
			</div>
		</div>
	)
}

export default Pressure