import {DateTime} from "luxon";
import {useContext} from "react";
import {ThemeContext} from "../../../App";
import FogIcon from "../../../icons/FogIcon";

const DailyCardHumidity = ({ weather, onSelectedCardIndex, selectedCardIndex, humidity }) => {
	const theme = useContext(ThemeContext)
	
	const date = weather.daily?.time
	
	const getValue = () => {
		let result = [];
		for (let i = 0; i < humidity.length; i += 24) {
			result.push(humidity.slice(i, i + 24));
		}
		
		return result;
	}
	
	const getMaxValues = (result) => {
		let maxArr = [];
		for (let i = 0; i < result.length; i++) {
			maxArr.push(Math.max(...result[i]));
		}
		return maxArr;
	}
	
	return (
		<div className="flex justify-between gap-2">
			{date?.map((d, index) => (
				<button
					key={d}
					onClick={() => onSelectedCardIndex(index)}
					className={` ${ (selectedCardIndex === index) ? theme.bg800andWhTxt : 'bg-transparent'}
					py-3.5 px-6 flex flex-col items-center gap-0.5 rounded-xl text-black`}
				>
					<p>{ DateTime.fromISO(d).toFormat('dd.MM') }</p>
					<div className="w-11 h-11">
						{ selectedCardIndex === index ? (
							<FogIcon color="#ffffff"/>
						) : (
							<FogIcon color={theme.hexColor} />
						)}
					</div>
					<p title="Максимальная суточная относительная влажность" >
						{ getMaxValues(getValue())[index] }%
					</p>
				</button>
			))}
		</div>
	)
}

export default DailyCardHumidity