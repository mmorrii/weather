import {TodayForecastCard} from "../components/TodayForecastCard.jsx";
import {ChartBar} from "../components/ChartBar.jsx";

const HomePage = () => {
    return (
        <div className="mt-[30px]">
            <div className="flex gap-[30px]">
                <div className="flex-[1_0_auto]">
                    <TodayForecastCard />
                </div>

                <div className="flex-[0_1_auto] flex gap-[30px]">
                    <div className="flex-[0_1_60%]">

                    </div>

                    <div className="overflow-hidden">
                        <ChartBar timeTrack={false}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage