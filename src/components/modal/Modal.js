import { IoClose } from "react-icons/io5";
import {useContext} from "react";
import {ThemeContext} from "../../App";
import Form from "./Form";
import Cards from "./Cards";

const Modal = ({ onClick, selectedOption, onChangeSelected }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="fixed inset-0 bg-black bg-opacity-60">
			<div className="fixed inset-0 flex items-center justify-center">
				<div className={`w-11/12 ${theme.bg100} p-6 pt-4 rounded-xl`}>
					<div className="flex items-center justify-between mb-6">
						<Form selectedOption={selectedOption} onChangeSelected={onChangeSelected} />
						<button onClick={onClick}
								  className={`border border-solid border-2 ${theme.border} rounded-md`} >
							<IoClose size={25} color={theme.hexColor} />
						</button>
					</div>
					<div className="mb-6">
						<h3 className={`${theme.text} font-semibold mb-2`}>Последние запросы</h3>
						<Cards />
					</div>
					<div className="-mx-6 -mb-3 bg-gray-50">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379319.1190642297!2d27.531297373405586!
            			3d53.87706841700748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1702112319373!5m2!1sru!2sua"
							width={"100%"} height="350" style={{border:0}} allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade" title="Frame Google Map">
						</iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal