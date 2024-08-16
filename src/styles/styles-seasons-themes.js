import {currentSeason} from "../utils/current-season";

export const seasonsThemes = (code, tz, lat) => {
	const season = currentSeason(code, tz, lat)
	
	switch (season) {
		case "winter":
			return {
				text: "text-blue-800",
				textDark: "dark:text-blue-500",
				textHover: "hover:text-blue-950",
				textHoverDark: "dark:hover:text-blue-600",
				border: "border-blue-800 border-solid border-2",
				borderDark: "dark:border-blue-500 dark:border-solid dark:border-2",
				borderColor: "border-blue-800",
				focusDarkColor: "dark:focus:outline-blue-500",
				bg: "bg-gradient-to-t from-blue-200 to-slate-100",
				bg50: "bg-blue-50",
				bg100: "bg-blue-100",
				bg300: "bg-blue-300",
				bg700: "bg-blue-700",
				bg800andWhTxt: "bg-blue-800 text-white",
				bg900: "bg-blue-900",
				bgHover50: "hover:bg-blue-50",
				bgHover100: "hover:bg-blue-100",
				bgHover900: "hover:bg-blue-900",
				hexColor: "#1E40AF",
				hexColorDark: "#3b82f6",
				hoverColor: "#E0F2FE",
				hoverDarkColor: "rgba(59,130,246,0.2)",
				focusElem: "dark:focus:outline dark:focus:outline-offset-1 dark:focus:outline-blue-500 dark:focus:outline-2 focus:outline focus:outline-offset-1 focus:outline-blue-800 focus:outline-2"
			}
		case "spring":
			return {
				text: "text-green-800",
				textDark: "dark:text-green-500",
				textHover: "hover:text-green-950",
				textHoverDark: "dark:hover:text-green-600",
				border: "border-green-800 border-solid border-2",
				borderDark: "dark:border-green-500 dark:border-solid dark:border-2",
				borderColor: "border-green-800",
				focusDarkColor: "dark:focus:outline-green-500",
				bg: "bg-gradient-to-t from-green-100 to-sky-100",
				bg50: "bg-green-50",
				bg100: "bg-green-100",
				bg300: "bg-green-300",
				bg700: "bg-green-700",
				bg800andWhTxt: "bg-green-800 text-white",
				bg900: "bg-green-900",
				bgHover50: "hover:bg-green-50",
				bgHover100: "hover:bg-green-100",
				bgHover900: "hover:bg-green-900",
				hexColor: "#166534",
				hexColorDark: "#22c55e",
				hoverColor: "#DCFCE7",
				hoverDarkColor: "rgba(34,197,94,0.2)",
				focusElem: "dark:focus:outline dark:focus:outline-offset-1 dark:focus:outline-green-500 dark:focus:outline-2 focus:outline focus:outline-offset-1 focus:outline-green-800 focus:outline-2"
			}
		case "summer":
			return {
				text: "text-teal-800",
				textDark: "dark:text-teal-500",
				textHover: "hover:text-teal-950",
				textHoverDark: "dark:hover:text-teal-600",
				border: "border-teal-800 border-solid border-2",
				borderDark: "dark:border-teal-500 dark:border-solid dark:border-2",
				borderColor: "border-teal-800",
				focusDarkColor: "dark:focus:outline-teal-500",
				bg: "bg-gradient-to-t from-teal-100 to-violet-100",
				bg50: "bg-teal-50",
				bg100: "bg-teal-100",
				bg300: "bg-teal-300",
				bg700: "bg-teal-700",
				bg800andWhTxt: "bg-teal-800 text-white",
				bg900: "bg-teal-900",
				bgHover50: "hover:bg-teal-50",
				bgHover100: "hover:bg-teal-100",
				bgHover900: "hover:bg-teal-900",
				hexColor: "#115E59",
				hexColorDark: "#14b8a6",
				hoverColor: "#CCFBF1",
				hoverDarkColor: "rgba(20,184,166,0.2)",
				focusElem: "dark:focus:outline dark:focus:outline-offset-1 dark:focus:outline-teal-500 dark:focus:outline-2 focus:outline focus:outline-offset-1 focus:outline-teal-800 focus:outline-2"
			}
		case "autumn":
			return {
				text: "text-red-800",
				textDark: "dark:text-red-500",
				textHover: "hover:text-red-950",
				textHoverDark: "dark:hover:text-red-600",
				border: "border-red-800 border-solid border-2",
				borderDark: "dark:border-red-500 dark:border-solid dark:border-2",
				borderColor: "border-red-800",
				focusDarkColor: "dark:focus:outline-red-500",
				bg: "bg-gradient-to-t from-red-100 to-orange-100",
				bg50: "bg-red-50",
				bg100: "bg-red-100",
				bg300: "bg-red-300",
				bg700: "bg-red-700",
				bg800andWhTxt: "bg-red-800 text-white",
				bg900: "bg-red-900",
				bgHover50: "hover:bg-red-50",
				bgHover100: "hover:bg-red-100",
				bgHover900: "hover:bg-red-900",
				hexColor: "#991B1B",
				hexColorDark: "#ef4444",
				hoverColor: "#FEE2E2",
				hoverDarkColor: "rgba(239,68,68,0.2)",
				focusElem: "dark:focus:outline dark:focus:outline-offset-1 dark:focus:outline-red-500 dark:focus:outline-2 focus:outline focus:outline-offset-1 focus:outline-red-800 focus:outline-2"
			}
		default:
			return {}
	}
}