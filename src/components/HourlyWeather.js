import SoilChart from "./chart/SoilChart";
import Title from "../common/Title";
import HourlyTable from "./table/HourlyTable";

const HourlyWeather = ({ weather, selectedOption, season }) => {
	return (
		<section className="mb-14">
			<Title>Почасовая погода</Title>
			<HourlyTable weather={weather} selectedOption={selectedOption} season={season} />
			<SoilChart weather={weather} />
		</section>
	)
}

export default HourlyWeather