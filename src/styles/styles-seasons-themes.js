import {currentSeason} from "../utils/current-season";

export const seasonsThemes = (code, tz, lat) => {
	const season = currentSeason(code, tz, lat)
	
	if (season === "winter") {
		return {
			text: "text-blue-800",
			border: "border-blue-800",
			bg: "bg-gradient-to-t from-blue-200 to-slate-100",
			bg100: "bg-blue-100",
			bg300: "bg-blue-300",
			bg700: "bg-blue-700",
			bg800andWhTxt: "bg-blue-800 text-white",
			hexColor: "#1E40AF",
			hoverColor: "#E0F2FE"
		}
	} else if (season === "spring") {
		return {
			text: "text-green-800",
			border: "border-green-800",
			bg: "bg-gradient-to-t from-green-100 to-sky-100",
			bg100: "bg-green-100",
			bg300: "bg-green-300",
			bg700: "bg-green-700",
			bg800andWhTxt: "bg-green-800 text-white",
			hexColor: "#166534",
			hoverColor: "#DCFCE7"
		}
	} else if (season === "summer") {
		return {
			text: "text-teal-800",
			border: "border-teal-800",
			bg: "bg-gradient-to-t from-teal-100 to-violet-100",
			bg100: "bg-teal-100",
			bg300: "bg-teal-300",
			bg700: "bg-teal-700",
			bg800andWhTxt: "bg-teal-800 text-white",
			hexColor: "#115E59",
			hoverColor: "#CCFBF1"
		}
	} else if (season === "autumn") {
		return {
			text: "text-red-800",
			border: "border-red-800",
			bg: "bg-gradient-to-t from-red-100 to-orange-100",
			bg100: "bg-red-100",
			bg300: "bg-red-300",
			bg700: "bg-red-700",
			bg800andWhTxt: "bg-red-800 text-white",
			hexColor: "#991B1B",
			hoverColor: "#FEE2E2"
		}
	}
}