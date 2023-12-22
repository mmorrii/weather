import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useResize} from "../../hooks/useResize";
import ThemeDesktop from "./ThemeDesktop";
import ThemeMobile from "./ThemeMobile";


const ThemeSelector = ({ onChangeTheme }) => {
	const windowWidth = useResize()
	const [selectedOption, setSelectedOption] = useLocalStorage("themeOption","Устройство")
	
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
		<div>
			{ windowWidth > 768 &&
				<ThemeDesktop
					options={options}
					selectedOption={selectedOption}
					onThemeChange={(option) => handleThemeChange(option)}
				/>
			}
			{ windowWidth <= 768 &&
				<ThemeMobile
					options={options}
					selectedOption={selectedOption}
					onThemeChange={(option) => handleThemeChange(option)}
				/>
			}
		</div>
	)
}

export default ThemeSelector