import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../App";
import WindDirection from "./rows/WindDirection";
import UvIndex from "./rows/UvIndex";
import {Caption} from "../../common/Caption";

const DailyTable = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	
	return (
		<>
			<table className="w-full table-fixed rounded-xl overflow-hidden ">
				<thead>
					<tr className={theme.bg800andWhTxt}>
						<th></th>
						{date && date.map(d => (
							<th key={d} className="p-2">
								{DateTime.fromISO(d).toFormat('dd.MM')}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					<UvIndex weather={weather} />
					<WindDirection weather={weather} />
				</tbody>
			</table>
			<Caption>
				Преобладающее направление ветра и суточный максимум{' '}
				<a href="https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index"
					rel="noopener noreferrer"
					target="_blank"
					className="opacity-100 text-blue-800 hover:underline"
				>
					УФ-индекса
				</a>
			</Caption>
		</>
	)
}

export default DailyTable