const ClearlyDayIcon = ({ color }) => {
	return (
		<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<g stroke={color} strokeWidth="2" transform="translate(2 2)" fill="none" fillRule="evenodd">
				<circle cx="14" cy="14" r="8"></circle>
				<path
					d="M14 0v3m9.9 1.1-2.122 2.122M28 14h-3m-1.1 9.9-2.122-2.122M14
					28v-3m-9.9-1.1 2.122-2.122M0 14h3m1.1-9.9 2.122 2.122"
					strokeLinecap="round"></path>
			</g>
		</svg>
	)
}

export default ClearlyDayIcon