import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import ModalMap from "../modal-map/ModalMap";
import {IsDarkContext, ThemeContext} from "../../App";
import MapIcon from "../../icons/MapIcon";

const Map = ({ selectedOption, onChangeSelected, city, handleOptionChange }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	
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
				className="w-11 h-11"
				onClick={handleOpenModal}
			>
				<MapIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</button>
			{ isModalOpen &&
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

export default Map