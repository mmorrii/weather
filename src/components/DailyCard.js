import {DateTime} from "luxon";
import {useContext, useState} from "react";
import {ThemeContext} from "../App";
import {weatherIcons} from "../utils/current-icon";

const DailyCard = ({ currentWeather, setSelectedCardIndex }) => {
	const [selectedBtnIndex, setSelectedBtnIndex] = useState(0)
	const theme = useContext(ThemeContext)
	
	const date = currentWeather.daily?.time
	const weatherCode = currentWeather.daily?.weather_code
	const tempMin = currentWeather.daily?.temperature_2m_min
	const tempMax = currentWeather.daily?.temperature_2m_max
	
	const handleChangeIndex = (i) => {
		setSelectedBtnIndex(i)
		setSelectedCardIndex(i)
	}
	
	return (
		<div className="flex justify-between gap-2">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => handleChangeIndex(index)}
					className={` ${ (selectedBtnIndex === index) ? theme.bg800andWhTxt : 'bg-transparent'}
					py-3.5 px-6 flex flex-col items-center gap-0.5 rounded-xl text-black`}
				>
				<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
					<div className="w-11 h-11">
						{ selectedBtnIndex === index ?
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

export default DailyCard