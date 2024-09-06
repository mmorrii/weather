import {CardsSlider} from "../components/CardsSlider.jsx";
import {useEffect, useRef, useState} from "react";
import {ChartBar} from "../components/ChartBar.jsx";
import {InteractiveMap} from "../components/InteractiveMap.jsx";

const WeekPage = () => {
    const [openCard, setOpenCard] = useState(0)
    const [height, setHeight] = useState(null)

    const sliderRef = useRef(null)

    useEffect(() => {
        if (sliderRef) {
            const height = sliderRef.current.offsetHeight + "px"
            setHeight(height)
        }
    }, []);

    return (
        <div className="mt-[30px]">
            <div className="flex gap-[30px] mb-[30px] relative">
                <div className="flex-[0_0_70%] overflow-hidden">
                    <CardsSlider openCard={openCard} setOpenCard={setOpenCard} sliderHeightRef={sliderRef}/>
                </div>

                <div className="flex-[1_1_30%] overflow-hidden">
                    <ChartBar openCard={openCard} height={height} />
                </div>

                <h2 className="text-lg absolute -top-[50px] truncate" style={{ left: "calc(70% + 30px)", width: "calc(30% - 30px)" }}>
                    Вероятность осадков
                </h2>
            </div>

            <div className="flex gap-[30px] mb-[30px]">
                <div className="flex-[0_0_70%] h-[300px] rounded-lg overflow-hidden">
                    <InteractiveMap/>
                </div>
            </div>
        </div>
    )
}

export default WeekPage