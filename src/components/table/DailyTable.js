import {DateTime} from "luxon";
import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import WindDirection from "./rows/WindDirection";
import UvIndex from "./rows/UvIndex";
import {Caption} from "../../common/Caption";
import ChristmasLightIcon from "../../icons/ChristmasLightIcon";
import {useResize} from "../../hooks/useResize";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const DailyTable = ({ weather, season }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	const [pageIndex, setPageIndex] = useState(0)
	
	const dateData = weather.daily?.time
	const date = (windowWidth <= 1050 && windowWidth > 590) ? dateData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? dateData?.slice(pageIndex * 2, pageIndex * 2 + 2) : dateData
	const length = (windowWidth <= 1050 && windowWidth > 590) ? Math.round(dateData?.length / 4) :
		Math.round(dateData?.length / 2)
	
	return (
		<div className="relative">
			{ season === "winter" &&
				<div className="absolute -top-[2.95rem] max-[768px]:-top-[3.20rem] min-[1440px]:-top-[2.60rem] -left-6 ">
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
					<UvIndex weather={weather} pageIndex={pageIndex} />
					<WindDirection weather={weather} pageIndex={pageIndex} />
				</tbody>
			</table>
			<Caption className="mb-1">
				Преобладающее направление ветра и суточный максимум{' '}
				<a href="https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index"
					rel="noopener noreferrer"
					target="_blank"
					className="opacity-100 text-blue-800 dark:text-blue-500 hover:underline"
				>
					УФ-индекса
				</a>
			</Caption>
			{ windowWidth <= 1050 &&
				<div className="flex justify-end">
					<div className="flex gap-3">
						<button
							onClick={() => setPageIndex(prevState => prevState - 1 )}
							disabled={pageIndex === 0}
							className={`${theme.border} ${theme.borderDark} p-1.5 rounded-md disabled:opacity-50`}
						>
							<FaArrowLeft size={22} color={isDark ? theme.hexColorDark : theme.hexColor} />
						</button>
						<button
							onClick={() => setPageIndex(prevState => prevState + 1)}
							disabled={pageIndex === length - 1}
							className={`${theme.border} ${theme.borderDark} p-1.5 rounded-md disabled:opacity-50`}
						>
							<FaArrowRight size={22} color={isDark ? theme.hexColorDark : theme.hexColor} />
						</button>
					</div>
				</div>
			}
		</div>
	)
}

export default DailyTable