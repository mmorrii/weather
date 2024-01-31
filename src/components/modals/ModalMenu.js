import {IoClose} from "react-icons/io5";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import ThemeSelector from "../theme/ThemeSelector";
import SelectComponent from "../header/SelectComponent";

const ModalMenu = ({ onModalClose, onChangeTheme, changeSelectedOption, selectedOption, themeOption }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	return (
		<div className={`fixed inset-0 w-full h-full ${theme.bg100} dark:bg-neutral-900 dark:text-neutral-50
		max-md:bg-opacity-90 max-md:dark:bg-opacity-90`}>
			<div className="p-2">
				<div className="flex justify-end mb-4">
					<button onClick={onModalClose} className={`${theme.border} ${theme.borderDark} rounded-md`} >
						<IoClose size={30} color={isDark ? theme.hexColorDark : theme.hexColor} />
					</button>
				</div>
				<div className={`text-2xl font-bold ${theme.text} ${theme.textDark} text-center mb-6`}>
					World Weather
				</div>
				<ThemeSelector onChangeTheme={onChangeTheme} themeOption={themeOption} />
				<div className="flex justify-center">
					<SelectComponent
						changeSelectedOption={changeSelectedOption}
						selectedOption={selectedOption}
					/>
				</div>
			</div>
		</div>
	)
}

export default ModalMenu