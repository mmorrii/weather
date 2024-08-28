import {formatTime} from "./formatTime.js";

export const chartDataUtils = (array, index) => {
    const startIndex = index * 24
    const endIndex = startIndex + 24

    return array.slice(startIndex, endIndex)
}

export const chartDataGeneration = (x, y, index) => {
    const visibleXData = chartDataUtils(x, index)
    const visibleYData = chartDataUtils(y, index)

    const arr = []

    for (let i = 0; i < 24; i++) {
        let formatData = formatTime(visibleXData[i], "T")
        arr.push({x: formatData, y: visibleYData[i]})
    }

    return arr
}