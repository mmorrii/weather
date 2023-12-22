import ComputerIcon from "../../icons/ComputerIcon";
import ClearlyNightIcon from "../../icons/ClearlyNightIcon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import ClearlyDayIcon from "../../icons/ClearlyDayIcon";

const ThemeMobile = ({ options, selectedOption, onThemeChange }) => {
	const isDark = useContext(IsDarkContext)
	const theme = useContext(ThemeContext)
	
	const icons = [
		<ComputerIcon color={isDark ? "#ffffff" : "#000000"}/>,
		<ClearlyNightIcon color={isDark ? "#ffffff" : "#000000"}/>,
		<ClearlyDayIcon color={isDark ? "#ffffff" : "#000000"}/>
	]
	
	return (
		<div className="flex justify-center">
			<div className="inline-flex dark:bg-neutral-950 rounded-3xl">
				{ options.map((option, i) => (
					<button
						key={option}
						className={`${selectedOption === option ? theme.bg800andWhTxt : "bg-transparent"}
						px-5 max-[355px]:px-3.5 py-3 rounded-3xl flex items-center gap-1`}
						onClick={() => onThemeChange(option)}
					>
						<div className="w-5 h-5">{icons[i]}</div>
						<p>{option}</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default ThemeMobile