import Grid from "./grid/Grid";
import PrecipitationBlock from "./PrecipitationBlock";
import ChartComponent from "./chart/ChartComponent";
import {useState} from "react";

const InfoBlock = ({ weather, selectedOption }) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	return (
		<section className="mb-4">
			<div className="flex max-lg:flex-col gap-4 max-sm:gap-2 mb-4 max-sm:mb-2">
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