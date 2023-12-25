import {coords} from "../../data/coords";
import Select from "react-select";
import {useContext} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import {useResize} from "../../hooks/useResize";

const SelectComponent =	({ selectedOption, handleOptionChange }) => {
	const themeContext = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	const windowWidth = useResize()
	
	const theme = (theme) => ({
		...theme,
		colors: {
			...theme.colors,
			primary25: isDark? themeContext.hoverDarkColor : themeContext.hoverColor,
			primary: themeContext.hexColor,
		},
	})
	
	const customStyles = {
		control: (baseStyles) => ({
			...baseStyles,
			width: (windowWidth <= 768 && windowWidth >= 355) ? 335 : 280,
			backgroundColor: isDark ? "#171717" : "white",
			borderColor: isDark ? themeContext.hexColorDark : themeContext.hexColor,
			borderWidth: 2,
			"&:hover": {
				borderColor: "none",
			},
		}),
		menu: (baseStyles) => ({
			...baseStyles,
			width: (windowWidth <= 768 && windowWidth >= 355) ? 335 : 280,
			backgroundColor: isDark ? "#171717" : "white",
		}),
		groupHeading: (baseStyles) => ({
			...baseStyles,
			fontSize: 11,
			letterSpacing: 1,
			backgroundColor: isDark ? "#262626" : "#efefef",
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
		}),
		singleValue: (baseStyles) => ({
			...baseStyles,
			color: isDark ? "#fafafa" : "#000000",
		}),
		input: (baseStyles) => ({
			...baseStyles,
			color: isDark ? "#fafafa" : "#000000",
		}),
		option: (baseStyles) => ({
			...baseStyles,
			padding: windowWidth <= 768 ? "16px 12px" : "8px 12px",
		}),
	}
	
	
	return (
		<Select
			styles={customStyles}
			theme={theme}
			value={selectedOption}
			onChange={handleOptionChange}
			options={coords}
			isSearchable={true}
			// defaultMenuIsOpen={true}
		/>
	)
}

export default SelectComponent