import {useContext} from "react";
import {ThemeContext} from "../App";
import GitHubIcon from "../icons/GitHubIcon";

const Footer = () => {
	const theme = useContext(ThemeContext)
	
	return (
		<footer className={`${theme.bg800andWhTxt} p-3 -mx-4`}>
			<div className="flex items-center justify-center gap-2">
				<div className="w-8 h-8">
					<a href="https://github.com/mmorrii/weather" rel="noopener noreferrer" target="_blank">
						<GitHubIcon color="#ffffff"/>
					</a>
				</div>
				<p>mmorrii</p>
			</div>
		</footer>
	)
}

export default Footer