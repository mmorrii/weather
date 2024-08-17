import CurrentWeather from "../components/current-weather/CurrentWeather.jsx";
import InfoBlock from "../components/InfoBlock.jsx";
import HourlyWeather from "../components/HourlyWeather.jsx";
import {useState} from "react";
import ChartComponent from "../components/charts/ChartComponent.jsx";

const Weekly = ({ weather, selectedOption, season, cityData }) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	return (
		<main className="flex-auto mb-14">
			<CurrentWeather
				weather={weather}
				selectedOption={selectedOption}
				cityData={cityData}
				selectedCardIndex={selectedCardIndex}
			/>
			<InfoBlock weather={weather} selectedOption={selectedOption} selectedCardIndex={selectedCardIndex} />
			<ChartComponent
				weather={weather}
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={setSelectedCardIndex}
			/>
			<HourlyWeather weather={weather} selectedOption={selectedOption} season={season} />
		</main>
	)
}

export default Weekly