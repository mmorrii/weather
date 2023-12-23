import {useContext, useEffect, useState} from "react";
import {weatherImgBg} from "../../utils/current-bg";
import {ThemeContext} from "../../App";
import {useResize} from "../../hooks/useResize";

const CurrentBg = ({ children, weather, selectedOption }) => {
	const theme = useContext(ThemeContext)
	const windowWidth = useResize()
	const [bgImage, setBgImage] = useState({})
	
	const weatherCode = weather?.current?.weather_code
	const isDay = weather?.current?.is_day === 1
	const timeZone = weather?.timezone
	const latitude = selectedOption.latitude
	
	useEffect(() => {
		const newBackgroundStyle = weatherImgBg(weatherCode, timeZone, latitude, isDay, windowWidth);
		setBgImage(newBackgroundStyle);
	}, [weatherCode, timeZone, latitude, isDay, windowWidth]);
	
	return (
		<section className={`py-4 px-5 max-[530px]:py-2 max-sm:px-2 ${theme.bg300} dark:bg-neutral-800 rounded-2xl h-80 mb-4
			max-sm:mb-2 flex flex-col justify-between text-white dark:text-neutral-50`}
			  style={ bgImage }
		>
			{ children }
		</section>
	)
}

export default CurrentBg