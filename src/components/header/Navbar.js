import {Link} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../../App";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const Navbar = () => {
	const theme = useContext(ThemeContext)
	const [isActive, setIsActive] = useLocalStorage("headerNavIndex",0)
	
	return (
		<nav className="flex justify-center items-center gap-4 max-sm:gap-2">
			<Link
				to="/"
				className={`${isActive === 0 ? theme.bg800andWhTxt : `dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-white ${theme.bgHover100}`}
			py-2 w-28 rounded text-center`}
				onClick={() => setIsActive(0)}
			>
				Сейчас
			</Link>
			<Link
				to="/today"
				className={`${isActive === 1 ? theme.bg800andWhTxt : `dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-white ${theme.bgHover100}`}
			py-2 w-28 rounded text-center`}
				onClick={() => setIsActive(1)}
			>
				Сегодня
			</Link>
			<Link
				to="/weekly"
				className={`${isActive === 2 ? theme.bg800andWhTxt : `dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-white ${theme.bgHover100}`}
			py-2 w-28 rounded text-center`}
				onClick={() => setIsActive(2)}
			>
				На неделю
			</Link>
		</nav>
	)
}

export default Navbar