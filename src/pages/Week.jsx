import {useForecast} from "../hooks/useForecast.js";

export const Week = () => {
    const forecast = useForecast()

    console.log(forecast)

    return (
        <div>
            Week
        </div>
    )
}