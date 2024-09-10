import {useEffect} from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage("darkMode", true)
	
	useEffect(() => {
		if (localStorage.darkMode || (!("darkMode" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
	}, [])

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark")
			document.body.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
			document.body.classList.remove("dark")
		}
	}, [darkMode])

	return {darkMode, setDarkMode}
}