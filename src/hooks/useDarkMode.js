import {useEffect, useState} from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const useDarkMode = () => {
	const [option, setOption] = useState("device")
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)
	
	useEffect(() => {
		if (option === "dark" || (option === "device" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
	}, [option])
	
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark")
		} else {
			document.body.classList.remove("dark")
		}
	}, [darkMode])

	return {darkMode, setDarkMode, option, setOption}
}