import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {getMaxValues} from "../../../utils/max-min-value";

const DailyCardWindSpeed = ({ weather, onSelectedCardIndex, selectedCardIndex,
										 windSpeedHeight, windSpeed80m, windSpeed120m }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather?.daily?.time
	const windSpeed = weather?.daily?.wind_speed_10m_max.map(item => Math.round(item))
	
	return (
		<div className="w-full overflow-hidden max-md:px-3">
			<div className="flex justify-center max-[690px]:justify-start gap-10 max-lg:gap-4 max-[830px]:gap-2
			max-[690px]:overflow-y-auto hideScrollbar">
				{date?.map((d, index) => (
					<button
						key={d}
						onClick={() => onSelectedCardIndex(index)}
						className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : 'bg-transparent'}
					py-3.5 px-6 flex flex-col items-center gap-0.5 rounded-xl text-black dark:text-neutral-50`}
					>
						<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
						<div
							className="w-11 h-11 text-3xl flex items-center justify-center"
							title="Максимальная суточная скорость ветра"
						>
							{ windSpeedHeight === 10 && windSpeed[index] }
							{ windSpeedHeight === 80 && getMaxValues(windSpeed80m)[index] }
							{ windSpeedHeight === 120 && getMaxValues(windSpeed120m)[index] }
						</div>
						<p> м/с </p>
					</button>
				))}
			</div>
		</div>
	)
}

export default DailyCardWindSpeed