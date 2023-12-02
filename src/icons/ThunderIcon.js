const ThunderIcon = ({ color }) => {
	return (
		<svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
			<g fill="none" fillRule="evenodd" id="thunder" stroke="none" strokeWidth="1">
				<g transform="translate(3.000000, 2.000000)">
					<path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185
					6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009
					3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179
					11.4633749,15.4024092" id="Oval" stroke={color} strokeWidth="2"/>
					<path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333
					17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667
					C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867
					8.66666667,6.81411072" id="Oval" stroke={color} strokeLinecap="round" strokeWidth="2"/>
					<polygon fill={color} id="Rectangle-5" points="10 18 14 18 12 22 15 22 9 30 10 25 7 25"/>
				</g>
			</g>
		 </svg>
	)
}

export default ThunderIcon