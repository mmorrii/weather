import CurrentWeather from "../components/current-weather/CurrentWeather.jsx";
import InfoBlock from "../components/InfoBlock.jsx";
import HourlyWeather from "../components/HourlyWeather.jsx";
import ChartComponent from "../components/charts/ChartComponent.jsx";

const Today = ({ weather, selectedOption, cityData, season }) => {
	return (
		<main className="flex-auto mb-14">
			<CurrentWeather
				weather={weather}
				selectedOption={selectedOption}
				cityData={cityData}
				selectedCardIndex={0}
			/>
			<InfoBlock weather={weather} selectedOption={selectedOption} />
			<ChartComponent weather={weather} selectedCardIndex={0} />
			<HourlyWeather weather={weather} selectedOption={selectedOption} season={season} />
		</main>
	)
}

export default Today