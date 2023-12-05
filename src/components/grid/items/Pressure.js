import {useContext} from "react";
import {ThemeContext} from "../../../App";
import PressureIcon from "../../../icons/PressureIcon";

const Pressure = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex items-center gap-3">
			<div
				className="w-11 h-11"
				title="Давление на уровне моря"
			>
				<PressureIcon color={theme.hexColor} />
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