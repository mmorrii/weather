import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";

const DailyCardWindSpeed = ({ weather, onSelectedCardIndex, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	const windSpeed = weather.daily?.wind_speed_10m_max.map(item => Math.round(item))
	
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
					<div
						className="w-11 h-11 text-3xl flex items-center justify-center"
						title="Максимальная суточная скорость ветра"
					>
						{ windSpeed[index] }
					</div>
					<p> м/с </p>
				</button>
			))}
		</div>
	)
}

export default DailyCardWindSpeed