import { TodayForecastCard } from "../components/TodayForecastCard.jsx"
import { ChartBar } from "../components/ChartBar.jsx"
import { SunPath } from "../icons/SunPath.jsx"
import { InteractiveMap } from "../components/InteractiveMap.jsx"

const HomePage = () => {
    return (
       <div className="mt-7.5">
          <div className="flex gap-6 mb-7.5">
             <div className="flex-[0_0_auto]">
                <TodayForecastCard />
             </div>

             <div className="flex-[0_0_19rem]">
                <SunPath />
             </div>

             <div className="flex-[0_1_auto] overflow-hidden">
                <ChartBar timeTrack={false} />
             </div>
          </div>

          <div className="w-full h-[300px] rounded-lg overflow-hidden">
             <InteractiveMap />
          </div>
       </div>
    )
}

export default HomePage