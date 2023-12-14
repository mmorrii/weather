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

export const ThemeContext = createContext({})

function App() {
	const [weather, setWeather] = useState({})
	const [city, setCity] = useState({})
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	
	useEffect(() => {
		fetchWeather(selectedOption.latitude, selectedOption.longitude, setWeather);
		// const intervalId = setInterval(fetchWeather, 60 * 60 * 1000);
		// return () => clearInterval(intervalId);
		fetchCity(selectedOption.latitude, selectedOption.longitude, setCity)
	}, [selectedOption])
	
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const seasonsTheme = seasonsThemes(weatherCode, timeZone, latitude)
	const curSeason = currentSeason(weatherCode, timeZone, latitude)
	
	const handleInputChange = (key, value) => {
		setSelectedOption(prevState => ({
			...prevState,
			[key]: value,
			value: city?.results?.[0]?.components?.country,
			label: city?.results?.[0]?.components?.country,
		}));
	};
	
	return (
		<div className={`${seasonsTheme.bg} min-h-screen`}>
			<div className="max-w-screen-2xl font-sans p-4 pb-0 m-auto overflow-hidden">
				<ThemeContext.Provider value={seasonsTheme}>
					<Header
						handleOptionChange={(s) => setSelectedOption(s)}
						selectedOption={selectedOption}
						weather={weather}
						onChangeSelected={(field, value) => handleInputChange(field, value)}
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
				</ThemeContext.Provider>
			</div>
		</div>
	);
}

export default App;