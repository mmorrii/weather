import {DateTime} from "luxon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import FogIcon from "../../../icons/FogIcon";
import {getMaxValues} from "../../../utils/max-min-value";

const DailyCardHumidity = ({ weather, onSelectedCardIndex, selectedCardIndex, humidity }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const date = weather.daily?.time
	const color = isDark ? theme.hexColorDark : theme.hexColor
	
	return (
		<div className="flex justify-center gap-10">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => onSelectedCardIndex(index)}
					className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : 'bg-transparent'}
					py-3.5 px-6 flex flex-col items-center gap-0.5 rounded-xl text-black dark:text-neutral-50`}
				>
					<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
					<div className="w-11 h-11">
						{ selectedCardIndex === index ? (
							<FogIcon color="#ffffff"/>
						) : (
							<FogIcon color={color} />
						)}
					</div>
					<p title="Максимальная суточная относительная влажность" >
						{ getMaxValues(humidity)[index] }%
					</p>
				</button>
			))}
		</div>
	)
}

export default DailyCardHumidity