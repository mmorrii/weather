import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import Modal from "../modal/Modal";
import {IsDarkContext, ThemeContext} from "../../App";
import MapIcon from "../../icons/MapIcon";

const Map = ({ selectedOption, onChangeSelected, city }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const handleCloseModal = () => {
		setIsModalOpen(false)
		document.body.style.overflow = 'auto'
	}
	
	const handleOpenModal = () => {
		setIsModalOpen(true)
		document.body.style.overflow = 'hidden'
	}
	
	return (
		<>
			<button
				className="w-11"
				onClick={handleOpenModal}
			>
				<MapIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</button>
			{ isModalOpen &&
				createPortal(
					<Modal onClick={handleCloseModal}
							 selectedOption={selectedOption}
							 onChangeSelected={onChangeSelected}
							 city={city}
					/>, document.body )
			}
		</>
	)
}

export default Map