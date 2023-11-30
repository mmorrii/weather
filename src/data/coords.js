const asia = [
	{ value: "Бангладеш", label: "Бангладеш", latitude: 23.7629, longitude: 90.3928 },
	{ value: "Мьянма", label: "Мьянма", latitude: 19.7306, longitude: 96.1297 },
	{ value: "Таиланд", label: "Таиланд", latitude: 13.764, longitude: 100.486 },
	{ value: "Камбоджа", label: "Камбоджа", latitude: 11.561, longitude: 104.908 },
	{ value: "Вьетнам", label: "Вьетнам", latitude: 21.034, longitude: 105.831 },
	{ value: "Оман", label: "Оман", latitude: 23.5793, longitude: 58.3759 },
	{ value: "Йемен", label: "Йемен", latitude: 15.3452, longitude: 44.2159 },
	{ value: "ОАЭ", label: "ОАЭ", latitude: 24.408, longitude: 54.47 },
	{ value: "Сирия", label: "Сирия", latitude: 33.5059, longitude: 36.3112 },
	{ value: "Ливан", label: "Ливан", latitude: 33.874, longitude: 35.5078 },
	{ value: "Иордания", label: "Иордания", latitude: 31.9418, longitude: 35.9253 },
	{ value: "Израиль", label: "Израиль", latitude: 31.7743, longitude: 35.2208 },
	{ value: "Армения", label: "Армения", latitude: 40.1623, longitude: 44.5111 },
	{ value: "Азербайджан", label: "Азербайджан", latitude: 40.3727, longitude: 49.8244 },
	{ value: "Турция", label: "Турция", latitude: 39.9213, longitude: 32.8477 },
	{ value: "Грузия", label: "Грузия", latitude: 41.6944, longitude: 44.8036 },
	{ value: "Иран", label: "Иран", latitude: 35.6763, longitude: 51.394 },
	{ value: "Ирак", label: "Ирак", latitude: 33.2986, longitude: 44.393 },
	{ value: "Шри-Ланка", label: "Шри-Ланка", latitude: 6.9391, longitude: 79.8558 },
	{ value: "Индия", label: "Индия", latitude: 28.6099, longitude: 77.2126 },
	{ value: "Непал", label: "Непал", latitude: 27.6994, longitude: 85.313 },
	{ value: "Саудовская Аравия", label: "Саудовская Аравия", latitude: 24.608, longitude: 46.703 },
	{ value: "Исландия", label: "Исландия", latitude: 64.1323, longitude: -21.926 },
	{ value: "Пакистан", label: "Пакистан", latitude: 33.6872, longitude: 73.0639 },
	{ value: "Афганистан", label: "Афганистан", latitude: 34.5196, longitude: 69.183 },
	{ value: "Таджикистан", label: "Таджикистан", latitude: 38.5702, longitude: 68.7772 },
	{ value: "Узбекистан", label: "Узбекистан", latitude: 41.345, longitude: 69.302 },
	{ value: "Кыргызстан", label: "Кыргызстан", latitude: 42.877, longitude: 74.586 },
	{ value: "Казахстан", label: "Казахстан", latitude: 51.141, longitude: 71.411 },
	{ value: "Япония", label: "Япония", latitude: 35.6875, longitude: 139.7708 },
	{ value: "Китай", label: "Китай", latitude: 39.9056, longitude: 116.396 },
	{ value: "Южная Корея", label: "Южная Корея", latitude: 37.556, longitude: 126.9717 },
	{ value: "Россия", label: "Россия", latitude: 55.733, longitude: 37.617 },
]

const sortedAsia = asia.sort((a, b) => a.value.localeCompare(b.value, 'ru'))

