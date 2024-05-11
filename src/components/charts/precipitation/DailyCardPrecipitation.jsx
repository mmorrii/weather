import {DateTime} from "luxon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../../App";
import {precipitationIcon} from "../../../utils/precipitation-icon.jsx";

const DailyCardPrecipitation = ({ weather, onSelectedCardIndex, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const date = weather?.daily?.time
	const precipitation = weather?.daily?.precipitation_probability_max
	const tempMax = weather?.daily?.temperature_2m_max
	const color = isDark ? theme.hexColorDark : theme.hexColor
	
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
						<div className="w-11 h-11">
							{ selectedCardIndex === index ?
								precipitationIcon(precipitation[index], Math.round(tempMax[index]),"#ffffff") :
								precipitationIcon(precipitation[index], Math.round(tempMax[index]), color)
							}
						</div>
						<p title="Максимальная суточная вероятность осадков" >
							{ precipitation[index] }%
						</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default DailyCardPrecipitation