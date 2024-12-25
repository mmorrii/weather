import { useForecast } from "../hooks/useForecast.js"
import { formatTime } from "../utils/formatTime.js"
import { DateTime } from "luxon"
import { useEffect, useRef, useState } from "react"

export const SunPath = () => {
   const { forecast } = useForecast()
   const pathRef = useRef(null)
   const [sunPosition, setSunPosition] = useState({ x: 0, y: 0 })

   const sunrise = forecast?.daily?.sunrise?.[0]
   const sunset = forecast?.daily?.sunset?.[0]
   const formattedSunrise = formatTime(sunrise, "T")
   const formattedSunset = formatTime(sunset, "T")

   useEffect(() => {
      if (!sunrise || !sunset || !pathRef.current) return

      const sunriseTime = DateTime.fromISO(sunrise).toMillis()
      const sunsetTime = DateTime.fromISO(sunset).toMillis()
      const totalTime = sunsetTime - sunriseTime

      const updatePosition = () => {
         const now = DateTime.now().toMillis()
         const elapsedTime = Math.min(Math.max(now - sunriseTime, 0), totalTime)
         const progress = elapsedTime / totalTime

         const pathLength = pathRef.current?.getTotalLength()
         const point = pathRef.current?.getPointAtLength(progress * pathLength)
         setSunPosition({ x: point.x, y: point.y })
      }
      updatePosition()

      const interval = setInterval(updatePosition, 300 * 1000)

      return () => clearInterval(interval)
   }, [sunrise, sunset])

   return (
      <div className="flex flex-col justify-between gap-[4px] h-full">
         <div className="w-full h-fit">
            <svg width="100%" height="100%" viewBox="0 0 280 150">
               {/* Semicircular path */}
               <path ref={pathRef} d="M 20,150 C 20,-20 260,-20 260,150" strokeLinecap="round" strokeWidth={1}
                     fill="none" className="stroke-yellow-400/80" strokeDasharray={8} />

               <line x1={0} y1={150} x2={280} y2={150} className="stroke-yellow-400/70" strokeWidth={1} />

               {/* Sun */}
               <svg x={sunPosition.x - 20} y={sunPosition.y - 20} width={40} height={40} viewBox="-15 -15 30 30"
                    className={sunPosition.y === 150 ? "hidden" : "block"}
               >
                  <circle className="fill-yellow-400" r="6" />
                  <path id="ray" strokeLinecap="round" strokeWidth={1.5} className="stroke-yellow-400"
                        d="M 0,11 L 0,14" />
                  <use href="#ray" transform="rotate(45)" />
                  <use href="#ray" transform="rotate(90)" />
                  <use href="#ray" transform="rotate(135)" />
                  <use href="#ray" transform="rotate(180)" />
                  <use href="#ray" transform="rotate(225)" />
                  <use href="#ray" transform="rotate(270)" />
                  <use href="#ray" transform="rotate(315)" />
               </svg>

               <defs>
                  <svg id="star" x={90} y={45} width="10" height="10" viewBox="0 0 100 100">
                     <path className="fill-yellow-400 stroke-yellow-400"
                           d="M 0,50
                              Q 50,50 50,0
                              Q 50,50 100,50
                              Q 50,50 50,100
                              Q 50,50 0,50"
                     />
                  </svg>
               </defs>

               <g className={sunPosition.y === 150 ? "block" : "hidden"}>
                  {/* Moon */}
                  <svg x={120} y={40} width={30} height={30} viewBox="-15 -15 30 30">
                     <path className="fill-yellow-400" d="M 9,-10 A 12,12 0 1 0 9,10 A 20,12 0 0 1 9,-10" />
                  </svg>

                  {/* Stars */}
                  <use href="#star" x={0} y={0} className="animate-starGlowReverse" />
                  <use href="#star" x={90} y={15} className="animate-starGlow" />
                  <use href="#star" x={45} y={50} className="animate-starGlow" />
                  <use href="#star" x={120} y={75} className="animate-starGlowReverse" />
                  <use href="#star" x={-40} y={70} className="animate-starGlow" />
                  <use href="#star" width={5} height={5} x={-35} y={30} className="animate-starGlow2" />
                  <use href="#star" width={5} height={5} x={15} y={85} className="animate-starGlow2" />
                  <use href="#star" width={5} height={5} x={90} y={50} className="animate-starGlow2" />
                  <use href="#star" width={4} height={4} x={-5} y={50} className="animate-starGlow2Reverse" />
                  <use href="#star" width={4} height={4} x={70} y={80} className="animate-starGlow2Reverse" />
                  <use href="#star" width={4} height={4} x={130} y={35} className="animate-starGlow2Reverse" />
               </g>
            </svg>
         </div>

         <div className="flex justify-between gap-[4px]">
            <div className="text-13">
               <p>Восход</p>
               <p>{formattedSunrise}</p>
            </div>
            <div className="flex flex-col items-end text-13">
               <p>Закат</p>
               <p>{formattedSunset}</p>
            </div>
         </div>
      </div>
   )
}