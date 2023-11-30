import {DateTime} from "luxon";
import {windSpeed} from "../utils/wind-speed";
import {windDirection} from "../utils/wind-direction";
import {useContext} from "react";
import {ThemeContext} from "../App";

const Grid = ({ currentWeather }) => {
	const theme = useContext(ThemeContext)
	const windDir = windDirection(currentWeather.current?.wind_direction_10m)
	
	return (
		<div className={`p-5 border-2 ${theme.border} rounded-xl
			border-solid bg-white flex-shrink-0`} >
			<div className="flex gap-4">
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-3">
						<div className="w-11">
							<svg fill="none" className={`${theme.iconStrokeColor}`} strokeLinecap="round"
								  strokeLinejoin="round" strokeWidth="1.7" viewBox="0 0 24 24" width="95%"
								  xmlns="http://www.w3.org/2000/svg">
								<path d="M17 18a5 5 0 0 0-10 0"/>
								<line x1="12" x2="12" y1="2" y2="9"/>
								<line x1="4.22" x2="5.64" y1="10.22" y2="11.64"/>
								<line x1="1" x2="3" y1="18" y2="18"/>
								<line x1="21" x2="23" y1="18" y2="18"/>
								<line x1="18.36" x2="19.78" y1="11.64" y2="10.22"/>
								<line x1="23" x2="1" y1="22" y2="22"/>
								<polyline points="8 6 12 2 16 6"/>
							</svg>
						</div>
						<div>
							<p>Восход</p>
							<p className="font-bold">
								{ DateTime.fromISO(currentWeather.daily?.sunrise[0]).toFormat('HH:mm') }
							</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="w-11">
							<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								<g strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round"
									className={`${theme.iconStrokeColor}`}>
									<path d="M15 13a5 5 0 1 0-5-5M5 13h10M6 21h14M17 24a3 3 0
							1 0 3-3M24 17a5 5 0 1 0-.869-9.925M3 17h21">
									</path>
								</g>
							</svg>
						</div>
						<div>
							<p>Скорость ветра</p>
							<p className="font-bold">
								{Math.round(currentWeather.current?.wind_speed_10m)} м/с
								<span className="font-normal ml-1 text-xs">
									({ windSpeed(currentWeather.current?.wind_speed_10m) })
								</span>
							</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="w-11">
							<svg className={`${theme.iconFillColor} transform ${windDir?.icon}`} viewBox="0 0 32 32"
								  xmlns="http://www.w3.org/2000/svg">
								<g data-name="Layer 2" id="Layer_2">
									<path d="M9.05,10.05a1,1,0,0,0,1.42,0l4.6-4.6V29a1,1,0,0,0,2,0V5.48l4.57,
									4.57a1,1,0,0,0,1.41-1.41L16.69,2.27a.9.9,0,0,0-1.27,0L9.05,8.64A1,1,0,0,0,9.05,10.05Z"/>
								</g>
							</svg>
						</div>
						<div>
							<p>Направление ветра</p>
							<p className="font-bold">
								{ windDir?.text }
							</p>
						</div>
					</div>
				</div>
				<div className={`max-h-full w-0.5 ${theme.bg700} rounded`}></div>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-3">
						<div className="w-11">
							<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
								  className={`${theme.iconStrokeColor}`} strokeWidth="1.7" viewBox="0 0 24 24"
								  width="95%" xmlns="http://www.w3.org/2000/svg">
								<path d="M17 18a5 5 0 0 0-10 0"/>
								<line x1="12" x2="12" y1="9" y2="2"/>
								<line x1="4.22" x2="5.64" y1="10.22" y2="11.64"/>
								<line x1="1" x2="3" y1="18" y2="18"/>
								<line x1="21" x2="23" y1="18" y2="18"/>
								<line x1="18.36" x2="19.78" y1="11.64" y2="10.22"/>
								<line x1="23" x2="1" y1="22" y2="22"/>
								<polyline points="16 5 12 9 8 5"/>
							</svg>
						</div>
						<div>
							<p>Закат</p>
							<p className="font-bold">
								{ DateTime.fromISO(currentWeather.daily?.sunset[0]).toFormat('HH:mm') }
							</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="w-11" title="Максимальная суточная вероятность осадков">
							<svg fill="none" className={`${theme.iconStrokeColor}`} width="95%"
								  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24"
								  xmlns="http://www.w3.org/2000/svg">
								<line x1="16" x2="16" y1="13" y2="21"/>
								<line x1="8" x2="8" y1="13" y2="21"/>
								<line x1="12" x2="12" y1="15" y2="23"/>
								<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
							</svg>
						</div>
						<div>
							<p>Вероятность осадков</p>
							<p className="font-bold">
								{currentWeather.daily?.precipitation_probability_max[0]}%
							</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="w-11">
							<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
								<g fillRule="evenodd"
									className={`${theme.iconFillColor} ${theme.iconStrokeColor}`}
								>
									<path d="M10.5 25.5h9v1h-9zM12.5 20.5h11v1h-11zM9.5
							15.5h17v1h-17zM6.5 10.5h17v1h-17zM4.5 5.5h23v1h-23z">
									</path>
								</g>
							</svg>
						</div>
						<div>
							<p>Относительная влажность</p>
							<p className="font-bold">
								{Math.round(currentWeather.current?.relative_humidity_2m)}%
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Grid