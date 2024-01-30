import CurrentWeather from "../components/current-weather/CurrentWeather";
import InfoBlock from "../components/InfoBlock";
import DailyWeather from "../components/DailyWeather";
import HourlyWeather from "../components/HourlyWeather";

const OldVersion = ({ weather, selectedOption, curSeason, cityData }) => {
	return (
		<main>
			<CurrentWeather
				weather={weather}
				selectedOption={selectedOption}
				cityData={cityData}
			/>
			<InfoBlock weather={weather} selectedOption={selectedOption} />
			<DailyWeather weather={weather} season={curSeason} />
			<HourlyWeather weather={weather} selectedOption={selectedOption} season={curSeason} />
		</main>
	)
}

export default OldVersion