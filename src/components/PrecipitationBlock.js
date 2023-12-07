import {useContext} from "react";
import {ThemeContext} from "../App";
import SumIcon from "../icons/SumIcon";
import ClockIcon from "../icons/ClockIcon";
import PrecipitationIcon from "../icons/PrecipitationIcon";
import {currentPattern} from "../utils/current-pattern";

const PrecipitationBlock = ({ weather, selectedOption }) => {
	const theme = useContext(ThemeContext)
	
	const pProbability = weather.daily?.precipitation_probability_max
	const pSum = weather.daily?.precipitation_sum
	const pHours = weather.daily?.precipitation_hours
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const bgImg = currentPattern(weatherCode, timeZone, latitude)
	
	return (
		<div className={`p-5 h-full ${theme.bg800andWhTxt} rounded-xl`}
			  style={{ backgroundImage: bgImg, backgroundSize: 'cover'}}
		>
			<h3 className="font-semibold text-lg mb-3">Суточные осадки</h3>
			<div className="justify-center flex items-center gap-1 mb-4">
				<div className="w-6 h-6">
					<PrecipitationIcon color="#ffffff" />
				</div>
				<p>Вероятность:
					<span className="ml-2 font-semibold text-lg">
							{pProbability ? pProbability[0] : null}%
						</span>
				</p>
			</div>
			<div className="flex gap-3">
				<div className="basis-1/2 justify-center flex items-center gap-1">
					<div className="w-6 h-6">
						<ClockIcon color="#ffffff" />
					</div>
					<p>Кол-во часов:
						<span className="ml-2 font-semibold text-lg">
							{pHours ? pSum[0] : null} ч
						</span>
					</p>
				</div>
				<div className="basis-1/2 justify-center flex items-center gap-1">
					<div className="w-6 h-6">
						<SumIcon color="#ffffff" />
					</div>
					<p>Сумма:
						<span className="ml-2 font-semibold text-lg">
							{pSum ? pSum[0] : null} мм
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default PrecipitationBlock