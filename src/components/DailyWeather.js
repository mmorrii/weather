import DailyTable from "./table/DailyTable";
import Title from "../common/Title";

const DailyWeather = ({ weather }) => {
	return (
		<section className="mb-6">
			<Title>Суточная погода</Title>
			<DailyTable weather={weather} />
		</section>
	)
}

export default DailyWeather