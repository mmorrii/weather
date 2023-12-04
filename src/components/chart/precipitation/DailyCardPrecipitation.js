import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";
import {precipitationIcon} from "../../../utils/precipitation-icon";

const DailyCardPrecipitation = ({ weather, onSelectedCardIndex, selectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	const precipitation = weather.daily?.precipitation_probability_max
	
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
							precipitationIcon(precipitation[index], "#ffffff") :
							precipitationIcon(precipitation[index], theme.hexColor)
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