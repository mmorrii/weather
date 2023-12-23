const BlackBg = ({ children, className }) => {
	return (
		<div className={`bg-black rounded-2xl px-3 bg-opacity-30 pb-1 ${className}`}>
			{children}
		</div>
	)
}

export default BlackBg