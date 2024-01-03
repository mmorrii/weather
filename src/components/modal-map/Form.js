import {FaCheck, FaMapMarkerAlt} from "react-icons/fa";
import {useContext, useRef, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import {IoClose} from "react-icons/io5";
import ErrorText from "./ErrorText";
import {useResize} from "../../hooks/useResize";
import {flushSync} from "react-dom";

const Form = ({ formData, changeFormData, onAddRequest, city, changeSelectedOption }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const inputFocus = useRef(null)
	const windowWidth = useResize()
	const [isError, setIsError] = useState('')
	
	const handleSubmit = (e) => {
		e.preventDefault()
		if (!formData) {
			setIsError('empty')
			return
		}
		if (!formData.includes(',')) {
			setIsError('comma')
			return
		}
		setIsError('')
		const [latitude, longitude] = formData.split(', ')
		flushSync(() => {
			changeSelectedOption({
				"latitude": latitude,
				"longitude": longitude,
				"value": city?.results?.[0]?.components?.country,
				"label": city?.results?.[0]?.components?.country
			})
		})
		onAddRequest()
	}
	
	const handleGetGeolocation = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition( (position) => {
				changeFormData(`${position.coords.latitude}, ${position.coords.longitude}`)
				const [latitude, longitude] = formData.split(', ')
				flushSync(() => {
					changeSelectedOption({
						"latitude": latitude,
						"longitude": longitude,
						"value": city?.results?.[0]?.components?.country,
						"label": city?.results?.[0]?.components?.country
					})
				})
			})
		} else {
			console.log("Невозможно получить местоположение")
		}
	}
	
	return (
		<div className="w-full">
			<form className="flex gap-3 max-md:flex-col" onSubmit={handleSubmit}>
				<div className="relative">
					<label htmlFor="input" className={`${theme.text} ${theme.textDark} block text-sm ml-1`}>
						Координаты
					</label>
					<input
						ref={inputFocus}
						type="text"
						id="input"
						placeholder="9.07745, 4.58423"
						value={formData}
						onChange={ (e) => changeFormData(e.target.value) }
						className={`pl-2.5 pr-7 max-md:pr-8 py-1.5 max-md:py-2 h-10 max-md:h-fit w-[30rem] max-[850px]:w-[28rem]
						max-md:w-full rounded ${theme.border} ${theme.borderDark}
								focus:outline-1 focus:outline-inherit focus:outline dark:bg-neutral-900
								dark:text-neutral-50 ${theme.focusDarkColor}`}
					/>
					<button onClick={() => changeFormData('')}
						className="absolute bottom-2 right-1 max-md:bottom-1.5 max-md:right-0.5">
						<IoClose
							onClick={() => inputFocus.current.focus()}
							size={windowWidth <= 768 ? 28 : 26}
							color={isDark ? theme.hexColorDark : theme.hexColor} />
					</button>
				</div>
				<div className="self-end max-md:self-start flex gap-3 max-md:gap-1 max-md:w-full ">
					<button type="submit"
							  className={`${theme.bg800andWhTxt} max-md:basis-8/12 p-3 rounded ${theme.bgHover900} flex justify-center`}>
						<FaCheck />
					</button>
					<button type="button"
							  onClick={handleGetGeolocation}
							  className={`${theme.bg800andWhTxt} max-md:basis-4/12 p-3 rounded ${theme.bgHover900} flex justify-center`}>
						<FaMapMarkerAlt  />
					</button>
				</div>
			</form>
			<ErrorText isError={isError} />
		</div>
	)
}

export default Form