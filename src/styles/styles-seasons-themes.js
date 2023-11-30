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
			iconStrokeColor: "stroke-blue-800",
			iconFillColor: "fill-blue-800",
			hexColor: "#1e40af",
			hoverColor: "#e0f2fe"
		}
	} else if (season === "spring") {
		return {
			text: "text-green-800",
			border: "border-green-800",
			bg: "bg-gradient-to-t from-green-100 to-sky-100",
			bg100: "bg-green-100",
			bg300: "bg-green-300",
			bg700: "bg-green-700",
			iconStrokeColor: "stroke-green-800",
			iconFillColor: "fill-green-800",
			hexColor: "#166534",
			hoverColor: "#dcfce7"
		}
	} else if (season === "summer") {
		return {
			text: "text-teal-800",
			border: "border-teal-800",
			bg: "bg-gradient-to-t from-teal-100 to-violet-100",
			bg100: "bg-teal-100",
			bg300: "bg-teal-300",
			bg700: "bg-teal-700",
			iconStrokeColor: "stroke-teal-800",
			iconFillColor: "fill-teal-800",
			hexColor: "#115e59",
			hoverColor: "#ccfbf1"
		}
	} else if (season === "autumn") {
		return {
			text: "text-red-800",
			border: "border-red-800",
			bg: "bg-gradient-to-t from-red-100 to-orange-100",
			bg100: "bg-red-100",
			bg300: "bg-red-300",
			bg700: "bg-red-700",
			iconStrokeColor: "stroke-red-800",
			iconFillColor: "fill-red-800",
			hexColor: "#991b1b",
			hoverColor: "#fee2e2"
		}
	}
}