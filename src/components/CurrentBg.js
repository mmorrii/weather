import {useEffect, useState} from "react";
import {weatherImgBg} from "../utils/current-bg";

const CurrentBg = ({ children, weather, selectedOption, seasonTheme }) => {
	const [bgImage, setBgImage] = useState({});
	
	const weatherCode = weather?.current?.weather_code
	const isDay = weather?.current?.is_day === 1
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	
	useEffect(() => {
		const newBackgroundStyle = weatherImgBg(weatherCode, timeZone, latitude, isDay);
		setBgImage(newBackgroundStyle);
	}, [weatherCode, timeZone, latitude, isDay]);
	
	return (
		<div className={`py-4 px-5 ${seasonTheme.bg300} rounded-2xl h-80 mb-7
			flex flex-col justify-between text-white`}
			  style={ bgImage }
		>
			{ children }
		</div>
	)
}

export default CurrentBg