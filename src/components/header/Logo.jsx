import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import LogoDayIcon from "../../icons/LogoDayIcon";
import LogoNightIcon from "../../icons/LogoNightIcon";
import {useResize} from "../../hooks/useResize";

const Logo = ({ isDay }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	return (
		<div className="flex gap-3 items-center">
			<div className="w-11 h-11 max-md:w-12 max-md:h-12">
				{ isDay ?
					<LogoDayIcon color={ isDark ? "#737373" : "#000000"} /> :
					<LogoNightIcon color={ isDark ? "#737373" : "#000000"} />
				}
			</div>
			{ windowWidth > 768 &&
				<div className={`text-2xl font-bold ${theme.text} ${theme.textDark} `}>
					World Weather
				</div>
			}
			
		</div>
	)
}

export default Logo