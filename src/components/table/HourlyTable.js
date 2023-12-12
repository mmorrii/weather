import {DateTime} from "luxon";
import {useContext, useState} from "react";
import {ThemeContext} from "../../App";
import {displaySomeElements} from "../../utils/utils";
import DailyCard from "../chart/DailyCard";
import SnowDepth from "./rows/SnowDepth";
import Pressure from "./rows/Pressure";
import CloudCover from "./rows/CloudCover";
import Visibility from "./rows/Visibility";
import {currentPattern} from "../../utils/current-pattern";
import ChristmasLightIcon from "../../icons/ChristmasLightIcon";

const HourlyTable = ({ weather, selectedOption, season }) => {
	const theme = useContext(ThemeContext)
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	const time = displaySomeElements(weather.hourly?.time, selectedCardIndex)
	const timezone = weather.timezone
	const currentTime = DateTime.now().setZone(timezone).toFormat('HH:mm')
	const currentTimeIndex = time.findIndex(t => DateTime.fromISO(t).toFormat('HH:mm') > currentTime)
	
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const bgImg = currentPattern(weatherCode, timeZone, latitude)
	
	return (
		<div className="mb-8 relative">
			{ season === "winter" &&
				<div className="absolute -top-[2.95rem] -left-6">
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
								className={`p-2 ${(index === currentTimeIndex - 1 && selectedCardIndex === 0) ?
									theme.bg900 : ''}`}
								style={(index === currentTimeIndex - 1 && selectedCardIndex === 0) ?
									{backgroundImage: bgImg, backgroundSize: '250%'} : {}}
							>
								{ DateTime.fromISO(t).toFormat('HH:mm') }
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