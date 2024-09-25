import { useForecast } from "../hooks/useForecast.js"
import { useLocation } from "react-router-dom"
import { Suspense } from "react"
import { CircularProgress } from "@nextui-org/react"

export const CustomSuspense = ({ children }) => {
    const { forecast, status } = useForecast()
    const { state } = useLocation()

    return (
        <Suspense fallback={<CircularProgress label="Loading..." className="m-auto mt-[30px]" />}>
            {(status !== "success" && !forecast?.daily?.weather_code[state.timeStamp - 1])
                ? <CircularProgress label="Loading..." className="m-auto mt-[30px]" />
                : children
            }
        </Suspense>
    )
}