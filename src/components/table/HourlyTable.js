import {DateTime} from "luxon";
import {useContext, useState} from "react";
import {ThemeContext} from "../../App";
import {displaySomeElements} from "../../utils/utils";
import DailyCard from "../chart/DailyCard";
import SnowDepth from "./rows/SnowDepth";
import Pressure from "./rows/Pressure";
import CloudCover from "./rows/CloudCover";
import Visibility from "./rows/Visibility";

const HourlyTable = ({ weather }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const date = displaySomeElements(weather.hourly?.time, selectedCardIndex)
	
	return (
		<div className="mb-8">
			<table className="w-full table-fixed rounded-xl overflow-hidden mb-2">
				<thead>
					<tr className={theme.bg800andWhTxt}>
						<th></th>
						{date && date.map(d => (
							<th key={d} className="p-2">
								{ DateTime.fromISO(d).toFormat('HH:mm') }
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					<SnowDepth weather={weather} selectedCardIndex={selectedCardIndex} />
					<Pressure weather={weather} selectedCardIndex={selectedCardIndex} />
					<CloudCover weather={weather} selectedCardIndex={selectedCardIndex} />
					<Visibility weather={weather} selectedCardIndex={selectedCardIndex} />
				</tbody>
			</table>
			<DailyCard
				weather={weather}
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
			/>
		</div>
	)
}

export default HourlyTable