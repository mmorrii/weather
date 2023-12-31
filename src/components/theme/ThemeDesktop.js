import ComputerIcon from "../../icons/ComputerIcon";
import ClearlyNightIcon from "../../icons/ClearlyNightIcon";
import ClearlyDayIcon from "../../icons/ClearlyDayIcon";
import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";

const ThemeDesktop = ({ selectedOption, options, onThemeChange }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<div
			className={`relative cursor-pointer py-1.5 px-2.5 rounded ${theme.border} ${theme.borderDark}`}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="bg-inherit flex items-center gap-1">
				<div className={`w-5 h-5 ${selectedOption === "Устройство" && "relative top-[1.1px]"}`}>
					{selectedOption === "Устройство" && <ComputerIcon color={isDark ? "#ffffff" : "#000000"}/>}
					{selectedOption === "Темная" && <ClearlyNightIcon color={isDark ? "#ffffff" : "#000000"}/>}
					{selectedOption === "Светлая" && <ClearlyDayIcon color={isDark ? "#ffffff" : "#000000"}/>}
				</div>
				<p>Тема</p>
			</div>
			{ isOpen && <ul className="absolute z-10 -left-4 w-fit bg-white dark:bg-neutral-900 mt-2.5 py-1.5 rounded-md">
				{options.map((option) => (
					<li
						key={option}
						className={`px-4 py-1.5 ${selectedOption === option ? theme.bg800andWhTxt :
							`dark:hover:bg-neutral-800 ${theme.bgHover100}`}`}
						onClick={() => onThemeChange(option)}
					>
						{option}
					</li>
				))}
			</ul> }
		</div>
	)
}

export default ThemeDesktop