const europe = [
	{ value: "Словения", label: "Словения", latitude: 46.0485, longitude: 14.5081 },
	{ value: "Шотландия", label: "Шотландия", latitude: 55.9503, longitude: -3.1908 },
	{ value: "Испания", label: "Испания", latitude: 40.4177, longitude: -3.69 },
	{ value: "Португалия", label: "Португалия", latitude: 38.7099, longitude: -9.1338 },
	{ value: "Украина", label: "Украина", latitude: 50.4437, longitude: 30.5283 },
	{ value: "Беларусь", label: "Беларусь", latitude: 53.8963, longitude: 27.5565 },
	{ value: "Россия", label: "Россия", latitude: 55.733, longitude: 37.617 },
	{ value: "Молдова", label: "Молдова", latitude: 47.0157, longitude: 28.8377 },
	{ value: "Румыния", label: "Румыния", latitude: 44.4348, longitude: 26.1035 },
	{ value: "Болгария", label: "Болгария", latitude: 42.6963, longitude: 23.3212 },
	{ value: "Польша", label: "Польша", latitude: 52.232, longitude: 21.0086 },
	{ value: "Литва", label: "Литва", latitude: 54.6819, longitude: 25.2768 },
	{ value: "Латвия", label: "Латвия", latitude: 56.9434, longitude: 24.1068 },
	{ value: "Эстония", label: "Эстония", latitude: 59.4353, longitude: 24.7488 },
	{ value: "Финляндия", label: "Финляндия", latitude: 60.1673, longitude: 24.9403 },
	{ value: "Швеция", label: "Швеция", latitude: 59.3257, longitude: 18.0694 },
	{ value: "Норвегия", label: "Норвегия", latitude: 59.9124, longitude: 10.7391 },
	{ value: "Дания", label: "Дания", latitude: 55.6854, longitude: 12.5752 },
	{ value: "Германия", label: "Германия", latitude: 52.5129, longitude: 13.4088 },
	{ value: "Нидерланды", label: "Нидерланды", latitude: 52.3638, longitude: 4.8601 },
	{ value: "Бельгия", label: "Бельгия", latitude: 50.845, longitude: 4.3616 },
	{ value: "Франция", label: "Франция", latitude: 48.853, longitude: 2.347 },
	{ value: "Швейцария", label: "Швейцария", latitude: 46.9473, longitude: 7.4522 },
	{ value: "Италия", label: "Италия", latitude: 41.8997, longitude: 12.4688 },
	{ value: "Великобритания", label: "Великобритания", latitude: 51.5049, longitude: -0.1195 },
	{ value: "Ирландия", label: "Ирландия", latitude: 53.3452, longitude: -6.2629 },
	{ value: "Греция", label: "Греция", latitude: 37.9985, longitude: 23.7277 },
	{ value: "Сербия", label: "Сербия", latitude: 44.801, longitude: 20.4510 },
	{ value: "Венгрия", label: "Венгрия", latitude: 47.484, longitude: 19.061 },
	{ value: "Словакия", label: "Словакия", latitude: 48.155, longitude: 17.067 },
	{ value: "Австрия", label: "Австрия", latitude: 48.2055, longitude: 16.382 },
	{ value: "Чехия", label: "Чехия", latitude: 50.0819, longitude: 14.4223 },
	{ value: "Хорватия", label: "Хорватия", latitude: 45.7944, longitude: 15.9686 },
]

const sortedEurope = europe.sort((a, b) => a.value.localeCompare(b.value, 'ru'))

const southAmerica = [
	{ value: "Боливия", label: "Боливия", latitude: -16.509, longitude: -68.126 },
	{ value: "Перу", label: "Перу", latitude: -11.993, longitude: -76.86 },
	{ value: "Чили", label: "Чили", latitude: -33.576, longitude: -70.664 },
	{ value: "Бразилия", label: "Бразилия", latitude: -15.788, longitude: -47.813 },
	{ value: "Колумбия", label: "Колумбия", latitude: 4.742, longitude: -74.07 },
	{ value: "Венесуэла", label: "Венесуэла", latitude: 10.456, longitude: -66.962 },
	{ value: "Гайана", label: "Гайана", latitude: 6.8092, longitude: -58.1589 },
	{ value: "Парагвай", label: "Парагвай", latitude: -25.2838, longitude: -57.6350 },
	{ value: "Суринам", label: "Суринам", latitude: 5.8211, longitude: -55.1720 },
	{ value: "Уругвай", label: "Уругвай", latitude: -34.9056, longitude: -56.1875 },
	{ value: "Эквадор", label: "Эквадор", latitude: -0.2258, longitude: -78.5152 },
]

const sortedSouthAmerica = southAmerica.sort((a, b) => a.value.localeCompare(b.value, 'ru'))

const northAmerica = [
	{ value: "США", label: "США", latitude: 38.8934, longitude: -77.0004 },
	{ value: "Куба", label: "Куба", latitude: 23.1266, longitude: -82.3672 },
	{ value: "Панама", label: "Панама", latitude: 8.9613, longitude: -79.5410 },
	{ value: "Коста-Рика", label: "Коста-Рика", latitude: 9.9286, longitude: -84.0784 },
	{ value: "Никарагуа", label: "Никарагуа", latitude: 12.1522, longitude: -86.2749 },
	{ value: "Гватемала", label: "Гватемала", latitude: 14.6078, longitude: -90.5466 },
	{ value: "Мексика", label: "Мексика", latitude: 19.411, longitude: -99.157 },
	{ value: "Канада", label: "Канада", latitude: 45.4083, longitude: -75.6876 },
	{ value: "Гренландия", label: "Гренландия", latitude: 64.1742, longitude: -51.7291 },
]

const sortedNorthAmerica = northAmerica.sort((a, b) => a.value.localeCompare(b.value, 'ru'))

