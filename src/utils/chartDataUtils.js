import { formatTime } from "./formatTime.js"
import { DateTime } from "luxon"

/**
 * Function splitting an array into 24 elements with the ability to track time on the first page
 *
 * @param {Array} array - The array of items to paginate.
 * @param {number} index - The current pagination index.
 * @param {Object} [opt] - Optional configuration object.
 * @param {boolean} [opt.timeTrack=true] - Optional parameter determining whether the array should start from the current time
 *
 * @returns {Array} - The array with 24 items
 */
const getPaginatedItems = (array, index, opt = { timeTrack: true }) => {
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

/**
 * Function for generating an array of objects for a chart with x-axis (time) and y-axis (values) and current index
 *
 * @param {Array} x - The array timestamps
 * @param {Array} y - The array values
 * @param {number} index - The current pagination index
 * @param {Object} [opt] - Optional configuration
 * @param {boolean} [opt.timeTrack] - Optional parameter that determines whether indexing should start from the current time
 *
 * @returns {{arr: Array<{x: string, y: any}>, currentIndex: number | null}}
 */
export const chartDataGeneration = (x, y, index, opt) => {
    const visibleXData = getPaginatedItems(x, index, opt)
    const visibleYData = getPaginatedItems(y, index, opt)

    const arr = []
    let currentIndex = null

    for (let i = 0; i < 24; i++) {
        const formatData = formatTime(visibleXData[i], "HH")
        arr.push({ x: formatData, y: visibleYData[i] })
    }

    if (index === 0 && !opt.timeTrack) {
        const currentTime = DateTime.local().toFormat("HH")
        currentIndex = arr.findIndex((item) => item.x === currentTime)
    }

    return { arr: arr,  currentIndex: currentIndex }
}