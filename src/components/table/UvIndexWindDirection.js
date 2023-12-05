import {DateTime} from "luxon";
import {windDirection} from "../../utils/wind-direction";
import ArrowIcon from "../../icons/ArrowIcon";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const UvIndexWindDirection = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	const uvIndex = weather.daily?.uv_index_max
	const windDir = weather.daily?.wind_direction_10m_dominant
	
	return (
		<>
			<table className="w-full table-fixed rounded-xl overflow-hidden mb-2">
				<thead>
				<tr className={theme.bg800andWhTxt}>
					<th></th>
					{date && date.map(d => (
						<th
							key={d}
							className="p-2"
						>
							{DateTime.fromISO(d).toFormat('dd.MM')}
						</th>
					))}
				</tr>
				</thead>
				<tbody>
				<tr className={`border-y border-solid border-blue-800 ${theme.bg50}`}>
					<td className="font-semibold pl-3">УФ-индекс</td>
					{uvIndex && uvIndex.map((uv, index) => (
						<td key={index} className="text-center p-2">
							{uv}
						</td>
					))}
				</tr>
				<tr className={theme.bg50}>
					<td className="font-semibold pl-3">Направление ветра</td>
					{windDir && windDir.map((w, index) => (
						<td key={index}
							 className="text-center p-2"
						>
							<div className="w-6 h-5 m-auto mb-1">
								<ArrowIcon
									color={theme.hexColor}
									dir={windDirection(w).icon}
								/>
							</div>
							<p className="text-xs tracking-wide">{ windDirection(w).text }</p>
						</td>
					))}
				</tr>
				</tbody>
			</table>
			<div className="text-center text-sm opacity-70">
				Преобладающее направление ветра и суточный максимум{' '}
				<a href="https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index"
					rel="noopener noreferrer"
					target="_blank"
					className="opacity-100 text-blue-800 hover:underline"
				>
					УФ-индекса
				</a>
			</div>
		</>
	)
}

export default UvIndexWindDirection