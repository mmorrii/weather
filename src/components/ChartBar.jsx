import { useForecast } from "../hooks/useForecast.js"
import { useEffect, useState } from "react"
import { chartDataGeneration } from "../utils/chartDataUtils.js"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { useHorizontalScroll } from "../hooks/useHorizontalScroll.js"

export const ChartBar = ({ openCard = 0, timeTrack = true }) => {
    const { forecast } = useForecast()
    const scrollRef = useHorizontalScroll()

    const [data, setData] = useState([])

    useEffect(() => {
        const result = chartDataGeneration(forecast?.hourly?.time, forecast?.hourly?.precipitation_probability, openCard, { timeTrack: timeTrack })
        setData(result)
    }, [forecast, openCard])

    return (
        <div className="w-full h-full overflow-x-auto scrollbar" ref={scrollRef}>
            <div className="w-[820px] h-full">
                <ResponsiveContainer>
                    <BarChart
                        data={data} barSize={8}
                        margin={{ top: 15, right: 0, left: 0, bottom: 6 }}
                    >
                        <CartesianGrid strokeDasharray="5" vertical={false} stroke={"#E4E4E735"} />
                        <XAxis dataKey="x" height={20} axisLine={false}
                               tick={{ fontSize: 13, fontWeight: 400, fill: "#E4E4E759" }} />
                        <YAxis domain={[0, 100]} hide={true} />
                        <Bar
                            dataKey="y"
                            fill={"#bfdbfe"}
                            animationEasing={"ease-in-out"}
                            animationDuration={200}
                            radius={[10, 10, 0, 0]}
                            label={{ position: "top", fontSize: 12, fill: "#E4E4E7", formatter: (v) => v + "%" }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}