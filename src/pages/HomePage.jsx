import {TodayForecastCard} from "../components/TodayForecastCard.jsx";
import {ChartBar} from "../components/ChartBar.jsx";
import {SunPath} from "../icons/SunPath.jsx";

const HomePage = () => {
    return (
        <div className="mt-[30px]">
            <div className="flex gap-[30px]">
                <div className="flex-[0_0_auto]">
                    <TodayForecastCard/>
                </div>

                <div className="flex-[0_0_18.75rem]">
                    <SunPath />
                </div>

                <div className="flex-[0_1_auto] overflow-hidden">
                    <ChartBar timeTrack={false}/>
                </div>
            </div>

        </div>
    )
}

export default HomePage