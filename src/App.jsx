import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import {useData} from "./hooks/useData";
import {useDarkMode} from "./hooks/useDarkMode.js";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import {currentSeason} from "./utils/current-season";
import {getCity, WEATHER} from "./api/api";
import Header from "./components/header/Header";
import Footer from "./layout/Footer.jsx";
import Loader from "./components/loader/Loader";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Today from "./pages/Today";
import Weekly from "./pages/Weekly";
import {useLocalStorage} from "@uidotdev/usehooks";
import Layout from "./layout/Layout.jsx";

export const ThemeContext = createContext({})
export const IsDarkContext = createContext(false)

export default function App() {
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	const weather = useData(`${WEATHER}&latitude=${selectedOption.latitude}&longitude=${selectedOption.longitude}`)
	const city = useData(getCity(selectedOption.latitude, selectedOption.longitude))
	const {isDark} = useDarkMode()
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
		<div className={`${!isDark && seasonsTheme.bg} dark:bg-neutral-900 dark:text-neutral-50 min-h-screen`}>
			<div className="max-w-[1500px] font-sans p-4 max-sm:px-2 pb-0 m-auto flex flex-col min-h-screen overflow-hidden">
				<ThemeContext.Provider value={seasonsTheme}>
					<IsDarkContext.Provider value={isDark}>
						<Header
							city={city}
							changeSelectedOption={setSelectedOption}
							selectedOption={selectedOption}
							weather={weather}
						/>
						<Routes>
							<Route path="/" element={<Layout />}>
								<Route
									path="/"
									element={<Home weather={weather} selectedOption={selectedOption} cityData={city} />}
								/>
								{/*<Route*/}
								{/*	path="/today"*/}
								{/*	element={<Today weather={weather} selectedOption={selectedOption} cityData={city} season={curSeason} />}*/}
								{/*/>*/}
								{/*<Route*/}
								{/*	path="/weekly"*/}
								{/*	element={<Weekly weather={weather} selectedOption={selectedOption} cityData={city} season={curSeason} />}*/}
								{/*/>*/}
							</Route>
						</Routes>
						<Footer />
					</IsDarkContext.Provider>
				</ThemeContext.Provider>
			</div>
		</div>
	)
}