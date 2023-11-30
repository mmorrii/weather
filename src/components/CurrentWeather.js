import BlackBg from "../common/BlackBg";
import CurrentTime from "./CurrentTime";
import {DateTime} from "luxon";
import CurrentTemp from "./CurrentTemp";
import CurrentBg from "./CurrentBg";
import {seasonsThemes} from "../styles/styles-seasons-themes";

const CurrentWeather = ({ selectedOption, currentWeather }) => {
	const timeUpdate = currentWeather?.current?.time
	const formattedDate = DateTime.fromISO(timeUpdate).toFormat('dd.MM.yyyy HH:mm')
	const timeZone = currentWeather?.timezone
	const weatherCode = currentWeather?.current?.weather_code
	const latitude = selectedOption.latitude
	const optionValue = selectedOption.value
	const seasonTheme = seasonsThemes(weatherCode, timeZone, latitude)
	
	return (
		<CurrentBg
			currentWeather={currentWeather}
			selectedOption={selectedOption}
			seasonTheme={seasonTheme}
		>
			<div className="flex justify-between items-center">
				<BlackBg>
					<h3>{timeZone}, {optionValue}</h3>
				</BlackBg>
				<BlackBg>
					<CurrentTime timezone={timeZone}/>
				</BlackBg>
			</div>
			<div className="flex items-end justify-between">
				<CurrentTemp currentWeather={currentWeather} />
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