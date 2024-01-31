import Grid from "./grid/Grid";
import PrecipitationBlock from "./PrecipitationBlock";
import {motion} from "framer-motion";

const InfoBlock = ({ weather, selectedOption, selectedCardIndex }) => {
	return (
		<motion.section
			className="flex max-lg:flex-col gap-4 max-sm:gap-2 mb-4 max-sm:mb-2"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: "easeIn", delay: 0.7 }}
		>
			<Grid weather={weather} selectedCardIndex={selectedCardIndex} />
			<PrecipitationBlock
				weather={weather}
				selectedOption={selectedOption}
				selectedCardIndex={selectedCardIndex}
			/>
		</motion.section>
	)
}

export default InfoBlock