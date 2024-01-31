export const WEATHER = "https://api.open-meteo.com/v1/forecast?current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m,cloud_cover&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,snow_depth,pressure_msl,cloud_cover_low,visibility,wind_speed_10m,wind_speed_80m,wind_speed_120m,wind_direction_10m,wind_direction_80m,wind_direction_120m,temperature_80m,temperature_120m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=ms&timezone=auto"
export const getCity = (latitude, longitude) => `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f3e8fbecaaac42db92e867477a633953&language=ru&no_annotations=1&pretty=1`