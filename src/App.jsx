import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {useData} from "./hooks/useData";
import {useTheme} from "./hooks/useTheme";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import {currentSeason} from "./utils/current-season";
import {getCity, WEATHER} from "./api/api";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Loader from "./components/loader/Loader";
import {Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Today from "./components/pages/Today";
import Weekly from "./components/pages/Weekly";

export const ThemeContext = createContext({})
export const IsDarkContext = createContext(false)

export default function App() {
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	const weather = useData(`${WEATHER}&latitude=${selectedOption.latitude}&longitude=${selectedOption.longitude}`)
	const city = useData(getCity(selectedOption.latitude, selectedOption.longitude))
	const [themeOption, setThemeOption] = useLocalStorage("themeOption","Устройство")
	const isDark = useTheme(themeOption)
	const [isLoading, setIsLoading] = useState(false)
	
	useEffect(() => {
		const timeoutId = setTimeout( () => setIsLoading(false), 2500)
		return () => clearTimeout(timeoutId)
	}, [])
	
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const seasonsTheme = seasonsThemes(weatherCode, timeZone, latitude)
	const curSeason = currentSeason(weatherCode, timeZone, latitude)
	
	return isLoading ? (
		<Loader />
		) : (
		<div className={`${!isDark && seasonsTheme.bg} dark:bg-neutral-900 dark:text-neutral-50 min-h-screen transition`}>
			<div className="max-w-[1500px] font-sans p-4 max-sm:px-2 pb-0 m-auto flex flex-col min-h-screen overflow-hidden">
				<ThemeContext.Provider value={seasonsTheme}>
					<IsDarkContext.Provider value={isDark}>
						<Header
							city={city}
							themeOption={themeOption}
							onChangeTheme={setThemeOption}
							changeSelectedOption={setSelectedOption}
							selectedOption={selectedOption}
							weather={weather}
						/>
						<Routes>
							<Route
								path="/"
								element={<Home weather={weather} selectedOption={selectedOption} cityData={city} />}
							/>
							<Route
								path="/today"
								element={<Today weather={weather} selectedOption={selectedOption} cityData={city} season={curSeason} />}
							/>
							<Route
								path="/weekly"
								element={<Weekly weather={weather} selectedOption={selectedOption} cityData={city} season={curSeason} />}
							/>
						</Routes>
						<Footer />
					</IsDarkContext.Provider>
				</ThemeContext.Provider>
			</div>
		</div>
	)
}