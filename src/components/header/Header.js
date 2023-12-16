import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import Map from "./Map";

const Header = ({ handleOptionChange, selectedOption, weather, onChangeSelected, isDark, onChangeTheme }) => {
	if (isDark === true) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
	
	const isDay = weather?.current?.is_day === 1
	
	return (
		<header className="flex justify-between items-center mb-4">
			<div className="flex gap-3">
				<Logo isDay={isDay} />
				<button
					className="button bg-blue-400 self-center"
					onClick={() => onChangeTheme(!isDark)}
				>
					change theme
				</button>
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