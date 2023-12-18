import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import LogoDayIcon from "../../icons/LogoDayIcon";
import LogoNightIcon from "../../icons/LogoNightIcon";

const Logo = ({ isDay }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	return (
		<div className="flex gap-3 items-center">
			<div className="w-11">
				{ isDay ?
					<LogoDayIcon color={ isDark ? "#737373" : "#000000"} /> :
					<LogoNightIcon color={ isDark ? "#737373" : "#000000"} />
				}
			</div>
			<div className={`text-2xl font-bold ${theme.text} ${theme.textDark} `}>
				World Weather
			</div>
		</div>
	)
}

export default Logo