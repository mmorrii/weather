import {useContext} from "react";
import {ThemeContext} from "../App";

const Card = ({ children, className }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className={`p-5 ${theme.border} dark:border-none rounded-xl bg-white dark:bg-neutral-800 ${className}`}>
			{children}
		</div>
	)
}

export default Card