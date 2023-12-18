import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import Map from "./Map";
import ThemeSelector from "./ThemeSelector";

const Header = ({ handleOptionChange, selectedOption, weather, onChangeSelected, onChangeTheme }) => {
	const isDay = weather?.current?.is_day === 1
	
	return (
		<header className="flex justify-between items-center mb-4">
			<div className="flex items-center gap-3">
				<Logo isDay={isDay} />
				<ThemeSelector onChangeTheme={onChangeTheme} />
			</div>
			<div className="flex items-center gap-5">
				<SelectComponent
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
				/>
				<Map selectedOption={selectedOption} onChangeSelected={onChangeSelected} />
			</div>
		</header>
	)
}

export default Header