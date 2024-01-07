import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import {currentSeason} from "./utils/current-season";
import {getCity, WEATHER} from "./api/api";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Header from "./components/header/Header";
import DailyWeather from "./components/DailyWeather";
import HourlyWeather from "./components/HourlyWeather";
import Footer from "./components/Footer";
import InfoBlock from "./components/InfoBlock";
import Loader from "./components/loader/Loader";
import {useData} from "./hooks/useData";

export const ThemeContext = createContext({})
export const IsDarkContext = createContext(false)

function App() {
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	const weather = useData(`${WEATHER}&latitude=${selectedOption.latitude}&longitude=${selectedOption.longitude}`)
	const city = useData(getCity(selectedOption.latitude, selectedOption.longitude))
	const [isDark, setIsDark] = useLocalStorage("isDarkTheme",false)
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(() => {
		const timeoutId = setTimeout( () => setIsLoading(false), 3000)
		return () => clearTimeout(timeoutId)
	}, [])
	
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const seasonsTheme = seasonsThemes(weatherCode, timeZone, latitude)
	const curSeason = currentSeason(weatherCode, timeZone, latitude)
	
	if (isDark === true) {
		document.documentElement.classList.add("dark")
	} else {
		document.documentElement.classList.remove("dark")
	}
	
	return isLoading ? (
		<Loader />
		) : (
		<div className={`${!isDark && seasonsTheme.bg} dark:bg-neutral-900 dark:text-neutral-50 min-h-screen`}>
			<div className="max-w-[1500px] font-sans p-4 max-sm:px-2 max-sm:pb-0 pb-0 m-auto overflow-hidden">
				<ThemeContext.Provider value={seasonsTheme}>
					<IsDarkContext.Provider value={isDark}>
						<Header
							city={city}
							onChangeTheme={setIsDark}
							changeSelectedOption={setSelectedOption}
							selectedOption={selectedOption}
							weather={weather}
						/>
						<main>
							<CurrentWeather
								weather={weather}
								selectedOption={selectedOption}
								cityData={city}
							/>
							<InfoBlock weather={weather} selectedOption={selectedOption} />
							<DailyWeather weather={weather} season={curSeason} />
							<HourlyWeather weather={weather} selectedOption={selectedOption} season={curSeason} />
						</main>
						<Footer />
					</IsDarkContext.Provider>
				</ThemeContext.Provider>
			</div>
		</div>
	)
}

export default App;