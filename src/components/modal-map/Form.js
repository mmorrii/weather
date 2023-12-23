import {FaCheck} from "react-icons/fa";
import {useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import {IoClose} from "react-icons/io5";
import ErrorText from "./ErrorText";

const Form = ({ selectedOption, onChangeSelected, onChangeRequest }) => {
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const [formData, setFormData] = useState(`${selectedOption.latitude}, ${selectedOption.longitude}`)
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
		onChangeSelected("latitude", latitude)
		onChangeSelected("longitude", longitude)
		onChangeRequest()
	}
	
	return (
		<div>
			<form className="flex gap-3" onSubmit={handleSubmit}>
				<div className="relative">
					<label htmlFor="input" className={`${theme.text} ${theme.textDark} block text-sm ml-1`}>
						Координаты
					</label>
					<input
						type="text"
						id="input"
						placeholder="9.07745, 4.58423"
						value={formData}
						onChange={ (e) => setFormData(e.target.value) }
						className={`pl-2.5 pr-7 py-1.5 h-10 w-[30rem] rounded ${theme.border} ${theme.borderDark}
								focus:outline-1 focus:outline-inherit focus:outline dark:bg-neutral-900
								dark:text-neutral-50 dark:focus:outline-blue-500`}
					/>
					<button onClick={() => setFormData('')}
						className="absolute bottom-2 right-1">
						<IoClose size={25} color={isDark ? theme.hexColorDark : theme.hexColor} />
					</button>
				</div>
				<button type="submit"
						  className={`${theme.bg800andWhTxt} self-end p-3 rounded ${theme.bgHover900}`}>
					<FaCheck />
				</button>
			</form>
			<ErrorText isError={isError} />
		</div>
	)
}

export default Form