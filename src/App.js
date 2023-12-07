import {createContext, useEffect, useState} from "react";
import {coords} from "./data/coords";
import Header from "./components/header/Header";
import {seasonsThemes} from "./styles/styles-seasons-themes";
import Grid from "./components/grid/Grid";
import CurrentWeather from "./components/CurrentWeather";
import {WEATHER} from "./api/weather-api";
import ChartComponent from "./components/chart/ChartComponent";
import {useLocalStorage} from "./hooks/useLocalStorage";
import PrecipitationBlock from "./components/PrecipitationBlock";
import DetailedWeather from "./components/DetailedWeather";

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
					<div className="flex justify-between gap-4 mb-7">
						<div className="flex-shrink-0 flex flex-col gap-4">
							<Grid weather={weather} />
							<PrecipitationBlock weather={weather} selectedOption={selectedOption} />
						</div>
						<ChartComponent weather={weather} />
					</div>
					<DetailedWeather weather={weather} />
				</ThemeContext.Provider>
			</div>
		</div>
	);
}

export default App;
