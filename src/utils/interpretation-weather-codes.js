export const weatherCodeFn = (code) => {
	switch (code) {
		case 0:
			return "Чистое небо"
		case 1:
			return "Преимущественно ясно"
		case 2:
			return "Переменная облачность"
		case 3:
			return "Пасмурно"
		case 45:
		case 48:
			return "Туман"
		case 51:
			return "Слабая морось"
		case 53:
			return "Умеренная морось"
		case 55:
			return "Плотная морось"
		case 56:
			return "Легкий дождь"
		case 57:
		case 65:
			return "Сильный дождь"
		case 61:
			return "Слабый дождь"
		case 63:
			return "Умеренный дождь"
		case 66:
			return "Легкий ледяной дождь"
		case 67:
			return "Сильный ледяной дождь"
		case 71:
			return "Слабый снегопад"
		case 73:
			return "Умеренный снегопад"
		case 75:
			return "Сильный снегопад"
		case 77:
			return "Снег"
		case 80:
			return "Слабый ливень"
		case 81:
			return "Умеренный ливень"
		case 82:
			return "Сильный ливень"
		case 85:
			return "Слабый снежный ливень"
		case 86:
			return "Сильный снежный ливень"
		case 95:
			return "Гроза"
		case 96:
			return "Гроза с небольшим градом"
		case 99:
			return "Гроза с сильным градом"
		default:
			return "Нет данных"
	}
}
