import {useContext} from "react";
import {ThemeContext} from "../App";
import DailyTable from "./table/DailyTable";
import SoilChart from "./chart/SoilChart";

const DetailedWeather = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<>
			<h2 className={`mb-5 text-2xl font-bold ${theme.text}`}>
				Суточная погода
			</h2>
			<DailyTable weather={weather} />
			<SoilChart weather={weather} />
		</>
	)
}

export default DetailedWeather