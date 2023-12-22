import {useContext} from "react";
import {ThemeContext} from "../App";
import SumIcon from "../icons/SumIcon";
import ClockIcon from "../icons/ClockIcon";
import PrecipitationIcon from "../icons/PrecipitationIcon";
import {currentPattern} from "../utils/current-pattern";
import {DateTime} from "luxon";

const PrecipitationBlock = ({ weather, selectedOption, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	const pProbability = weather.daily?.precipitation_probability_max
	const pSum = weather.daily?.precipitation_sum
	const pHours = weather.daily?.precipitation_hours
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const bgImg = currentPattern(weatherCode, timeZone, latitude)
	
	return (
		<div className={`flex-auto flex flex-col gap-2 justify-around p-5 max-[350px]:px-2 ${theme.bg800andWhTxt} rounded-xl`}
			  style={{ backgroundImage: bgImg, backgroundSize: 'cover'}}
		>
			<div className="flex justify-between items-center font-semibold text-lg">
				<h3>Суточные осадки</h3>
				<p>{ date && DateTime.fromISO(date[selectedCardIndex]).toFormat('dd.MM') }</p>
			</div>
			<div className="justify-center flex items-center gap-1">
				<div className="w-6 h-6">
					<PrecipitationIcon color="#ffffff" />
				</div>
				<p>Вероятность:
					<span className="ml-2 font-semibold text-lg">
							{pProbability ? pProbability[selectedCardIndex] : null}%
						</span>
				</p>
			</div>
			<div className="flex max-[425px]:flex-col max-[425px]:gap-2">
				<div className="basis-1/2 justify-center max-[425px]:justify-start max-[425px]:ml-5 flex items-center gap-1">
					<div className="w-6 h-6">
						<ClockIcon color="#ffffff" />
					</div>
					<p>Кол-во часов:
						<span className="ml-2 font-semibold text-lg text-nowrap">
							{pHours ? pSum[selectedCardIndex] : null} ч
						</span>
					</p>
				</div>
				<div className="basis-1/2 justify-center max-[425px]:justify-end max-[425px]:mr-5 flex items-center gap-1">
					<div className="w-6 h-6">
						<SumIcon color="#ffffff" />
					</div>
					<p>Сумма:
						<span className="ml-2 font-semibold text-lg">
							{pSum ? pSum[selectedCardIndex] : null} мм
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default PrecipitationBlock