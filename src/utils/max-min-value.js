const getValue = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length; i += 24) {
		result.push(arr.slice(i, i + 24));
	}
	
	return result;
}

export const getMaxValues = (arr) => {
	return getValue(arr).map(val => Math.max(...val))
}

export const getMinValues = (arr) => {
	return getValue(arr).map(val => Math.min(...val))
}