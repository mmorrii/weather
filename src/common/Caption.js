export const Caption = ({ children }) => {
	return (
		<div className="text-center text-sm opacity-70 mt-2">
			{ children }
		</div>
	)
}

export const Figcaption = ({ children }) => {
	return (
		<figcaption className="text-center text-sm opacity-70 mt-2">
			{ children }
		</figcaption>
	)
}