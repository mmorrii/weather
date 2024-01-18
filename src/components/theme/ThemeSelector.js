import {useResize} from "../../hooks/useResize";
import ThemeDesktop from "./ThemeDesktop";
import ThemeMobile from "./ThemeMobile";

const ThemeSelector = ({ onChangeTheme, themeOption }) => {
	const windowWidth = useResize()
	
	const options = ["Устройство", "Темная", "Светлая"]
	
	return (
		<>
			{ windowWidth > 768 &&
				<ThemeDesktop
					options={options}
					themeOption={themeOption}
					onChangeTheme={onChangeTheme}
				/>
			}
			{ windowWidth <= 768 &&
				<ThemeMobile
					options={options}
					themeOption={themeOption}
					onChangeTheme={onChangeTheme}
				/>
			}
		</>
	)
}

export default ThemeSelector