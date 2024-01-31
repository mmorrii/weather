import CurrentWeather from "../current-weather/CurrentWeather";
import InfoBlock from "../InfoBlock";
import HourlyWeather from "../HourlyWeather";
import {useState} from "react";
import ChartComponent from "../charts/ChartComponent";

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