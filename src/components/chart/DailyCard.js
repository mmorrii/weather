import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const DailyCard = ({ weather, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	
	return (
		<div className="flex justify-center gap-6">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => onSelectedCardIndex(index)}
					className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : theme.bg50}
					py-2.5 px-6 rounded-xl text-black`}
				>
					<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
				</button>
			))}
		</div>
	)
}

export default DailyCard