const africa = [
	{ value: "Тунис", label: "Тунис", latitude: 36.779, longitude: 10.162 },
	{ value: "Нигер", label: "Нигер", latitude: 13.5045, longitude: 2.1094 },
	{ value: "Нигерия", label: "Нигерия", latitude: 9.0567, longitude: 7.4934 },
	{ value: "Египет", label: "Египет", latitude: 30.04, longitude: 31.2341 },
	{ value: "Алжир", label: "Алжир", latitude: 36.691, longitude: 3.06 },
	{ value: "Марокко", label: "Марокко", latitude: 33.953, longitude: -6.817 },
	{ value: "Мавритания", label: "Мавритания", latitude: 18.073, longitude: -15.974 },
	{ value: "Мали", label: "Мали", latitude: 33.953, longitude: -6.817 },
	{ value: "Буркина-Фасо", label: "Буркина-Фасо", latitude: 12.3537, longitude: -1.5244 },
	{ value: "Чад", label: "Чад", latitude: 12.1105, longitude: 15.0609 },
	{ value: "Судан", label: "Судан", latitude: 15.5901, longitude: 32.5388 },
	{ value: "Эритрея", label: "Эритрея", latitude: 15.3368, longitude: 38.9307 },
	{ value: "Эфиопия", label: "Эфиопия", latitude: 9.01, longitude: 38.7488 },
	{ value: "Джибути", label: "Джибути", latitude: 11.5824, longitude: 43.144 },
	{ value: "Сомали", label: "Сомали", latitude: 2.0345, longitude: 45.3365 },
	{ value: "Южный Судан", label: "Южный Судан", latitude: 4.8427, longitude: 31.5956 },
	{ value: "Уганда", label: "Уганда", latitude: 0.3145, longitude: 32.5817 },
	{ value: "Кения", label: "Кения", latitude: -1.2863, longitude: 36.8179 },
	{ value: "Танзания", label: "Танзания", latitude: -6.1818, longitude: 35.7499 },
	{ value: "Руанда", label: "Руанда", latitude: -1.9525, longitude: 30.0624 },
	{ value: "Бурунди", label: "Бурунди", latitude: -3.4287, longitude: 29.924 },
	{ value: "ДР Конго", label: "ДР Конго", latitude: -4.3234, longitude: 15.3132 },
	{ value: "Габон", label: "Габон", latitude: 0.4055, longitude: 9.4414 },
	{ value: "Камерун", label: "Камерун", latitude: 3.865, longitude: 11.525 },
	{ value: "Бенин", label: "Бенин", latitude: 6.4941, longitude: 2.6209 },
	{ value: "Того", label: "Того", latitude: 6.142, longitude: 1.2154 },
	{ value: "Гана", label: "Гана", latitude: 5.5943, longitude: -0.2087 },
	{ value: "Кот-д'Ивуар", label: "Кот-д'Ивуар", latitude: 6.8126, longitude: -5.2673 },
	{ value: "Либерия", label: "Либерия", latitude: 6.3222, longitude: -10.7831 },
	{ value: "Сьерра-Леоне", label: "Сьерра-Леоне", latitude: 8.469, longitude: -13.2564 },
	{ value: "Гвинея", label: "Гвинея", latitude: 9.516, longitude: -13.701 },
	{ value: "Гвинея-Бисау", label: "Гвинея-Бисау", latitude: 11.8593, longitude: -15.5844 },
	{ value: "Гамбия", label: "Гамбия", latitude: 13.4521, longitude: -16.5791 },
	{ value: "Сенегал", label: "Сенегал", latitude: 14.6953, longitude: -17.4532 },
	{ value: "Ангола", label: "Ангола", latitude: -8.8441, longitude: 13.2495 },
	{ value: "Намибия", label: "Намибия", latitude: -22.5807, longitude: 17.0748 },
	{ value: "Ботсвана", label: "Ботсвана", latitude: -24.6638, longitude: 25.901 },
	{ value: "ЮАР", label: "ЮАР", latitude: -29.1245, longitude: 26.2148 },
	{ value: "Лесото", label: "Лесото", latitude: -29.3112, longitude: 27.4778 },
	{ value: "Эсватини", label: "Эсватини", latitude: -26.3278, longitude: 31.1497 },
	{ value: "Мозамбик", label: "Мозамбик", latitude: -25.9673, longitude: 32.5707 },
	{ value: "Зимбабве", label: "Зимбабве", latitude: -17.833, longitude: 31.046 },
	{ value: "Замбия", label: "Замбия", latitude: -15.459, longitude: 28.334 },
	{ value: "Малави", label: "Малави", latitude: -14.0005, longitude: 33.7555 },
	{ value: "Мадагаскар", label: "Мадагаскар", latitude: -18.9134, longitude: 47.5241 },
]

const sortedAfrica = africa.sort((a, b) => a.value.localeCompare(b.value, 'ru'))

const oceania = [
	{ value: "Новая Зеландия", label: "Новая Зеландия", latitude: -41.253, longitude: 174.814 },
	{ value: "Австралия", label: "Австралия", latitude: -35.3095, longitude: 149.1257 }
]

const sortedOceania = oceania.sort((a, b) => a.value.localeCompare(b.value, 'ru'))

export const groupedOptions = [
	{
		label: 'Азия',
		options: sortedAsia,
	},
	{
		label: 'Африка',
		options: sortedAfrica,
	},
	{
		label: 'Европа',
		options: sortedEurope,
	},
	{
		label: 'Южная Америка',
		options: sortedSouthAmerica,
	},
	{
		label: 'Северная Америка',
		options: sortedNorthAmerica,
	},
	{
		label: 'Океания',
		options: sortedOceania,
	},
];

export {groupedOptions as coords}