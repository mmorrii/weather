const getValue = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length; i += 24) {
		result.push(arr.slice(i, i + 24));
	}
	
	return result;
}

export const getMaxValues = (arr) => {
	const result = getValue(arr)
	let maxArr = [];
	for (let i = 0; i < result.length; i++) {
		maxArr.push(Math.max(...result[i]));
	}
	
	return maxArr;
}

export const getMinValues = (arr) => {
	const result = getValue(arr)
	let minArr = [];
	for (let i = 0; i < result.length; i++) {
		minArr.push(Math.min(...result[i]));
	}
	
	return minArr;
}

