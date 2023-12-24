import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../App";

const DailyCard = ({ weather, selectedCardIndex, onSelectedCardIndex }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	
	return (
		<div className="w-full overflow-hidden max-md:px-3">
			<div className="flex justify-center max-[625px]:justify-start gap-6 max-[830px]:gap-2
			max-[625px]:overflow-y-auto hideScrollbar">
				{date?.map((d, index) => (
					<button
						key={d}
						onClick={() => onSelectedCardIndex(index)}
						className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt :
							`${theme.bg50} hover:bg-gray-50 dark:text-neutral-50 dark:bg-zinc-800 dark:hover:bg-zinc-900`}
					py-2.5 px-6 rounded-xl text-black`}
					>
						<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default DailyCard