import Grid from "./grid/Grid";
import PrecipitationBlock from "./PrecipitationBlock";
import ChartComponent from "./chart/ChartComponent";
import {useState} from "react";
import {motion} from "framer-motion";

const InfoBlock = ({ weather, selectedOption }) => {
	const [selectedCardIndex, setSelectedCardIndex] = useState(0)
	
	return (
		<section className="mb-4">
			<motion.div
				className="flex max-lg:flex-col gap-4 max-sm:gap-2 mb-4 max-sm:mb-2"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: "easeIn", delay: 0.7 }}
			>
				<Grid weather={weather} />
				<PrecipitationBlock
					weather={weather}
					selectedOption={selectedOption}
					selectedCardIndex={selectedCardIndex}
				/>
			</motion.div>
			<ChartComponent
				weather={weather}
				selectedCardIndex={selectedCardIndex}
				onSelectedCardIndex={(i) => setSelectedCardIndex(i)}
			/>
		</section>
	)
}

export default InfoBlock