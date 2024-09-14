import {formatTime} from "./formatTime.js";
import {DateTime} from "luxon";

/**
 * Returns a slice of the array based on the pagination index, with an option to track time for the first page.
 *
 * The function paginates the input array into chunks of 24 items. If the `index` is 0 and `timeTrack` option is enabled,
 * the function will determine the starting index based on the current hour of the day. Otherwise, it will use the provided
 * pagination index to compute the start and end indices for slicing the array.
 *
 * @param {Array} array - The array of items to paginate.
 * @param {number} index - The current pagination index.
 * @param {Object} [opt] - Optional configuration object.
 * @param {boolean} [opt.timeTrack=true] - Optional parameter that determines whether indexing should start from the current time
 *
 * @returns {Array} - A slice of the array, containing up to 24 items starting from the calculated index.
 */
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

/**
 * Generates chart data by paginating the input `x` and `y` arrays and formatting them into an array of objects.
 *
 * The function paginates the `x` and `y` data arrays, formats the `x` data using the specified time format, and
 * pairs each `x` value with its corresponding `y` value. The result is an array of objects where each object
 * contains an `x` (formatted time) and `y` value.
 *
 * @param {Array} x - The array representing the x-axis data (typically timestamps or time-related data).
 * @param {Array} y - The array representing the y-axis data.
 * @param {number} index - The current pagination index.
 * @param {Object} [opt] - Optional configuration object passed to control pagination behavior (e.g., time-based tracking).
 * @param {boolean} [opt.timeTrack] - Optional parameter that determines whether indexing should start from the current time
 *
 * @returns {Array<{x: string, y: any}>} - An array of objects, each containing formatted `x` values and their corresponding `y` values.
 */
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