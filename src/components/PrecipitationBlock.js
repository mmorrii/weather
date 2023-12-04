import {useContext} from "react";
import {ThemeContext} from "../App";
import SumIcon from "../icons/SumIcon";
import ClockIcon from "../icons/ClockIcon";

const PrecipitationBlock = ({ weather }) => {
	const theme = useContext(ThemeContext)
	
	const pSum = weather.daily?.precipitation_sum
	const pHours = weather.daily?.precipitation_hours
	
	return (
		<div className={`p-5 h-full ${theme.bg800andWhTxt} rounded-xl`}>
			<h3 className="font-semibold text-lg mb-3">Суточные осадки</h3>
			<div className="flex gap-3">
				<div className="basis-1/2 flex items-center gap-1">
					<div className="w-5 h-5">
						<SumIcon color="#ffffff" />
					</div>
					<p>Сумма:
						<span className="ml-2 font-semibold text-lg">
							{pSum ? pSum[0] : null} мм
						</span>
					</p>
				</div>
				<div className="basis-1/2 flex items-center gap-1">
					<div className="w-5 h-5">
						<ClockIcon color="#ffffff" />
					</div>
					<p>Кол-во часов:
						<span className="ml-2 font-semibold text-lg">
							{pHours ? pSum[0] : null} ч
						</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default PrecipitationBlock