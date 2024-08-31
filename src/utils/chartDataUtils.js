import {formatTime} from "./formatTime.js";
import {DateTime} from "luxon";

export const getPaginatedItems = (array, index) => {
    let startIndex, endIndex

    if (index === 0) {
        startIndex = parseInt(formatTime(DateTime.now().toISO(), "HH"), 10)
        endIndex = startIndex + 24
    } else {
        startIndex = index * 24
        endIndex = startIndex + 24
    }

    return array.slice(startIndex, endIndex)
}

export const chartDataGeneration = (x, y, index) => {
    const visibleXData = getPaginatedItems(x, index)
    const visibleYData = getPaginatedItems(y, index)

    const arr = []

    for (let i = 0; i < 24; i++) {
        const formatData = formatTime(visibleXData[i], "HH")
        arr.push({x: formatData, y: visibleYData[i]})
    }

    return arr
}