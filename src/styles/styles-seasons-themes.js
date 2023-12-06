import {currentSeason} from "../utils/current-season";

export const seasonsThemes = (code, tz, lat) => {
	const season = currentSeason(code, tz, lat)
	
	switch (season) {
		case "winter":
			return {
				text: "text-blue-800",
				textNavBar: "text-blue-800 font-semibold",
				border: "border-blue-800",
				bg: "bg-gradient-to-t from-blue-200 to-slate-100",
				bg50: "bg-blue-50",
				bg100: "bg-blue-100",
				bg300: "bg-blue-300",
				bg700: "bg-blue-700",
				bg800andWhTxt: "bg-blue-800 text-white",
				hexColor: "#1E40AF",
				hoverColor: "#E0F2FE"
			}
		case "spring":
			return {
				text: "text-green-800",
				textNavBar: "text-green-800 font-semibold",
				border: "border-green-800",
				bg: "bg-gradient-to-t from-green-100 to-sky-100",
				bg50: "bg-green-50",
				bg100: "bg-green-100",
				bg300: "bg-green-300",
				bg700: "bg-green-700",
				bg800andWhTxt: "bg-green-800 text-white",
				hexColor: "#166534",
				hoverColor: "#DCFCE7"
			}
		case "summer":
			return {
				text: "text-teal-800",
				border: "border-teal-800",
				textNavBar: "text-teal-800 font-semibold",
				bg: "bg-gradient-to-t from-teal-100 to-violet-100",
				bg50: "bg-teal-50",
				bg100: "bg-teal-100",
				bg300: "bg-teal-300",
				bg700: "bg-teal-700",
				bg800andWhTxt: "bg-teal-800 text-white",
				hexColor: "#115E59",
				hoverColor: "#CCFBF1"
			}
		case "autumn":
			return {
				text: "text-red-800",
				border: "border-red-800",
				textNavBar: "text-red-800 font-semibold",
				bg: "bg-gradient-to-t from-red-100 to-orange-100",
				bg50: "bg-red-50",
				bg100: "bg-red-100",
				bg300: "bg-red-300",
				bg700: "bg-red-700",
				bg800andWhTxt: "bg-red-800 text-white",
				hexColor: "#991B1B",
				hoverColor: "#FEE2E2"
			}
		default:
			return {}
	}
}