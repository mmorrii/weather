import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../../App";

const Navbar = () => {
	const theme = useContext(ThemeContext)

	const inactiveStyles = `dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-white ${theme.bgHover100} py-2 w-28 rounded text-center transition`
	const activeStyles = `${theme.bg800andWhTxt} py-2 w-28 rounded text-center transition`
	
	return (
		<nav className="flex justify-center items-center gap-4 max-sm:gap-2">
			<NavLink
				to="/"
				className={({ isActive }) => isActive ? activeStyles : inactiveStyles }
			>
				Сейчас
			</NavLink>
			<NavLink
				to="/today"
				className={({ isActive }) => isActive ? activeStyles : inactiveStyles }
			>
				Сегодня
			</NavLink>
			<NavLink
				to="/weekly"
				className={({ isActive }) => isActive ? activeStyles : inactiveStyles }
			>
				На неделю
			</NavLink>
		</nav>
	)
}

export default Navbar