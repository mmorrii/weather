import {Fragment, useContext, useState} from "react";
import {IsDarkContext, ThemeContext} from "../../App";
import Card from "../../common/Card";
import SoilTempChart from "./soil/SoilTempChart";
import SoilMoistureChart from "./soil/SoilMoistureChart";
import {Figcaption} from "../../common/Caption";
import {motion} from "framer-motion";

const SoilChart = ({ weather }) => {
	const [navBarIndex, setNavBarIndex] = useState(0)
	const theme = useContext(ThemeContext)
	const isDark = useContext(IsDarkContext)
	
	const navBar = ["температура почвы", "влажность почвы"]
	const textColor = isDark ? theme.textDark : theme.text
	
	return (
		<motion.figure
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeIn"}}
		>
			<Card className="max-md:px-2">
				<div className="flex gap-2 max-md:px-3 mb-1">
					{ navBar.map((item, index) => (
						<Fragment key={item}>
							<button
								className={ navBarIndex === index ? `${textColor} font-semibold` : "opacity-50 hover:opacity-70" }
								onClick={() => setNavBarIndex(index)}
							>
								{item}
							</button>
							{ index !== navBar.length - 1 && <div className="opacity-50">|</div> }
						</Fragment >
					))}
				</div>
				{ navBarIndex === 0 && <SoilTempChart weather={weather} /> }
				{ navBarIndex === 1 && <SoilMoistureChart weather={weather} /> }
			</Card>
			<Figcaption>
				{ navBarIndex === 0 && "Температура почвы на глубине 0, 6 и 18см. 0 см – температура поверхности почвы или воды" }
				{ navBarIndex === 1 && "Среднее содержание влаги в почве на глубине 0–1, 1–3 и 3–9 см" }
			</Figcaption>
		</motion.figure>
	)
}

export default SoilChart