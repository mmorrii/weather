import MenuIcon from "../../icons/MenuIcon";
import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import {createPortal} from "react-dom";
import ModalMenu from "../modal-menu/ModalMenu";

const MobileMenu = ({ onChangeTheme, selectedOption, onChangeSelected, city, handleOptionChange }) => {
	const isDark = useContext(IsDarkContext)
	const theme = useContext(ThemeContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	
	const handleModalOpen = () => {
		setIsModalOpen(true)
		document.body.style.overflow = 'hidden'
	}
	
	const handleModalClose = () => {
		setIsModalOpen(false)
		document.body.style.overflow = 'auto'
	}
	
	return (
		<>
			<button
				className="w-11 h-11"
				onClick={handleModalOpen}
			>
				<MenuIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</button>
			{ isModalOpen &&
				createPortal(
					<ModalMenu
						isModalOpen={isModalOpen}
						onChangeTheme={onChangeTheme}
						onModalClose={handleModalClose}
						selectedOption={selectedOption}
						onChangeSelected={onChangeSelected}
						handleOptionChange={handleOptionChange}
						city={city}
					/>, document.body )
			}
		</>
	)
}

export default MobileMenu