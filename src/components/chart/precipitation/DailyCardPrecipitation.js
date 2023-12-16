import {DateTime} from "luxon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {precipitationIcon} from "../../../utils/precipitation-icon";

const DailyCardPrecipitation = ({ weather, onSelectedCardIndex, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const date = weather.daily?.time
	const precipitation = weather.daily?.precipitation_probability_max
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
							precipitationIcon(precipitation[index], "#ffffff") :
							precipitationIcon(precipitation[index], color)
						}
					</div>
					<p title="Максимальная суточная вероятность осадков" >
						{ precipitation[index] }%
					</p>
				</button>
			))}
		</div>
	)
}

export default DailyCardPrecipitation