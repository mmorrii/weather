import {formatTime} from "./formatTime.js";
import {DateTime} from "luxon";

export const getPaginatedItems = (array, index, opt = {timeTrack: true}) => {
    let startIndex, endIndex

    if (index === 0 && opt.timeTrack) {
        startIndex = parseInt(formatTime(DateTime.now().toISO(), "HH"), 10)
        endIndex = startIndex + 24
    } else {
        startIndex = index * 24
        endIndex = startIndex + 24
    }

    return array.slice(startIndex, endIndex)
}

export const chartDataGeneration = (x, y, index, opt) => {
    const visibleXData = getPaginatedItems(x, index, opt)
    const visibleYData = getPaginatedItems(y, index, opt)

    const arr = []

    for (let i = 0; i < 24; i++) {
        const formatData = formatTime(visibleXData[i], "HH")
        arr.push({x: formatData, y: visibleYData[i]})
    }

    return arr
}