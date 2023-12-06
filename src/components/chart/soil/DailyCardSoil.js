import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";

const DailyCardSoil = ({ weather, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	
	return (
		<div className="flex justify-between gap-2">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => onSelectedCardIndex(index)}
					className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : 'bg-slate-100'}
					py-2.5 px-6 rounded-xl text-black`}
				>
					<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
				</button>
			))}
		</div>
	)
}

export default DailyCardSoil