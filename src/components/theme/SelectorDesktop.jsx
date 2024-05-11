import ComputerIcon from "../../icons/ComputerIcon";
import ClearlyNightIcon from "../../icons/ClearlyNightIcon";
import ClearlyDayIcon from "../../icons/ClearlyDayIcon";
import {useContext, useEffect, useRef, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";

const SelectorDesktop = ({ themeOption, options, onChangeTheme }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [isOpen, setIsOpen] = useState(false)
	const selectorRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (selectorRef.current && !selectorRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [selectorRef]);

	return (
		<div ref={selectorRef}>
			<button
				className={`relative cursor-pointer py-1.5 px-2.5 rounded ${theme.border} ${theme.borderDark} bg-white 
				dark:bg-inherit focus-elem`}
				onClick={() => setIsOpen(!isOpen)}
				tabIndex={0}
			>
				<div className="flex items-center gap-1">
					<div className={`w-5 h-5 ${themeOption === "Устройство" && "relative top-[1.1px]"}`}>
						{themeOption === "Устройство" && <ComputerIcon color={isDark ? "#ffffff" : "#000000"}/>}
						{themeOption === "Темная" && <ClearlyNightIcon color={isDark ? "#ffffff" : "#000000"}/>}
						{themeOption === "Светлая" && <ClearlyDayIcon color={isDark ? "#ffffff" : "#000000"}/>}
					</div>
					<p>Тема</p>
				</div>
				{isOpen &&
					<ul className="absolute z-10 -left-4 w-fit bg-white dark:bg-neutral-900 mt-2.5 py-1.5 rounded-md">
						{options.map((option) => (
							<li
								key={option}
								className={`px-4 py-1.5 ${themeOption === option ? theme.bg800andWhTxt :
									`dark:hover:bg-neutral-800 ${theme.bgHover100}`}`}
								onClick={() => onChangeTheme(option)}
								tabIndex={0}
							>
								{option}
							</li>
						))}
					</ul>
				}
			</button>
		</div>
	)
}

export default SelectorDesktop