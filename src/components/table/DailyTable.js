import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../App";
import WindDirection from "./rows/WindDirection";
import UvIndex from "./rows/UvIndex";
import {Caption} from "../../common/Caption";
import ChristmasLightIcon from "../../icons/ChristmasLightIcon";

const DailyTable = ({ weather, season }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	
	return (
		<div className="relative">
			{ season === "winter" &&
				<div className="absolute -top-[2.95rem] max-md:-top-[3.20rem] -left-6 ">
					<ChristmasLightIcon />
				</div>
			}
			<table className="w-full table-fixed rounded-xl overflow-hidden ">
				<thead>
					<tr className={`${theme.bg800andWhTxt}`}>
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
					className="opacity-100 text-blue-800 dark:text-blue-500 hover:underline"
				>
					УФ-индекса
				</a>
			</Caption>
		</div>
	)
}

export default DailyTable