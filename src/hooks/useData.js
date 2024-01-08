import {useEffect, useState} from "react";

export const useData = (url) => {
	const [data, setData] = useState(null);
	
	useEffect(() => {
		let ignore = false;
		
		fetch(url)
			.then(response => response.json())
			.then(json => {
				if (!ignore) {
					setData(json)
					// console.log(json)
				}
			})
			.catch((err) => {
				console.log(err.message);
			})
		
		return () => {
			ignore = true;
		}
	}, [url]);
	return data;
}