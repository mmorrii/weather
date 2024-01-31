import Card from "../../common/Card";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const Cards = ({ requests, changeSelectedOption, changeFormData }) => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="w-full overflow-hidden">
			<div className="flex gap-2 2 min-h-[91px] overflow-y-auto hideScrollbar">
				{requests.map((r) => (
					<button
						key={r.location}
						onClick={() => {
							changeSelectedOption(r)
							changeFormData(`${r.latitude}, ${r.longitude}`)
						}}
						className="flex-auto max-w-[232px]"
					>
						<Card className={`${theme.bgHover50} dark:hover:bg-neutral-700 dark:text-neutral-50`}>
							<div className="flex flex-col gap-1 items-center">
								<p className="truncate max-w-[200px]">{r.location}</p>
								<div className="flex gap-2 text-sm opacity-50 max-w-[200px]">
									<p className="truncate">Ш: {r.latitude}</p>
									<p className="truncate">Д: {r.longitude}</p>
								</div>
							</div>
						</Card>
					</button>
				))}
			</div>
		</div>
	)
}

export default Cards