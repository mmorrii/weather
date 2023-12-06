import {Fragment, useContext, useState} from "react";
import {ThemeContext} from "../../App";
import Card from "../../common/Card";
import SoilTempChart from "./soil/SoilTempChart";
import SoilMoistureChart from "./soil/SoilMoistureChart";

const SoilChart = ({ weather }) => {
	const [navBarIndex, setNavBarIndex] = useState(0)
	const theme = useContext(ThemeContext)
	
	const navBar = ["температура почвы", "влажность почвы"]
	
	return (
	  <Card>
		  <div className="flex gap-2">
			  { navBar.map((item, index) => (
				  <Fragment key={item}>
					  <button
						  className={ navBarIndex === index ? theme.textNavBar : "opacity-50" }
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
	)
}

export default SoilChart