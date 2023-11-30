export const windDirection = (w) => {
	if ((w >= 0 && w <= 10) || (w >= 350 && w <= 360)) {
		return {
			text: "северное",
			icon: "rotate-0"
		}
	} else if (w >= 11 && w <= 79) {
		return {
			text: "северно-восточное",
			icon: "rotate-45"
		}
	} else if (w >= 80 && w <= 100) {
		return {
			text: "восточное",
			icon: "rotate-90"
		}
	} else if (w >= 101 && w <= 169) {
		return {
			text: "южно-восточное",
			icon: "rotate-[135deg]"
		}
	} else if (w >= 170 && w <= 190) {
		return {
			text: "южное",
			icon: "rotate-180"
		}
	} else if (w >= 191 && w <= 259) {
		return {
			text: "южно-западное",
			icon: "-rotate-[135deg]"
		}
	} else if (w >= 260 && w <= 280) {
		return {
			text: "западное",
			icon: "-rotate-90"
		}
	} else if (w >= 281 && w <= 349) {
		return {
			text: "северно-западное",
			icon: "-rotate-45"
		}
	}
}