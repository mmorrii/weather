import Title from "../common/Title";
import HourlyTable from "./table/HourlyTable";
import {motion} from "framer-motion";

const HourlyWeather = ({ weather, selectedOption, season }) => {
	return (
		<section>
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.4, ease: "easeIn"}}
			>
				<Title>Почасовая погода</Title>
				<HourlyTable weather={weather} selectedOption={selectedOption} season={season} />
			</motion.div>
		</section>
	)
}

export default HourlyWeather