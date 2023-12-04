import {useContext} from "react";
import {ThemeContext} from "../../App";

const Logo = ({ isDay }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex gap-1 items-center">
			<div className="w-16">
				{ isDay ?
					<img src="/images/logo/logo_day_icon.svg"
						  alt="logo day icon"
					/> :
					<img src="/images/logo/logo_night_icon.svg"
						  alt="logo night icon"
					/>
				}
			</div>
			<div className={`text-2xl font-bold ${theme.text}`}>
				World Weather
			</div>
		</div>
	)
}

export default Logo