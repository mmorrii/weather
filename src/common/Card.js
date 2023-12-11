import {useContext} from "react";
import {ThemeContext} from "../App";

const Card = ({ children, className }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className={`p-5 ${theme.border} rounded-xl bg-white ${className}`}>
			{children}
		</div>
	)
}

export default Card