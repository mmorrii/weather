import {coords} from "../../data/coords";
import Select from "react-select";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const SelectComponent =	({ selectedOption, handleOptionChange }) => {
	const themeContext = useContext(ThemeContext)
	
	const theme = (theme) => ({
		...theme,
		colors: {
			...theme.colors,
			primary25: themeContext.hoverColor,
			primary: themeContext.hexColor,
		},
	})
	
	const customStyles = {
		control: (baseStyles) => ({
			...baseStyles,
			width: 280,
			backgroundColor: "white",
			borderColor: themeContext.hexColor,
			borderWidth: 2,
			"&:hover": {
				borderColor: "none",
			},
		}),
		menu: (baseStyles) => ({
			...baseStyles,
			width: 280,
		}),
		groupHeading: (baseStyles) => ({
			...baseStyles,
			fontSize: 11,
			letterSpacing: 1,
			backgroundColor: "#efefef",
			paddingBottom: 5,
			paddingTop: 5,
		}),
		group: (baseStyles) => ({
			...baseStyles,
			paddingTop: 0,
		}),
		valueContainer: (baseStyles) => ({
			...baseStyles,
			cursor: "text",
		})
	}
	
	
	return (
		<Select
			styles={customStyles}
			theme={theme}
			value={selectedOption}
			onChange={handleOptionChange}
			options={coords}
			isSearchable={true}
		/>
	)
}

export default SelectComponent