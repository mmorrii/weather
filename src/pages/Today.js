import CurrentWeather from "../components/current-weather/CurrentWeather";
import InfoBlock from "../components/InfoBlock";
import DailyWeather from "../components/DailyWeather";
import HourlyWeather from "../components/HourlyWeather";

const Today = ({ weather, selectedOption, cityData, season }) => {
	return (
		<main className="flex-auto mb-8">
			<CurrentWeather
				weather={weather}
				selectedOption={selectedOption}
				cityData={cityData}
			/>
			<InfoBlock weather={weather} selectedOption={selectedOption} />
			<DailyWeather weather={weather} season={season} />
			<HourlyWeather weather={weather} selectedOption={selectedOption} season={season} />
		</main>
	)
}

export default Today