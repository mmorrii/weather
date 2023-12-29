import DailyTable from "./table/DailyTable";
import Title from "../common/Title";
import {motion} from "framer-motion";

const DailyWeather = ({ weather, season }) => {
	return (
		<motion.section
			className="mb-4"
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeIn"}}
		>
			<Title>Суточная погода</Title>
			<DailyTable weather={weather} season={season}/>
		</motion.section>
	)
}

export default DailyWeather