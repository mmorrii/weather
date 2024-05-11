import ComputerIcon from "../../icons/ComputerIcon";
import ClearlyNightIcon from "../../icons/ClearlyNightIcon";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import ClearlyDayIcon from "../../icons/ClearlyDayIcon";

const SelectorMobile = ({ options, themeOption, onChangeTheme }) => {
	const isDark = useContext(IsDarkContext)
	const theme = useContext(ThemeContext)
	
	const icons = (compare) => {
		return [
			<ComputerIcon color={(isDark || compare) ? "#ffffff" : "#000000"}/>,
			<ClearlyNightIcon color={(isDark || compare) ? "#ffffff" : "#000000"}/>,
			<ClearlyDayIcon color={(isDark || compare) ? "#ffffff" : "#000000"}/>
		]
	}
	
	return (
		<div className="flex justify-center mb-8">
			<div className={`inline-flex ${theme.bg50} dark:bg-neutral-950 rounded-3xl`}>
				{ options.map((option, i) => (
					<button
						key={option}
						className={`${themeOption === option ? theme.bg800andWhTxt : "bg-transparent"}
						px-5 max-[355px]:px-3.5 py-3 rounded-3xl flex items-center gap-1`}
						onClick={() => onChangeTheme(option)}
					>
						<div className="w-5 h-5">{icons(themeOption === option)[i]}</div>
						<p>{option}</p>
					</button>
				))}
			</div>
		</div>
	)
}

export default SelectorMobile