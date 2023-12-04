import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {weatherIcons} from "../../../utils/current-icon";

const DailyCardTemp = ({ weather, onSelectedCardIndex, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	const weatherCode = weather.daily?.weather_code
	const tempMin = weather.daily?.temperature_2m_min
	const tempMax = weather.daily?.temperature_2m_max
	
	return (
		<div className="flex justify-between gap-2">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => onSelectedCardIndex(index)}
					className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : 'bg-transparent'}
					py-3.5 px-6 flex flex-col items-center gap-0.5 rounded-xl text-black`}
				>
				<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
					<div className="w-11 h-11">
						{ selectedCardIndex === index ?
							weatherIcons(weatherCode[index], undefined, "#ffffff") :
							weatherIcons(weatherCode[index], undefined,  theme.hexColor)
						}
					</div>
					<p className="flex gap-2">
						<span title="Максимальная суточная температура">
							{ Math.round(tempMax[index]) }
						</span>
						<span
							className="opacity-60"
							title="Минимальная суточная температура"
						>
							{ Math.round(tempMin[index]) }
						</span>
					</p>
				</button>
			))}
		</div>
	)
}

export default DailyCardTemp