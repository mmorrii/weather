import BlackBg from "../../common/BlackBg";
import CurrentTime from "./CurrentTime";
import {DateTime} from "luxon";
import CurrentTemp from "./CurrentTemp";
import CurrentBg from "./CurrentBg";
import {seasonsThemes} from "../../styles/styles-seasons-themes";

const CurrentWeather = ({ selectedOption, weather, cityData }) => {
	const timeUpdate = weather?.current?.time
	const formattedDate = DateTime.fromISO(timeUpdate).toFormat('dd.MM.yyyy HH:mm')
	const timeZone = weather?.timezone
	const weatherCode = weather?.current?.weather_code
	const latitude = selectedOption.latitude
	const seasonTheme = seasonsThemes(weatherCode, timeZone, latitude)
	const country = cityData?.results?.[0]?.components?.country
	const city = cityData?.results?.[0]?.components?.city
	
	return (
		<CurrentBg
			weather={weather}
			selectedOption={selectedOption}
			seasonTheme={seasonTheme}
		>
			<div className="flex justify-between items-center">
				<BlackBg>
					<h3>{country}, {city}</h3>
				</BlackBg>
				<BlackBg>
					<CurrentTime timezone={timeZone}/>
				</BlackBg>
			</div>
			<div className="flex items-end justify-between">
				<CurrentTemp weather={weather} />
				<BlackBg>
					<p className="text-sm">
						Последнее обновление:
						<span className="ml-2">{formattedDate}</span>
					</p>
				</BlackBg>
			</div>
		</CurrentBg>
	)
}

export default CurrentWeather