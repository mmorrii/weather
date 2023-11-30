import Logo from "./Logo";
import SelectComponent from "./SelectComponent";
import Map from "./Map";

const Header = ({ handleOptionChange, selectedOption, currentWeather }) => {
	const isDay = currentWeather?.current?.is_day === 1
	
	return (
		<div className="flex justify-between items-center mb-4">
			<Logo isDay={isDay} />
			<div className="flex items-center gap-5">
				<SelectComponent
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
				/>
				<Map />
			</div>
		</div>
	)
}

export default Header