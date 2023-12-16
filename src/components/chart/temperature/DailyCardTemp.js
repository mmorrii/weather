import {DateTime} from "luxon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {weatherIcons} from "../../../utils/current-icon";
import {getMaxValues, getMinValues} from "../../../utils/max-min-value";

const DailyCardTemp = ({ weather, onSelectedCardIndex, selectedCardIndex,
								  tempHeight, temp80m, temp120m }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const date = weather.daily?.time
	const weatherCode = weather.daily?.weather_code
	const tempMin = weather.daily?.temperature_2m_min
	const tempMax = weather.daily?.temperature_2m_max
	const color = isDark ? theme.hexColorDark : theme.hexColor
	
	return (
		<div className="flex justify-between gap-2">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => onSelectedCardIndex(index)}
					className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : 'bg-transparent'}
					py-3.5 px-6 flex flex-col items-center gap-0.5 rounded-xl text-black dark:text-neutral-50`}
				>
					<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
					<div className="w-11 h-11">
						{ selectedCardIndex === index ?
							weatherIcons(weatherCode[index], undefined, "#ffffff") :
							weatherIcons(weatherCode[index], undefined,  color)
						}
					</div>
					<p className="flex gap-2">
						<span title="Максимальная суточная температура">
							{ tempHeight === 2 && Math.round(tempMax[index]) }
							{ tempHeight === 80 && getMaxValues(temp80m)[index] }
							{ tempHeight === 120 && getMaxValues(temp120m)[index] }
						</span>
						<span
							className="opacity-60"
							title="Минимальная суточная температура"
						>
							{ tempHeight === 2 && Math.round(tempMin[index]) }
							{ tempHeight === 80 && getMinValues(temp80m)[index] }
							{ tempHeight === 120 && getMinValues(temp120m)[index] }
						</span>
					</p>
				</button>
			))}
		</div>
	)
}

export default DailyCardTemp