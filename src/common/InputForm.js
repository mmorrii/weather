import {useContext} from "react";
import {ThemeContext} from "../App";

const InputForm = ({ id, value, placeholder, onChange }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<input
			type="number"
			id={id}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			className={`px-2.5 py-1.5 h-10 w-60 rounded ${theme.border}
								focus:outline-1 focus:outline-inherit focus:outline`}
		/>
	)
}

export default InputForm