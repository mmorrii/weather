import {DateTime} from "luxon";

export const displaySomeElements = (arr, index) => {
	const arrFiltered = arr?.filter((a, i) => (i + 1) % 3 === 0) ?? []
	
	return arrFiltered.slice(index * 8, index * 8 + 8)
}

export const extractSomeElementsFromArray = (arr) => {
	return arr?.slice(0, 24);
}

export const getCurrentIndex = (arr, timeZone) => {
	const timeData = extractSomeElementsFromArray(arr)
	const currentTime = DateTime.now().setZone(timeZone).toFormat('HH')
	
	return timeData?.findIndex(t => DateTime.fromISO(t).toFormat('HH') === currentTime)
}