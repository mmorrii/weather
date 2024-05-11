import CurrentWeather from "../current-weather/CurrentWeather";
import InfoBlock from "../InfoBlock";
import HourlyWeather from "../HourlyWeather";
import ChartComponent from "../charts/ChartComponent";

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