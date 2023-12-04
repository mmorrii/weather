import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import Map from "./Map";

const Header = ({ handleOptionChange, selectedOption, weather }) => {
	const isDay = weather?.current?.is_day === 1
	
	return (
		<header className="flex justify-between items-center mb-4">
			<Logo isDay={isDay} />
			<div className="flex items-center gap-5">
				<SelectComponent
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
				/>
				<Map />
			</div>
		</header>
	)
}

export default Header