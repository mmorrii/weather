import {useContext} from "react";
import {ThemeContext} from "../App";

const Title = ({ children }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<h2 className={`mb-5 text-3xl font-bold ${theme.text} ${theme.textDark}`}>
			{children}
		</h2>
	)
}

export default Title