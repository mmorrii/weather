export const displaySomeElements = (arr, index) => {
	const arrFiltered = arr?.filter((a, i) => (i + 1) % 3 === 0) ?? []
	
	return arrFiltered.slice(index * 8, index * 8 + 8)
}