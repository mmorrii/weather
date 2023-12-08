const EyeIcon = ({ color }) => {
	return (
		<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path d="M21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868
			16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74284 13.0378C2.26857 12.4187 2.26856
			11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5C16.1818 5 19.764 9.01321 21.2572
			10.9622Z" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"/>
			<circle cx="12" cy="12" r="3" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"/>
		</svg>
	)
}

export default EyeIcon