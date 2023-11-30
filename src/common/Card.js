const Card = ({ children, seasonsTheme }) => {
	return (
		<div className={`p-5 border-2 ${seasonsTheme.border} rounded-xl
			border-solid w-80 bg-white flex items-center gap-3`}>
			{children}
		</div>
	)
}

export default Card