import Card from "../../common/Card";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const Cards = () => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="flex gap-2 min-h-[91px]">
			<button className="flex-auto max-w-[232px]">
				<Card className={`${theme.bgHover50}`}>
					<div className="flex flex-col gap-1 items-center">
						<p>Europe/Kiev</p>
						<div className="flex gap-2 text-sm opacity-50 max-w-[200px]">
							<p className="truncate">Ш: 52.4578</p>
							<p className="truncate">Д: 12.6987</p>
						</div>
					</div>
				</Card>
			</button>
		</div>
	)
}

export default Cards