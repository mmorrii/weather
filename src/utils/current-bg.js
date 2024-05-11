import {currentSeason} from "./current-season";
import {BASE_URL} from "../config/config";

const weatherImages = (code, tz, lat, isDay, windowWidth) => {
	const season = currentSeason(code, tz, lat);
	const dayOrNight = isDay ? 'day' : 'night';
	
	return {
		'0,1,2': {
			backgroundImage: `url('/images/bg/${season}_clearly_${dayOrNight}.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1250) ? '0 -315px' :
				(windowWidth <= 1250 && windowWidth > 1060) ? '0 -215px' :
					(windowWidth <= 1060 && windowWidth > 890) ? '0 -115px' :
						(windowWidth <= 890 && windowWidth > 620) ? '0 -35px' : 'center',
		},
		'3': {
			backgroundImage: `url('/images/bg/${season}_cloudy_${dayOrNight}.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1250) ? '0 -355px' :
				(windowWidth <= 1250 && windowWidth > 1060) ? '0 -255px' :
					(windowWidth <= 1060 && windowWidth > 890) ? '0 -155px' :
						(windowWidth <= 890 && windowWidth > 620) ? '0 -55px' : 'center',
		},
		'45,48': {
			backgroundImage: `url('/images/bg/${season}_fog_${dayOrNight}.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1200) ? '0 -315px' :
				(windowWidth <= 1200 && windowWidth > 1020) ? '0 -215px' :
					(windowWidth <= 1020 && windowWidth > 800) ? '0 -115px' : 'center',
		},
		'51,53,55,56,57,65,61,63,66,67,80,81,82': {
			backgroundImage: `url('/images/bg/${season}_rainy_${dayOrNight}.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1200) ? '0 -300px' :
				(windowWidth <= 1200 && windowWidth > 1024) ? '0 -200px' : 'center',
		},
		'71,73,75,77': {
			backgroundImage: `url('/images/bg/winter_snow_${dayOrNight}.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1350) ? '0 -285px' :
				(windowWidth <= 1350 && windowWidth > 1100) ? '0 -185px' : 'center',
		},
		'85,86': {
			backgroundImage: `url('/images/bg/winter_snow_with_rain_${dayOrNight}.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1200) ? '0 -285px' :
				(windowWidth <= 1200 && windowWidth > 960) ? '0 -185px' : 'center',
		},
		'95': {
			backgroundImage: `url('/images/bg/thunder.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 790) ? '0 -24px' : '50% 0',
		},
		'96,99': {
			backgroundImage: `url('/images/bg/thunder_with_shower_rain.jpg')`,
			backgroundSize: 'cover',
			backgroundPosition: (windowWidth > 1200) ? '0 -255px' : 'center',
		}
	}
};

export const weatherImgBg = (code, tz, lat, isDay, windowWidth) => {
	const image = weatherImages(code, tz, lat, isDay, windowWidth)
	const weatherCode = Object.keys(image).find(key => key.split(',').includes(code?.toString()))
	
	return weatherCode ? image[weatherCode] : {}
};
