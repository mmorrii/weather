const FogIcon = ({ color }) => {
	return (
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<g fill={color} stroke={color} fillRule="evenodd">
				<path
					d="M10.5 25.5h9v1h-9zM12.5 20.5h11v1h-11zM9.5 15.5h17v1h-17zM6.5
					10.5h17v1h-17zM4.5 5.5h23v1h-23z"></path>
			</g>
		 </svg>
	)
}

export default FogIcon