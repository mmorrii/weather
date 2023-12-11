import {Fragment, useContext, useState} from "react";
import {ThemeContext} from "../../App";
import TempChart from "./temperature/TempChart";
import {DateTime} from "luxon";
import PrecipitationChart from "./precipitation/PrecipitationChart";
import WindSpeedChart from "./wind-speed/WindSpeedChart";
import Card from "../../common/Card";
import HumidityChart from "./humidity/HumidityChart";
import {Figcaption} from "../../common/Caption";

const ChartComponent = ({ weather, selectedCardIndex, onSelectedCardIndex }) => {
	const [navBarIndex, setNavBarIndex] = useState(0)
	const [tempHeight, setTempHeight] = useState(2)
	const [windSpeedHeight, setWindSpeedHeight] = useState(10)
	const theme = useContext(ThemeContext)
	
	const labels = weather.hourly?.time.map(item => DateTime.fromISO(item).toFormat('HH:mm'))
	const navBar = ["температура", "вероятность осадков", "скорость ветра", "относительная влажность"]
	
	return (
		<figure className="w-full">
			<Card>
				<div className="flex justify-between">
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
					{ navBarIndex === 0 &&
						<button className={`${theme.textNavBar} ${theme.textHover}`}
								  onClick={() => setTempHeight(tempHeight === 2 ? 80 : tempHeight === 80 ? 120 : 2)}
						>{tempHeight}м</button>
					}
					{ navBarIndex === 2 &&
						<button className={`${theme.textNavBar} ${theme.textHover}`}
								  onClick={() => setWindSpeedHeight(windSpeedHeight === 10 ? 80 : windSpeedHeight === 80 ? 120 : 10)}
						>{windSpeedHeight}м</button>
					}
				</div>
				{ navBarIndex === 0 &&
					<TempChart
						weather={weather}
						labels={labels}
						tempHeight={tempHeight}
						selectedCardIndex={selectedCardIndex}
						onSelectedCardIndex={onSelectedCardIndex}
					/>
				}
				{ navBarIndex === 1 &&
					<PrecipitationChart
						weather={weather}
						labels={labels}
						selectedCardIndex={selectedCardIndex}
						onSelectedCardIndex={onSelectedCardIndex}
					/>
				}
				{ navBarIndex === 2 &&
					<WindSpeedChart
						weather={weather}
						labels={labels}
						windSpeedHeight={windSpeedHeight}
						selectedCardIndex={selectedCardIndex}
						onSelectedCardIndex={onSelectedCardIndex}
					/>
				}
				{ navBarIndex === 3 &&
					<HumidityChart
						weather={weather}
						labels={labels}
						selectedCardIndex={selectedCardIndex}
						onSelectedCardIndex={onSelectedCardIndex}
					/>
				}
			</Card>
			<Figcaption>
				{ navBarIndex === 0 && `Температура воздуха на высоте ${tempHeight} м над землей. Стандартная высота – 2 м`}
				{ navBarIndex === 1 && "Вероятность осадков более 0,1 мм за предыдущий час"}
				{ navBarIndex === 2 && `Скорость ветра на высоте ${windSpeedHeight} м над землей. Стандартная высота – 10 м`}
				{ navBarIndex === 3 && "Относительная влажность на высоте 2 м над землей"}
			</Figcaption>
		</figure>
	)
}

export default ChartComponent
