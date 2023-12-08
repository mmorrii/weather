import SoilChart from "./chart/SoilChart";
import Title from "../common/Title";
import HourlyTable from "./table/HourlyTable";

const HourlyWeather = ({ weather }) => {
	return (
		<section>
			<Title>Почасовая погода</Title>
			<HourlyTable weather={weather} />
			<SoilChart weather={weather} />
		</section>
	)
}

export default HourlyWeather