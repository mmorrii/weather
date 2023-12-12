import DailyTable from "./table/DailyTable";
import Title from "../common/Title";

const DailyWeather = ({ weather, season }) => {
	return (
		<section className="mb-6">
			<Title>Суточная погода</Title>
			<DailyTable weather={weather} season={season}/>
		</section>
	)
}

export default DailyWeather