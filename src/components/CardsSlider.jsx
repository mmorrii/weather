import {formatTime} from "../utils/formatTime.js";
import {WeatherIcon} from "./WeatherIcon.jsx";
import {MoveUp} from "lucide-react";
import {getWindDirection} from "../utils/windDirection.js";
import {useForecast} from "../hooks/useForecast.js";
import {useLocation} from "react-router-dom";

export const CardsSlider = ({ openCard, setOpenCard }) => {
    const {forecast} = useForecast()
    const {state} = useLocation()
    const arr = [...Array(state.timeStamp).keys()]

    console.log(forecast)

    return (
        <ul className="flex gap-[10px] overflow-x-auto">
            {arr.map(i => (
                openCard === i ? <OpenCard key={i} forecast={forecast} i={i} /> : <CloseCard key={i} forecast={forecast} i={i} setOpenCard={setOpenCard} />
            ))}
        </ul>
    )
}

const OpenCard = ({ forecast, i }) => {
    return (
        <li className="flex-[0_0_auto] relative dark:bg-zinc-600/40 rounded-lg p-[4px_10px_8px] mb-[8px]">
            <header className="mb-[4px] text-lg">
                <h2>{formatTime(forecast?.daily?.time[i], "cccc", {uppercase: true})}</h2>
            </header>

            <p className="font-semibold text-[2.5rem] leading-[2.75rem] mb-[8px]">
                {Math.round(forecast?.daily?.temperature_2m_max[i])}&deg;
            </p>

            <div className="size-[6rem] absolute top-[30px] right-[20px]">
                <WeatherIcon code={forecast?.daily?.weather_code[i]} isDay={!!forecast?.current?.is_day}/>
            </div>

            <div className="text-[0.8125rem] font-extralight flex items-end gap-[8px]">
                <div className="flex-[0_0_auto] flex flex-col gap-[4px]">
                    <p>Ночью:{' '}
                        <span
                            className="font-medium">{Math.round(forecast?.daily?.temperature_2m_min[i])}&deg;</span>
                    </p>

                    <p>Осадки:{' '}
                        <span
                            className="font-medium">{forecast?.daily?.precipitation_probability_max[i]}%</span>
                    </p>

                    <p className="flex items-center gap-[2px]">Ветер:
                        <span className="block w-fit">
                                    <MoveUp size="0.8125rem"
                                            style={{transform: `rotate(${getWindDirection(forecast?.daily?.wind_direction_10m_dominant[i])?.angle || 0}deg)`}}/>
                                </span>
                        <span
                            className="font-medium">{Math.round(forecast?.daily?.wind_speed_10m_max[i])} км/ч</span>
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
    )
}

const CloseCard = ({ forecast, i, setOpenCard }) => {
    return (
        <li className="flex-[1_1_auto] mb-[8px]">
            <button type="button" onClick={() => setOpenCard(i)}
                    className="dark:bg-zinc-600/40 dark:hover:bg-zinc-600/60 duration-200 rounded-lg p-[4px_10px_6px] w-full h-full flex flex-col items-center justify-between"
            >
                <header className="text-lg">
                    <h2>{formatTime(forecast?.daily?.time[i], "ccc", {uppercase: true})}</h2>
                </header>

                <div className="size-[5rem]">
                    <WeatherIcon code={forecast?.daily?.weather_code[i]} isDay={!!forecast?.current?.is_day}/>
                </div>

                <p className="font-semibold text-4xl">{Math.round(forecast?.daily?.temperature_2m_max[i])}&deg;</p>
            </button>
        </li>
    )
}