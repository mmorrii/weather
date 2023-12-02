const ArrowIcon = ({ color, dir }) => {
	return (
		<svg fill={color} className={`transform ${dir}`} viewBox="0 0 32 32"
			  xmlns="http://www.w3.org/2000/svg">
			<g data-name="Layer 2" id="Layer_2">
				<path d="M9.05,10.05a1,1,0,0,0,1.42,0l4.6-4.6V29a1,1,0,0,0,2,0V5.48l4.57,
									4.57a1,1,0,0,0,1.41-1.41L16.69,2.27a.9.9,0,0,0-1.27,0L9.05,8.64A1,1,0,0,0,9.05,10.05Z"/>
			</g>
		</svg>
	)
}

export default ArrowIcon