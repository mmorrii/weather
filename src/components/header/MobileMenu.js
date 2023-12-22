import MenuIcon from "../../icons/MenuIcon";
import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import {createPortal} from "react-dom";
import ModalMenu from "../modal/ModalMenu";

const MobileMenu = () => {
	const isDark = useContext(IsDarkContext)
	const theme = useContext(ThemeContext)
	const [isModalOpen, setIsModalOpen] = useState(false)
	
	return (
		<>
			<button
				className="w-11 h-11"
				onClick={() => setIsModalOpen(true)}
			>
				<MenuIcon color={isDark ? theme.hexColorDark : theme.hexColor} />
			</button>
			{ isModalOpen &&
				createPortal( <ModalMenu onClick={() => setIsModalOpen(false)} />, document.body )
			}
		</>
	)
}

export default MobileMenu