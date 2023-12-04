import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import Modal from "../Modal";
import {ThemeContext} from "../../App";
import MapIcon from "../../icons/MapIcon";

const Map = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const theme = useContext(ThemeContext)
	
	const handleCloseModal = () => {
		setIsModalOpen(false)
	}
	
	return (
		<>
			<button
				className="w-11"
				onClick={() => setIsModalOpen(true)}
			>
				<MapIcon color={theme.hexColor} />
			</button>
			{ isModalOpen && createPortal( <Modal onClick={handleCloseModal}/>, document.body )}
		</>
	)
}

export default Map