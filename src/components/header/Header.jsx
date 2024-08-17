import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import Map from "./Map";
import ThemeSelector from "../theme/ThemeSelector";
import {useResize} from "../../hooks/useResize";
import MobileMenu from "./MobileMenu";
import {motion} from "framer-motion";
import Navbar from "./Navbar";

const Header = ({ changeSelectedOption, selectedOption, weather, city }) => {
	const windowWidth = useResize()
	
	const isDay = weather?.current?.is_day === 1
	
	return (
		<motion.header
			className="mb-4"
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: "easeIn" }}
		>
			<div className="flex justify-between items-center mb-4 max-sm:mb-2">
				<div className="flex items-center gap-5">
					<Logo isDay={isDay} />
					{ windowWidth > 768 &&
						<ThemeSelector onChangeTheme={onChangeTheme} themeOption={themeOption} />
					}
				</div>
				<div className="flex items-center gap-5 max-md:gap-4">
					{ windowWidth > 768 &&
						<SelectComponent
							changeSelectedOption={changeSelectedOption}
							selectedOption={selectedOption}
						/>
					}
					<Map
						selectedOption={selectedOption}
						changeSelectedOption={changeSelectedOption}
						city={city} />
					{ windowWidth <= 768 &&
						<MobileMenu
							themeOption={themeOption}
							onChangeTheme={onChangeTheme}
							changeSelectedOption={changeSelectedOption}
							selectedOption={selectedOption}
						/>
					}
				</div>
			</div>
			<Navbar />
		</motion.header>
		
	)
}

export default Header