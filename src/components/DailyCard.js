import {weatherIcons} from "../utils/current-icon";

const DailyCard = ({ currentWeather }) => {
	// Получаем текущую дату
	const currentDate = new Date().toISOString().split('T')[0]
	const time = currentWeather.daily?.time
	const weatherCode = currentWeather.daily?.weather_code
	const tempMin = currentWeather.daily?.temperature_2m_min
	const tempMax = currentWeather.daily?.temperature_2m_max
	// текущий индекс элемента в зависимочти от даты
	const currentIndex = time?.indexOf(currentDate);
	
	return (
		<div className="flex">
			{time?.map((date, index) => (
				<div key={date}
					  className={`bg-blue-800 p-4`} >
				<p>{date}</p>
					<div>
						<img
							src={weatherIcons(weatherCode[index])}
							alt="daily weather icon"
						/>
					</div>
					<p>
						<span>{ Math.round(tempMin[index]) }</span>
						<span>{ Math.round(tempMax[index]) }</span>
					</p>
				</div>
			))}
		</div>
	)
}

export default DailyCard