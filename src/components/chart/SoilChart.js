import {Fragment, useContext, useState} from "react";
import {ThemeContext} from "../../App";
import Card from "../../common/Card";
import SoilTempChart from "./soil/SoilTempChart";
import SoilMoistureChart from "./soil/SoilMoistureChart";
import {Figcaption} from "../../common/Caption";

const SoilChart = ({ weather }) => {
	const [navBarIndex, setNavBarIndex] = useState(0)
	const theme = useContext(ThemeContext)
	
	const navBar = ["температура почвы", "влажность почвы"]
	
	return (
		<figure>
			<Card>
				<div className="flex gap-2">
					{ navBar.map((item, index) => (
						<Fragment key={item}>
							<button
								className={ navBarIndex === index ? theme.textNavBar : "opacity-50 hover:opacity-70" }
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
		</figure>
	)
}

export default SoilChart