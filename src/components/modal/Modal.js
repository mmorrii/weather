import { IoClose } from "react-icons/io5";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import Form from "./Form";
import Cards from "./Cards";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const Modal = ({ onClick, selectedOption, onChangeSelected, city }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [requests, setRequests] = useLocalStorage("requests",[])
	
	//TODO Error: only when double-clicked it adds to the cache
	const handleChangeRequest = () => {
		const country = city?.results?.[0]?.components?.country
		const cityData = city?.results?.[0]?.components?.city
		const town = city?.results?.[0]?.components?.town
		const district = city?.results?.[0]?.components?.district
		const state = city?.results?.[0]?.components?.state
		const newLocation = `${country}, ${cityData ? cityData : town ? town : district ? district : state}`
		
		const isLocationAlreadyExists = requests.some(request => (request.location === newLocation))

		if (isLocationAlreadyExists) {
			return
		}
		
		const updatedRequests = [
			{ location: newLocation, latitude: selectedOption.latitude, longitude: selectedOption.longitude },
			...requests.slice(0, 4)
		]
		
		setRequests(updatedRequests)
	}
	
	return (
		<div className="fixed inset-0 bg-black bg-opacity-60">
			<div className="fixed inset-0 flex items-center justify-center">
				<div className={`w-11/12 max-w-screen-2xl ${theme.bg100} dark:bg-neutral-900 p-6 pt-4 rounded-xl`}>
					<div className="flex items-start justify-between mb-6">
						<Form
							selectedOption={selectedOption}
							onChangeSelected={onChangeSelected}
							onChangeRequest={handleChangeRequest}
						/>
						<button onClick={onClick}
								  className={`border border-solid border-2 ${theme.border} ${theme.borderDark} mt-2 rounded-md`} >
							<IoClose size={25} color={isDark ? theme.hexColorDark : theme.hexColor} />
						</button>
					</div>
					<div className="mb-6">
						<h3 className={`${theme.text} ${theme.textDark} font-semibold mb-2`}>Последние запросы</h3>
						<Cards requests={requests} />
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