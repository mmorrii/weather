import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import MapIcon from "../../icons/MapIcon";
import {createPortal} from "react-dom";
import ModalMap from "../modal-map/ModalMap";

const MenuList = ({ selectedOption, onChangeSelected, city, onModalClose, isModalOpen, handleOptionChange }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [isOpen, setIsOpen] = useState(false)
	
	const handleCloseModal = () => {
		setIsOpen(false)
		// document.body.style.overflow = 'auto'
	}
	
	const handleOpenModal = () => {
		setIsOpen(true)
		// document.body.style.overflow = 'hidden'
		// if (isModalOpen) {
		// 	onModalClose()
		// }
	}
	
	return (
		<>
			<ul>
				<li className={`border-y border-solid ${theme.borderColor} dark:border-neutral-800 py-5`}
					 onClick={handleOpenModal}
				>
					<div className="flex items-center justify-center gap-2">
						<div className="w-8 h-8">
							<MapIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
						</div>
						<p>Мое местоположение</p>
					</div>
				</li>
			</ul>
			{ isOpen &&
				createPortal(
					<ModalMap onClick={handleCloseModal}
								 selectedOption={selectedOption}
								 onChangeSelected={onChangeSelected}
								 handleOptionChange={handleOptionChange}
								 city={city}
					/>, document.body )
			}
		</>
	)
}

export default MenuList