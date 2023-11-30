import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import Header from "./components/Header";
import {currentSeason} from "./utils/current-season";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import Grid from "./components/Grid";
import CurrentWeather from "./components/CurrentWeather";
import {WEATHER} from "./services/weather-api";
import ChartComponent from "./components/chart/ChartComponent";
import {useLocalStorage} from "./hooks/useLocalStorage";

export const ThemeContext = createContext({})

function App() {
	const [currentWeather, setCurrentWeather] = useState({})
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	
	useEffect(() => {
		const fetchData = () => {
			fetch(`${WEATHER}&latitude=${selectedOption.latitude}&longitude=${selectedOption.longitude}`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					setCurrentWeather(data)
				})
				.catch((err) => {
					console.log(err.message);
					throw err;
				});
		}
		fetchData();
		// const intervalId = setInterval(fetchData, 60 * 60 * 1000);
		// return () => clearInterval(intervalId);
	}, [selectedOption])
	
	const weatherCode = currentWeather?.current?.weather_code
	const timeZone = currentWeather?.timezone
	const latitude = selectedOption.latitude
	const seasonsTheme = seasonsThemes(weatherCode, timeZone, latitude)
	
	const handleOptionChange = (selectedOption) => {
		setSelectedOption(selectedOption)
	}
	
	console.log(currentSeason(weatherCode, timeZone, latitude))
	
	return (
		<div className={`${seasonsTheme.bg} min-h-screen font-sans p-4`}>
			<ThemeContext.Provider value={seasonsTheme}>
				<Header
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
					currentWeather={currentWeather}
				/>
				<CurrentWeather
					currentWeather={currentWeather}
					selectedOption={selectedOption}
				/>
				<div className="flex justify-between items-start gap-4">
					<Grid currentWeather={currentWeather} />
					<ChartComponent currentWeather={currentWeather} />
				</div>
			</ThemeContext.Provider>
		</div>
	);
}

export default App;
