import {useContext} from "react";
import {ThemeContext} from "../../../App";

const UvIndex = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	const uvIndex = weather.daily?.uv_index_max
	
	return (
		<tr className={`border-y border-solid border-blue-800 ${theme.bg50}`}>
			<td className="font-semibold pl-3">УФ-индекс</td>
			{uvIndex && uvIndex.map((uv, index) => (
				<td key={index} className="text-center p-2">
					{uv}
				</td>
			))}
		</tr>
	)
}

export default UvIndex