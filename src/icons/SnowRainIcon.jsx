const SnowRainIcon = ({ color }) => {
	return (
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fillRule="evenodd" stroke={color}>
				<g strokeWidth="2">
					<path d="M12.64 6.506a6.74 6.74 0 1 0 1.823 10.897"></path>
					<path d="M12.97 15.544a8.667 8.667 0 1 0-1.303-6.73" strokeLinecap="round"></path>
				</g>
				<circle cx="14" cy="29" r="1"></circle>
				<circle cx="22" cy="23" r="1"></circle>
				<circle cx="8.5" cy="22.5" r="1"></circle>
				<circle cx="18.5" cy="26.5" r="1"></circle>
				<path fill={color} strokeLinecap="round" strokeLinejoin="round"
						d="m8 27-1 1.732L8 27H6h2l-1-1.732L8 27l1-1.732L8 27h2-2l1 1.732zM15 23l-1
						1.732L15 23h-2 2l-1-1.732L15 23l1-1.732L15 23h2-2l1 1.732zM22 28l-1 1.732L22
						28h-2 2l-1-1.732L22 28l1-1.732L22 28h2-2l1 1.732z"></path>
			</g>
		 </svg>
	)
}

export default SnowRainIcon