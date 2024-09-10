import {useForecast} from "../hooks/useForecast.js";
import {formatTime} from "../utils/formatTime.js";
import {DateTime} from "luxon";

const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number)
    return hours * 60 + minutes
}

export const SunPath = () => {
    const {forecast} = useForecast()

    const sunrise = formatTime(forecast?.daily?.sunrise?.[0], "T")
    const sunset = formatTime(forecast?.daily?.sunset?.[0], "T")
    const currentTime = formatTime(DateTime.now().toString(), "T")

    const sunriseMinutes = toMinutes(sunrise)
    const sunsetMinutes = toMinutes(sunset)
    const currentMinutes = toMinutes(currentTime)

    const totalDaylightMinutes = sunsetMinutes - sunriseMinutes
    const minutesSinceSunrise = currentMinutes - sunriseMinutes
    const daylightProgress = Math.max(0, Math.min(1, minutesSinceSunrise / totalDaylightMinutes))

    const angle = 180 * (1 - daylightProgress)
    const radius = 45

    const x = 50 + radius * Math.cos((angle * Math.PI) / 180)
    const y = 50 - radius * Math.sin((angle * Math.PI) / 180)

    return (
        <div className="flex flex-col justify-between gap-[4px] h-full">
            <div className="flex-[1_0_auto]">
                <svg width="100%" height="100%" viewBox="0 0 100 50">
                    {/* Semicircular path */}
                    <path d="M 6,50 A 45,50 0 0,1 94,50" strokeLinecap="round" strokeWidth={0.6} fill="none" className="stroke-yellow-400/80" strokeDasharray={4.5}/>

                    <line x1={0} y1={50} x2={100} y2={50} className="stroke-yellow-400/70" strokeWidth={0.5} strokeLinecap="round"/>

                    <svg x={x - 6} y={y} width="0.75em" height="0.75em" viewBox="-15 -15 30 30">
                        <circle className="fill-yellow-400" r="6"/>
                        <path id="ray" strokeLinecap="round" strokeWidth={1.5} className="stroke-yellow-400" d="M 0, 11 L 0, 14"/>
                        <use href="#ray" transform="rotate(45)"/>
                        <use href="#ray" transform="rotate(90)"/>
                        <use href="#ray" transform="rotate(135)"/>
                        <use href="#ray" transform="rotate(180)"/>
                        <use href="#ray" transform="rotate(225)"/>
                        <use href="#ray" transform="rotate(270)"/>
                        <use href="#ray" transform="rotate(315)"/>
                    </svg>
                </svg>
            </div>

            <div className="flex justify-between gap-[4px]">
                <div className="fontSize13">
                    <p>Восход</p>
                    <p>{sunrise}</p>
                </div>
                <div className="flex flex-col items-end fontSize13">
                    <p>Закат</p>
                    <p>{sunset}</p>
                </div>
            </div>
        </div>
    );
};