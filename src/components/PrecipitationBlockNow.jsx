import PrecipitationIcon from "../icons/PrecipitationIcon";
import {useContext} from "react";
import {ThemeContext} from "../App";
import {currentPattern} from "../utils/current-pattern";
import {extractSomeElementsFromArray, getCurrentIndex} from "../utils/utils";

const PrecipitationBlockNow = ({ weather, selectedOption }) => {
	const theme = useContext(ThemeContext)
	
	const pProbability = extractSomeElementsFromArray(weather?.hourly?.precipitation_probability)
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const bgImg = currentPattern(weatherCode, timeZone, latitude)
	const currentTimeIndex = getCurrentIndex(weather?.hourly?.time, timeZone)
	
	return (
		<div className={`flex-none p-5 ${theme.bg800andWhTxt} rounded-xl flex flex-col justify-center items-center w-1/3 max-lg:w-full`}
			  style={{ backgroundImage: bgImg, backgroundSize: 'cover'}}
		>
			<div className={`flex items-center gap-1 ${theme.bg800andWhTxt} rounded-xl`}>
				<div className="w-6 h-6">
					<PrecipitationIcon color="#ffffff" />
				</div>
				<p>Вероятность осадков:
					<span className="ml-2 font-semibold text-lg">
							{pProbability ? pProbability[currentTimeIndex] : null}%
					</span>
				</p>
			</div>
		</div>
	)
}

export default PrecipitationBlockNow