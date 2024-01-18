import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useTheme = (option) => {
	const [isDark, setIsDark] = useLocalStorage("isDarkTheme",false);
	
	useEffect(() => {
		if (option === "Темная" || (option === "Устройство" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	}, [option]);
	
	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [isDark])
	
	return isDark;
}