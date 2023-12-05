import {useContext} from "react";
import {ThemeContext} from "../App";

const Card = ({ children }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className={`p-5 border-2 ${theme.border} rounded-xl border-solid bg-white`}>
			{children}
		</div>
	)
}

export default Card