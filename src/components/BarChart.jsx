import {useForecast} from "../hooks/useForecast.js";
import {useMemo} from "react";
import {chartDataGeneration} from "../utils/chartDataUtils.js";
import {ResponsiveBar, ResponsiveBarCanvas} from "@nivo/bar";

export const BarChart = ({ openCard }) => {
    const {forecast} = useForecast()

    const data = useMemo(() => chartDataGeneration(forecast?.hourly?.time, forecast?.hourly?.precipitation_probability, openCard), [openCard])

    console.log(data)

    return (
        <div className="overflow-x-auto w-[full] h-full">
            <ResponsiveBar
                data={data}
                width={860}
                indexBy="x"
                keys={["y"]}
                minValue={0}
                maxValue={100}
                padding={0.3}
                margin={{ top: 10, right: 0, bottom: 25, left: 30 }}
            />
        </div>
    )
}