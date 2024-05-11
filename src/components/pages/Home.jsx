import CurrentWeather from "../current-weather/CurrentWeather";
import GridNow from "../grid/GridNow";
import PrecipitationBlockNow from "../PrecipitationBlockNow";
import {motion} from "framer-motion";

const Home = ({ weather, selectedOption, cityData }) => {
	return (
		<main className="flex-auto mb-8">
			<CurrentWeather
				weather={weather}
				selectedOption={selectedOption}
				cityData={cityData}
			/>
			<motion.div
				className="flex max-lg:flex-col-reverse gap-4 max-sm:gap-2 mb-4 max-sm:mb-2"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4, ease: "easeIn", delay: 0.7 }}
			>
				<GridNow weather={weather} />
				<PrecipitationBlockNow weather={weather} selectedOption={selectedOption} />
			</motion.div>
		</main>
	)
}

export default Home