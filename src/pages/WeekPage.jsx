import {CardsSlider} from "../components/CardsSlider.jsx";
import {useState} from "react";
import {ChartBar} from "../components/ChartBar.jsx";

const WeekPage = () => {
    const [openCard, setOpenCard] = useState(0)

    return (
        <div className="mt-[30px]">
            <div className="flex gap-[10px]">
                <div className="flex-[1_1_70%] overflow-hidden">
                    <CardsSlider openCard={openCard} setOpenCard={setOpenCard}/>
                </div>

                <div className="flex-[0_0_30%] overflow-hidden">
                    <ChartBar openCard={openCard} />
                </div>
            </div>
        </div>
    )
}

export default WeekPage