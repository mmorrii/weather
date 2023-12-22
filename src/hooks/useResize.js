import {useEffect, useState} from "react";

export const useResize = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	
	const handleResize = () => {
		setWindowWidth(window.innerWidth)
	}
	
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	
	return windowWidth
}