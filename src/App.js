import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import Header from "./components/Header";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import Grid from "./components/Grid";
import CurrentWeather from "./components/CurrentWeather";
import {WEATHER} from "./services/weather-api";
import ChartComponent from "./components/chart/ChartComponent";
import {useLocalStorage} from "./hooks/useLocalStorage";
import PrecipitationBlock from "./components/PrecipitationBlock";

export const ThemeContext = createContext({})

function App() {
	const [weather, setWeather] = useState({})
	const [selectedOption, setSelectedOption] = useLocalStorage("selectedOption", coords[2].options[1])
	
	useEffect(() => {
		const fetchData = () => {
			fetch(`${WEATHER}&latitude=${selectedOption.latitude}&longitude=${selectedOption.longitude}`)
				.then((response) => response.json())
				.then((data) => {
					console.log(data)
					setWeather(data)
				})
				.catch((err) => {
					console.log(err.message);
					throw err;
				})
		}
		fetchData();
		// const intervalId = setInterval(fetchData, 60 * 60 * 1000);
		// return () => clearInterval(intervalId);
	}, [selectedOption])
	
	const weatherCode = weather?.current?.weather_code
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	const seasonsTheme = seasonsThemes(weatherCode, timeZone, latitude)
	
	const handleOptionChange = (selectedOption) => {
		setSelectedOption(selectedOption)
	}
	
	// console.log(currentSeason(weatherCode, timeZone, latitude))
	
	return (
		<div className={`${seasonsTheme.bg} min-h-screen`}>
			<div className="max-w-screen-2xl font-sans p-4 m-auto overflow-hidden">
				<ThemeContext.Provider value={seasonsTheme}>
					<Header
						handleOptionChange={handleOptionChange}
						selectedOption={selectedOption}
						weather={weather}
					/>
					<CurrentWeather
						weather={weather}
						selectedOption={selectedOption}
					/>
					<div className="flex justify-between items-start gap-4">
						<div className="flex-shrink-0 flex flex-col justify-between h-full">
							<Grid weather={weather} />
							<PrecipitationBlock weather={weather} />
						</div>
						<ChartComponent weather={weather} />
					</div>
				</ThemeContext.Provider>
			</div>
		</div>
	);
}

export default App;
