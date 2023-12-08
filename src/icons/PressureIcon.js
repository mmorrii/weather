const PressureIcon = ({ color }) => {
	return (
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fillRule="evenodd" id="Thermometer-Hot" stroke="none" strokeWidth="1">
				<g id="Group" stroke={color} strokeWidth="1.8" transform="translate(7.000000, 2.000000)">
					<path d="M3,16.8026932 L3,3 C3,1.34314575 4.34314575,3.04359188e-16 6,0
					C7.65685425,-3.04359188e-16 9,1.34314575 9,3 L9,16.8026932 C10.7934041,17.8401214 12,19.7791529
					12,22 C12,25.3137085 9.3137085,28 6,28 C2.6862915,28 0,25.3137085 0,22 C0,19.7791529
					1.20659589,17.8401214 3,16.8026932 Z" id="Combined-Shape"/>
					<path d="M13,5 L18,5" id="Path-19" strokeLinecap="round"/>
					<path d="M13,9 L18,9" id="Path-20" strokeLinecap="round"/>
					<path d="M13,13 L18,13" id="Path-21" strokeLinecap="round"/>
				</g>
				<g fill={color} id="Group-2" transform="translate(10.000000, 12.000000)">
					<circle cx="3" cy="12" id="Oval" r="3"/>
					<rect height="11" id="Rectangle-2" rx="1" width="1.8" x="2" y="0"/>
				</g>
			</g>
		</svg>
	)
}

export default PressureIcon