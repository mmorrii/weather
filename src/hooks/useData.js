import {useEffect, useState} from "react";

export const useData = (url) => {
	const [data, setData] = useState(null);
	
	useEffect(() => {
		let ignore = false;
		console.log("эффект начал выполняться")
		
		fetch(url)
			.then(response => response.json())
			.then(json => {
				if (!ignore) {
					setData(json)
					console.log("запрос получен")
					// console.log(json)
				}
			})
			.catch((err) => {
				console.log(err.message);
			})
		
		return () => {
			ignore = true;
			console.log("очистка эффекта")
		}
	}, [url]);
	return data;
}