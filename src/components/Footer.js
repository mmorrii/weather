import {useContext} from "react";
import {ThemeContext} from "../App";
import GitHubIcon from "../icons/GitHubIcon";
import {motion} from "framer-motion";

const Footer = () => {
	const theme = useContext(ThemeContext)
	
	return (
		<motion.footer
			className={`${theme.bg800andWhTxt} p-3 2xl:rounded-t-xl max-2xl:-mx-4`}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeIn"}}
		>
			<div className="flex items-center justify-center gap-2">
				<div className="w-8 h-8">
					<a href="https://github.com/mmorrii/weather" rel="noopener noreferrer" target="_blank">
						<GitHubIcon color="#ffffff"/>
					</a>
				</div>
				<p>mmorrii</p>
			</div>
		</motion.footer>
	)
}

export default Footer