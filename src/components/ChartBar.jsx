import { useForecast } from "../hooks/useForecast.js"
import { useEffect, useState } from "react"
import { chartDataGeneration } from "../utils/chartDataUtils.js"
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, ReferenceArea } from "recharts"
import { useHorizontalScroll } from "../hooks/useHorizontalScroll.js"

export const ChartBar = ({ openCard = 0, timeTrack = true }) => {
   const { forecast } = useForecast()
   const scrollRef = useHorizontalScroll()

   const [data, setData] = useState([])
   const [currentIndex, setCurrentIndex] = useState(null)

   useEffect(() => {
      const {arr, currentIndex} = chartDataGeneration(forecast?.hourly?.time, forecast?.hourly?.precipitation_probability, openCard, { timeTrack: timeTrack })
      setData(arr)
      setCurrentIndex(currentIndex)
   }, [forecast, openCard])

   return (
      <div className="w-full h-full overflow-x-auto scrollbar" ref={scrollRef}>
         <div className="w-[820px] h-full">
            <ResponsiveContainer height="100%" width="100%">
               <BarChart
                  data={data} barSize={8}
                  margin={{ top: 15, right: 0, left: 0, bottom: 6 }}
               >
                  <CartesianGrid strokeDasharray="5" vertical={false} className="dark:stroke-zinc-200/20 stroke-black/20" />
                  <XAxis dataKey="x" height={20} axisLine={false}
                         tick={{ fontSize: 13, fontWeight: 400, fill: "#E4E4E759" }} />
                  <YAxis domain={[0, 100]} hide={true} />
                  {/* Translucent background to highlight the current value */}
                  {currentIndex && (
                     <ReferenceArea
                        x1={data[currentIndex].x}
                        x2={data[currentIndex].x}
                        className="dark:fill-zinc-600 dark:opacity-20"
                        stroke="none"
                     />
                  )}
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