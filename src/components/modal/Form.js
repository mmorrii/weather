import InputForm from "../../common/InputForm";
import {FaCheck} from "react-icons/fa";
import {useContext, useState} from "react";
import {ThemeContext} from "../../App";

const Form = ({ selectedOption, onChangeSelected }) => {
	const theme = useContext(ThemeContext)
	const [formData, setFormData] = useState({
		latitude: selectedOption.latitude,
		longitude: selectedOption.longitude,
	});
	
	const handleInputChange = (key, value) => {
		setFormData((prevData) => ({
			...prevData,
			[key]: value,
		}));
	};
	
	const handleSubmit = (e) => {
		e.preventDefault()
		onChangeSelected("latitude", formData.latitude);
		onChangeSelected("longitude", formData.longitude);
	}
	
	return (
		<form className="flex gap-3" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="lat" className={`${theme.text} block text-sm ml-1`}>
					Широта
				</label>
				<InputForm
					id="lat"
					placeholder="9.07745"
					value={formData.latitude}
					onChange={ (e) => handleInputChange("latitude", e.target.value) }
				/>
			</div>
			<div>
				<label htmlFor="long" className={`${theme.text} block text-sm ml-1`}>
					Долгота
				</label>
				<InputForm
					id="long"
					placeholder="7.4470"
					value={formData.longitude}
					onChange={ (e) => handleInputChange("longitude", e.target.value) }
				/>
			</div>
			<button type="submit"
					  className={`${theme.bg800andWhTxt} self-end p-3 rounded ${theme.bgHover900}`}
			>
				<FaCheck />
			</button>
		</form>
	)
}

export default Form