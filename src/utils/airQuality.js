/**
 * Obtaining description and color of text using with the air quality index
 *
 * @param {number} index
 */
export const getAirQuality = (index) => {
   const airQuality = [
      { max: 50, value: "Хорошее", color: "text-emerald-400" },
      { max: 100, value: "Среднее", color: "text-lime-400" },
      { max: 150, value: "Вредно для уязвимых групп", color: "text-yellow-500" },
      { max: 200, value: "Вредно", color: "text-orange-500" },
      { max: 300, value: "Очень вредно", color: "text-red-500" },
      { max: 500, value: "Опасно", color: "text-fuchsia-500" },
   ]

   return airQuality.find(({ max }) => index <= max) ?? "Invalid AQI value"
}