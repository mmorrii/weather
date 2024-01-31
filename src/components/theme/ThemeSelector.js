import {useResize} from "../../hooks/useResize";
import SelectorDesktop from "./SelectorDesktop";
import SelectorMobile from "./SelectorMobile";

const ThemeSelector = ({ onChangeTheme, themeOption }) => {
	const windowWidth = useResize()
	
	const options = ["Устройство", "Темная", "Светлая"]
	
	return (
		<>
			{ windowWidth > 768 &&
				<SelectorDesktop
					options={options}
					themeOption={themeOption}
					onChangeTheme={onChangeTheme}
				/>
			}
			{ windowWidth <= 768 &&
				<SelectorMobile
					options={options}
					themeOption={themeOption}
					onChangeTheme={onChangeTheme}
				/>
			}
		</>
	)
}

export default ThemeSelector