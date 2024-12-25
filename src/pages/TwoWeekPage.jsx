import { CardsSlider } from "../components/CardsSlider.jsx"
import { useState } from "react"
import { ChartBar } from "../components/ChartBar.jsx"

const TwoWeekPage = () => {
   const [openCard, setOpenCard] = useState(0)

   return (
      <div className="mt-7.5">
         <div className="flex gap-7.5 relative">
            <div className="flex-[0_0_65%] overflow-hidden">
               <CardsSlider openCard={openCard} setOpenCard={setOpenCard} />
            </div>

            <div className="flex-[1_1_35%] overflow-hidden">
               <ChartBar openCard={openCard} />
            </div>

            <h2 className="text-lg absolute -top-[50px] truncate"
                style={{ left: "calc(65% + 30px)", width: "calc(35% - 30px)" }}
            >
               Вероятность осадков
            </h2>
         </div>
      </div>
   )
}

export default TwoWeekPage