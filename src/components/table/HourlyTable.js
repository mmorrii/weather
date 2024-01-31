import {DateTime} from "luxon";
import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import {displaySomeElements} from "../../utils/utils";
import DailyCard from "./DailyCard";
import SnowDepth from "./rows/SnowDepth";
import Pressure from "./rows/Pressure";
import CloudCover from "./rows/CloudCover";
import Visibility from "./rows/Visibility";
import {currentPattern} from "../../utils/current-pattern";
import ChristmasLightIcon from "../../icons/ChristmasLightIcon";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import {useResize} from "../../hooks/useResize";
import {useLocation} from "react-router-dom";

const HourlyTable = ({ weather, selectedOption, season }) => {
	const location = useLocation()
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	const [pageIndex, setPageIndex] = useState(0)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const timeData = displaySomeElements(weather?.hourly?.time, selectedCardIndex)
	const time = (windowWidth <= 1050 && windowWidth > 590) ? timeData?.slice(pageIndex * 4, pageIndex * 4 + 4) :
		(windowWidth <= 590) ? timeData?.slice(pageIndex * 2, pageIndex * 2 + 2) : timeData
	const length = (windowWidth <= 1050 && windowWidth > 590) ? Math.round(timeData?.length / 4) :
		Math.round(timeData?.length / 2)
	
	const timeZone = weather?.timezone
	const currentTime = DateTime.now().setZone(timeZone).toFormat('HH:mm')
	const currentTimeIndex = timeData.findIndex(t => DateTime.fromISO(t).toFormat('HH:mm') > currentTime)
	
	const weatherCode = weather?.current?.weather_code
	const latitude = selectedOption.latitude
	const bgImg = currentPattern(weatherCode, timeZone, latitude)
	
	return (
		<div className="relative">
			{ season === "winter" &&
				<div className="absolute -top-[2.95rem] max-[768px]:-top-[3.20rem] min-[1440px]:-top-[2.60rem] -left-6">
					<ChristmasLightIcon />
				</div>
			}
			<table className="w-full table-fixed rounded-xl overflow-hidden mb-2">
				<thead>
					<tr className={theme.bg800andWhTxt}>
						<th></th>
						{time && time.map((t, index) => (
							<th
								key={t}
								className={`p-2 ${(windowWidth > 1050 && (index === currentTimeIndex - 1 && selectedCardIndex === 0)) ?
									theme.bg900 : ''}`}
								style={(windowWidth > 1050 && (index === currentTimeIndex - 1 && selectedCardIndex === 0)) ?
									{backgroundImage: bgImg, backgroundSize: '250%'} : {}}
							>
								{ DateTime.fromISO(t).toFormat('HH:mm') }
							</th>
						))}
					</tr>
				</thead>
				<tbody>
				{ season === "winter" &&
					<SnowDepth weather={weather} selectedCardIndex={selectedCardIndex} pageIndex={pageIndex} />
				}
					<Pressure weather={weather} selectedCardIndex={selectedCardIndex} pageIndex={pageIndex} />
					<CloudCover weather={weather} selectedCardIndex={selectedCardIndex} pageIndex={pageIndex} />
					<Visibility weather={weather} selectedCardIndex={selectedCardIndex} pageIndex={pageIndex} />
				</tbody>
			</table>
			{ location.pathname === "/weekly" &&
				<DailyCard
					weather={weather}
					selectedCardIndex={selectedCardIndex}
					onSelectedCardIndex={setSelectedCardIndex}
				/>
			}
			{ windowWidth <= 1050 &&
				<div className="flex justify-end mt-2">
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

export default HourlyTable