import BlackBg from "../../common/BlackBg";
import CurrentTime from "./CurrentTime";
import {DateTime} from "luxon";
import CurrentTemp from "./CurrentTemp";
import CurrentBg from "./CurrentBg";
import {useLocation} from "react-router-dom";
import TodayTemp from "./TodayTemp";

const CurrentWeather = ({ selectedOption, weather, cityData, selectedCardIndex }) => {
	const location = useLocation()
	
	const timeUpdate = weather?.current?.time
	const formattedDate = DateTime.fromISO(timeUpdate).toFormat('dd.MM.yyyy HH:mm')
	const timeZone = weather?.timezone
	
	const country = cityData?.results?.[0]?.components?.country
	const city = cityData?.results?.[0]?.components?.city
	const town = cityData?.results?.[0]?.components?.town
	const district = cityData?.results?.[0]?.components?.district
	const state = cityData?.results?.[0]?.components?.state
	
	return (
		<CurrentBg weather={weather} selectedOption={selectedOption}>
			<div className="flex justify-between items-center gap-2 max-[530px]:items-start">
				<BlackBg>
					<h3>{country}, {city ? city : town ? town : district ? district : state}</h3>
				</BlackBg>
				<BlackBg className="flex-shrink-0">
					<CurrentTime timezone={timeZone}/>
				</BlackBg>
			</div>
			<div className="flex items-end justify-between max-[530px]:flex-col max-[530px]:items-start max-[530px]:gap-2">
				{location.pathname === "/" ? <CurrentTemp weather={weather} /> :
					<TodayTemp weather={weather} selectedCardIndex={selectedCardIndex} />}
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