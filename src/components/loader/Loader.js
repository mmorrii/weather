import LoaderIcon from "../../icons/LoaderIcon";

const Loader = () => {
	return (
		<div className="w-screen h-screen bg-blue-100 dark:bg-neutral-900 flex justify-center items-center">
			<div className="w-52 h-52 max-sm:w-32 max-sm:h-32">
				<LoaderIcon />
			</div>
		</div>
	)
}

export default Loader