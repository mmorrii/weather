import { IoClose } from "react-icons/io5";
import {useContext} from "react";
import {ThemeContext} from "../App";

const Modal = ({ onClick }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="fixed inset-0 bg-black bg-opacity-60">
			<div className="fixed inset-0 flex items-center justify-center">
				<div className={`w-11/12 h-5/6 ${theme.bg100} p-6 rounded-xl`}>
					<div className="flex justify-between">
						<p>Modal</p>
						<button onClick={onClick}
								  className={`border border-solid border-2 ${theme.border} rounded-md`} >
							<IoClose size={25} color={theme.hexColor} />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal