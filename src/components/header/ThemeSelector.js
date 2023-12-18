import {useContext, useState} from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {IsDarkContext, ThemeContext} from "../../App";
import Computer from "../../icons/Computer";
import ClearlyDayIcon from "../../icons/ClearlyDayIcon";
import ClearlyNightIcon from "../../icons/ClearlyNightIcon";


const ThemeSelector = ({ onChangeTheme }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [selectedOption, setSelectedOption] = useLocalStorage("themeOption","Устройство")
	const [isOpen, setIsOpen] = useState(false)
	
	const handleThemeChange = (option) => {
		if (option === "Темная" || (option === "Устройство" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			onChangeTheme(true)
		} else {
			onChangeTheme(false)
		}
		setSelectedOption(option);
	};
	
	const options = ["Устройство", "Темная", "Светлая"]
	
	return (
		<div
			className={`relative cursor-pointer py-1.5 px-2.5 rounded ${theme.border} ${theme.borderDark}`}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className="bg-inherit flex items-center gap-1">
				<div className={`w-5 h-5 ${selectedOption === "Устройство" && "relative top-[1.1px]"}`}>
					{selectedOption === "Устройство" && <Computer color={isDark ? "#ffffff" : "#000000"}/>}
					{selectedOption === "Темная" && <ClearlyNightIcon color={isDark ? "#ffffff" : "#000000"}/>}
					{selectedOption === "Светлая" && <ClearlyDayIcon color={isDark ? "#ffffff" : "#000000"}/>}
				</div>
				<p>Тема</p>
			</div>
			{ isOpen && <ul className="absolute z-10 -left-4 w-fit bg-white dark:bg-neutral-900 mt-2 py-1.5 rounded-md">
				{options.map((option) => (
					<li
						key={option}
						className={`px-4 py-1.5 ${selectedOption === option ? theme.bg800andWhTxt :
							`dark:hover:bg-neutral-800 ${theme.bgHover100}`}`}
						onClick={() => handleThemeChange(option)}
					>
						{option}
					</li>
				))}
			</ul> }
		</div>
	)
}

export default ThemeSelector