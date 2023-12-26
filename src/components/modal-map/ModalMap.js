import { IoClose } from "react-icons/io5";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import Form from "./Form";
import Cards from "./Cards";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {useResize} from "../../hooks/useResize";

const ModalMap = ({ onClick, selectedOption, city, changeSelectedOption }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	const [requests, setRequests] = useLocalStorage("requests",[])
	
	//TODO Error: only when double-clicked it adds to the cache
	const handleAddRequest = () => {
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
			{
				value: country,
				label: country,
				location: newLocation,
				latitude: selectedOption.latitude,
				longitude: selectedOption.longitude,
			},
			...requests.slice(0, 4)
		]
		
		setRequests(updatedRequests)
	}
	
	return (
		<div className="fixed inset-0 bg-black bg-opacity-60">
			<div className="fixed inset-0 md:top-8 flex justify-center max-md:block overflow-auto">
				<div className={`w-11/12 max-w-screen-2xl h-fit max-md:w-full max-md:h-full ${theme.bg100} dark:bg-neutral-900
				max-md:bg-opacity-90 max-md:dark:bg-opacity-90 p-6 pt-4 max-md:p-2 rounded-xl max-md:rounded-none`}>
					<div className="flex max-md:flex-col-reverse items-start justify-between gap-2 mb-6 max-md:mb-5">
						<Form
							city={city}
							selectedOption={selectedOption}
							changeSelectedOption={changeSelectedOption}
							onAddRequest={handleAddRequest}
						/>
						<button onClick={onClick}
								  className={`${theme.border} ${theme.borderDark} mt-2 max-md:mt-0
								  rounded-md max-md:self-end`} >
							<IoClose
								size={(windowWidth <= 768 || windowWidth >= 1440) ? 30 : 26}
								color={isDark ? theme.hexColorDark : theme.hexColor} />
						</button>
					</div>
					<div className="mb-6">
						<h3 className={`${theme.text} ${theme.textDark} font-semibold mb-2`}>Последние запросы</h3>
						<Cards requests={requests} changeSelectedOption={changeSelectedOption} />
					</div>
					<div className="-mx-6 -mb-3 max-md:-mx-2 max-md:-mb-2 bg-gray-50">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d379319.1190642297!2d27.531297373405586!
            			3d53.87706841700748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1702112319373!5m2!1sru!2sua"
							width={"100%"} height={windowWidth <= 768 ? "300" : "350"} style={{border:0}} allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade" title="Frame Google Map">
						</iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModalMap