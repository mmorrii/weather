import {Fragment, useContext, useState} from "react";
import {useResize} from "../../hooks/useResize";
import {ThemeContext} from "../../App";

const NavBar = ({ navBarData, onChangeIndex, navBarIndex, textColor }) => {
	const windowWidth = useResize()
	const theme = useContext(ThemeContext)
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<>
			{ windowWidth > 700 &&
				<div className="flex gap-2 text-base">
					{ navBarData.map((item, index) => (
						<Fragment key={item}>
							<button
								className={ navBarIndex === index ? `${textColor} font-semibold` : "opacity-50 hover:opacity-70" }
								onClick={() => onChangeIndex(index)}
							>
								{item}
							</button>
							{ index !== navBarData.length - 1 && <div className="opacity-50">|</div> }
						</Fragment >
					))}
				</div>
			}
			{ windowWidth <= 700 &&
				<div
					className={`relative cursor-pointer py-1.5 px-2.5 rounded ${theme.border} ${theme.borderDark}
					w-[175px] text-center`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<p className="truncate">{navBarData[navBarIndex]}</p>
					{ isOpen && <ul className={`absolute mt-3 left-0 z-10 w-fit ${theme.bg50} dark:bg-neutral-900 py-1.5 rounded-md`}>
						{navBarData.map((item, index) => (
							<li
								key={item}
								className={`px-4 py-3 ${navBarIndex === index ? theme.bg800andWhTxt :
									`dark:hover:bg-neutral-800 ${theme.bgHover100}`}`}
								onClick={() => onChangeIndex(index)}
							>
								{item}
							</li>
						))}
					</ul> }
				</div>
			}
		</>
	)
}

export default NavBar