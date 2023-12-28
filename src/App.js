import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import {currentSeason} from "./utils/current-season";
import {fetchCity, fetchWeather} from "./api/api";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Header from "./components/header/Header";
import DailyWeather from "./components/DailyWeather";
import HourlyWeather from "./components/HourlyWeather";
import Footer from "./components/Footer";
import InfoBlock from "./components/InfoBlock";
import Loader from "./components/loader/Loader";

export const ThemeContext = createContext({})
export const IsDarkContext = createContext(false)

function App() {
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	const [weather, setWeather] = useState({})
	const [city, setCity] = useState({})
	const [isDark, setIsDark] = useLocalStorage("isDarkTheme",false)
	const [isLoading, setIsLoading] = useState(true)
	
	useEffect(() => {
		const handleLoader = () => {
			setTimeout(() => {
				setIsLoading(false)
			}, 3000)
		}

		handleLoader()
	})
	
	useEffect(() => {
		fetchWeather(selectedOption.latitude, selectedOption.longitude, setWeather)
		// const intervalId = setInterval(fetchWeather, 60 * 60 * 1000)
		// return () => clearInterval(intervalId)
		fetchCity(selectedOption.latitude, selectedOption.longitude, setCity)
	}, [selectedOption])
	
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
							onChangeTheme={(val) => setIsDark(val)}
							changeSelectedOption={(val) => setSelectedOption(val)}
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