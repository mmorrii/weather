import {useContext} from "react";
import {ThemeContext} from "../App";

const Title = ({ children }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<h2 className={`mb-5 text-2xl font-bold ${theme.text}`}>
			{children}
		</h2>
	)
}

export default Title