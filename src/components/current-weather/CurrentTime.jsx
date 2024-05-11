import {useEffect, useState} from "react";
import {DateTime} from "luxon";

const CurrentTime = ({timezone}) => {
	const [currentTime, setCurrentTime] = useState(DateTime.now().setZone(timezone));
	
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(DateTime.now().setZone(timezone));
		}, 1000);
		
		return () => clearInterval(intervalId);
	}, [timezone]);
	
	return (
		<div>
			<p>Текущее время:
				<span className="ml-2 text-xl font-semibold max-[530px]:block max-[530px]:text-right">
					{currentTime.toFormat('HH:mm:ss')}
				</span>
			</p>
		</div>
	);
}

export default CurrentTime