import Grid from "./grid/Grid";
import PrecipitationBlock from "./PrecipitationBlock";
import ChartComponent from "./chart/ChartComponent";
import {useState} from "react";

const InfoBlock = ({ weather, selectedOption }) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	return (
		<section className="flex justify-between gap-4 mb-6">
			<div className="flex-shrink-0 flex flex-col gap-4">
				<Grid weather={weather} />
				<PrecipitationBlock
					weather={weather}
					selectedOption={selectedOption}
					selectedCardIndex={selectedCardIndex}
				/>
			</div>
			<ChartComponent
				weather={weather}
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
			/>
		</section>
	)
}

export default InfoBlock