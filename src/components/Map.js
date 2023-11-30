import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import Modal from "./Modal";
import {ThemeContext} from "../App";

const Map = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const theme = useContext(ThemeContext)
	
	const handleCloseModal = () => {
		setIsModalOpen(false)
	}
	
	return (
		<>
			<button className="w-11"
				onClick={() => setIsModalOpen(true)} >
				<svg fill="none" stroke="currentColor" className={`${theme.iconStrokeColor}`}
					  strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" viewBox="0 0 24 24"
					  xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/>
					<line x1="18" x2="18" y1="6" y2="6.01"/>
					<path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5"/>
					<polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15"/>
					<line x1="9" x2="9" y1="4" y2="17"/>
					<line x1="15" x2="15" y1="15" y2="20"/>
				</svg>
			</button>
			{ isModalOpen && createPortal( <Modal onClick={handleCloseModal}/>, document.body )}
		</>
	)
}

export default Map