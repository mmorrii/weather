import {IoClose} from "react-icons/io5";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import ThemeSelector from "../theme/ThemeSelector";

const ModalMenu = ({ onClick }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	return (
		<div className={`fixed inset-0 w-full h-full ${theme.bg100} dark:bg-neutral-900 dark:text-neutral-50`}>
			<div className="p-2">
				<div className="flex justify-end mb-4">
					<button onClick={onClick}
							  className={`border border-solid border-2 ${theme.border} ${theme.borderDark} rounded-md`} >
						<IoClose size={30} color={isDark ? theme.hexColorDark : theme.hexColor} />
					</button>
				</div>
				<div className={`text-2xl font-bold ${theme.text} ${theme.textDark} text-center mb-6`}>
					World Weather
				</div>
				<ThemeSelector />
			</div>
		</div>
	)
}

export default ModalMenu