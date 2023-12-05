import {useContext} from "react";
import {ThemeContext} from "../App";
import UvIndexWindDirection from "./table/UvIndexWindDirection";

const DetailedWeather = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<>
			<h2 className={`mb-5 text-2xl font-bold ${theme.text}`}>
				Подробная погода
			</h2>
			<UvIndexWindDirection weather={weather} />
		</>
	)
}

export default DetailedWeather