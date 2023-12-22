import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import Map from "./Map";
import ThemeSelector from "../theme/ThemeSelector";
import {useResize} from "../../hooks/useResize";
import MobileMenu from "./MobileMenu";

const Header = ({ handleOptionChange, selectedOption, weather, onChangeSelected, onChangeTheme, city }) => {
	const windowWidth = useResize()
	
	const isDay = weather?.current?.is_day === 1
	
	return (
		<header className="flex justify-between items-center mb-4">
			<div className="flex items-center gap-3">
				<Logo isDay={isDay} />
				{ windowWidth > 768 &&
					<ThemeSelector onChangeTheme={onChangeTheme} />
				}
			</div>
			<div className="flex items-center gap-5 max-md:gap-3">
				<SelectComponent
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
				/>
				{ windowWidth > 768 &&
					<Map selectedOption={selectedOption} onChangeSelected={onChangeSelected} city={city} />
				}
				{ windowWidth <= 768 &&
					<MobileMenu />
				}
			</div>
		</header>
	)
}

export default Header