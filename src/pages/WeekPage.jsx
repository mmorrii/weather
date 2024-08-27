import {useForecast} from "../hooks/useForecast.js";
import {useLocation} from "react-router-dom";
import {formatTime} from "../utils/formatTime.js";
import {getWindDirection} from "../utils/windDirection.js";
import {WeatherIcon} from "../components/WeatherIcon.jsx";
import {MoveUp} from "lucide-react";

const WeekPage = () => {
    const {forecast} = useForecast()
    const {state} = useLocation()
    const arr = [...Array(state.timeStamp).keys()]

    console.log(forecast)

    return (
        <div className="mt-[30px]">
            <ul className="flex gap-[10px] overflow-x-auto">
                {forecast?.daily?.weather_code[state.timeStamp - 1] && arr.map(i => (
                    <li key={i} className="flex-[0_0_auto] relative dark:bg-zinc-600/40 rounded p-[4px_10px_6px] mb-[8px]">
                        <header className="mb-[4px]">
                            <h2>{formatTime(forecast?.daily?.time[i], "cccc", {uppercase: true})}</h2>
                        </header>

                        <p className="font-bold text-4xl mb-[8px]">{Math.round(forecast?.daily?.temperature_2m_max[i])}&deg;</p>

                        <div className="size-[6rem] absolute top-[30px] right-[20px]">
                            <WeatherIcon code={forecast?.daily?.weather_code[i]} isDay={!!forecast?.current?.is_day} />
                        </div>

                        <div className="text-[0.8125rem] font-extralight flex items-end gap-[8px]">
                            <div className="flex-[0_0_auto] flex flex-col gap-[4px]">
                                {/*<p>Ощущается:{' '}*/}
                                {/*    <span*/}
                                {/*        className="font-medium">{Math.round(forecast?.daily?.apparent_temperature_max[i])}&deg;</span>*/}
                                {/*</p>*/}

                                <p>Ночью:{' '}
                                    <span
                                        className="font-medium">{Math.round(forecast?.daily?.temperature_2m_min[i])}&deg;</span>
                                </p>

                                <p>Осадки:{' '}
                                    <span
                                        className="font-medium">{forecast?.daily?.precipitation_probability_max[i]}%</span>
                                </p>

                                <p className="flex items-center gap-[2px]">Ветер:
                                    <div className="w-fit">
                                        <MoveUp size="0.8125rem" style={{transform: `rotate(${getWindDirection(forecast?.daily?.wind_direction_10m_dominant[i])?.angle}deg)`}} />
                                    </div>
                                    <span className="font-medium">{Math.round(forecast?.daily?.wind_speed_10m_max[i])} км/ч</span>
                                </p>

                                <p>УФ-индекс:{' '}
                                    <span className="font-medium">{Math.round(forecast?.daily?.uv_index_max[i])}</span>
                                </p>
                            </div>

                            <div className="flex-[0_0_auto] flex flex-col gap-[4px]">
                                <p>Восход:{' '}
                                    <span className="font-medium">{formatTime(forecast?.daily?.sunrise[i], "T")}</span>
                                </p>
                                <p>Закат:{' '}
                                    <span className="font-medium">{formatTime(forecast?.daily?.sunset[i], "T")}</span>
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WeekPage