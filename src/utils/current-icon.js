export const weatherIcons = (code, isDay="_day", color) => {
	const dayNightSuffix = isDay ? "_day" : "_night";
	
	switch (code) {
		case 0:
		case 1:
			return {
				src: `/images/icons/clearly_icon${dayNightSuffix}.svg`,
				svg: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g stroke={color} strokeWidth="2" transform="translate(2 2)" fill="none" fillRule="evenodd">
						<circle cx="14" cy="14" r="8"></circle>
						<path
							d="M14 0v3m9.9 1.1-2.122 2.122M28 14h-3m-1.1 9.9-2.122-2.122M14
							28v-3m-9.9-1.1 2.122-2.122M0 14h3m1.1-9.9 2.122 2.122"
							strokeLinecap="round"></path>
					</g>
				</svg>
			}
		case 2:
			return {
				src: `/images/icons/partly_cloudy_icon${dayNightSuffix}.svg`,
				svg: <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd" id="Partly-Cloudy" stroke="none" strokeWidth="1">
						<g stroke={color} strokeWidth="2" transform="translate(2.000000, 5.000000)">
							<path d="M12.0414117,7.57296994 C11.6651156,5.90909589 10.1776503,4.66666667 8.4,4.66666667
							C6.33813693,4.66666667 4.66666667,6.33813693 4.66666667,8.4 C4.66666667,8.96920193
							4.79404975,9.50865195 5.02186366,9.99139781" id="Oval-2" strokeLinecap="round"/>
							<g id="Group-3" transform="translate(2.000000, 4.000000)">
								<path d="M10.1441195,5.03385852 C9.29274212,4.62749472 8.33960485,4.4 7.33333333,4.4
								C3.72507297,4.4 0.8,7.32507297 0.8,10.9333333 C0.8,14.5415937 3.72507297,17.4666667
								7.33333333,17.4666667 C9.11597284,17.4666667 10.7318603,16.7527163
								11.9106557,15.5951556" id="Oval"/>
								<path d="M10.4628116,13.7934799 C11.974939,16.0108696 14.5212905,17.4666667
								17.4076616,17.4666667 C22.0468535,17.4666667 25.8076616,13.7058586 25.8076616,9.06666667
								C25.8076616,4.42747477 22.0468535,0.666666667 17.4076616,0.666666667 C13.3847405,0.666666667
								10.0223343,3.49466753 9.2,7.27111244" id="Oval" strokeLinecap="round"/>
							</g>
							<path d="M7.94386176,1.86666667 L7.94386176,0 M12.6913459,4.15627042 L14.1420184,2.98153902
							M2.02877844,9.28102555 L0.209954317,9.70093419 M3.19637762,4.15627042
							L1.74570516,2.98153902" id="Path-4" strokeLinecap="round"/>
						</g>
					</g>
				</svg>
			}
		case 3:
			return {
				src: "/images/icons/cloud_icon.svg",
				svg: <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd" id="Overcast" stroke="none" strokeWidth="1">
						<g stroke={color} strokeWidth="2" transform="translate(3.000000, 6.000000)">
							<g id="Group-3" transform="translate(2.000000, 0.000000)">
								<path d="M8,7 C8,4.790861 6.209139,3 4,3 C1.790861,3 0,4.790861 0,7 C0,7.74909293
								0.205914623,8.45009192 0.564228738,9.04948184" id="Oval-3"/>
								<path d="M18.0816219,3.5314731 C16.8758322,1.42182409 14.6039585,0 12,0 C9.53738965,0
								7.37179014,1.27165453 6.1240426,3.19412246" id="Oval-3" strokeLinecap="round"/></g>
							<g id="Group-2" transform="translate(0.000000, 3.000000)">
								<path d="M10.1441195,5.03385852 C9.29274212,4.62749472 8.33960485,4.4 7.33333333,4.4
								C3.72507297,4.4 0.8,7.32507297 0.8,10.9333333 C0.8,14.5415937 3.72507297,17.4666667
								7.33333333,17.4666667 C9.11597284,17.4666667 10.7318603,16.7527163
								11.9106557,15.5951556" id="Oval"/>
								<path d="M10.4628116,13.7934799 C11.974939,16.0108696 14.5212905,17.4666667
								17.4076616,17.4666667 C22.0468535,17.4666667 25.8076616,13.7058586 25.8076616,9.06666667
								C25.8076616,4.42747477 22.0468535,0.666666667 17.4076616,0.666666667 C13.3847405,0.666666667
								10.0223343,3.49466753 9.2,7.27111244" id="Oval" strokeLinecap="round"/>
							</g>
						</g>
					</g>
				</svg>
			}
		case 45:
		case 48:
			return {
				src: "/images/icons/fog_icon.svg",
				svg: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill={color} stroke={color} fillRule="evenodd">
						<path
							d="M10.5 25.5h9v1h-9zM12.5 20.5h11v1h-11zM9.5 15.5h17v1h-17zM6.5
							10.5h17v1h-17zM4.5 5.5h23v1h-23z"></path>
					</g>
				</svg>
			}
		case 51:
		case 53:
		case 55:
		case 56:
		case 61:
		case 63:
			return {
				src: "/images/icons/rain_icon.svg",
				svg: <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd" id="Heavy-Rain" stroke="none" strokeWidth="1">
						<g stroke={color} transform="translate(3.000000, 2.000000)">
							<path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185
							6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009
							3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179
							11.4633749,15.4024092" id="Oval" strokeWidth="2"/>
							<path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333
							17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667
							C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867
							8.66666667,6.81411072" id="Oval" strokeLinecap="round" strokeWidth="2"/>
							<path d="M14.2414368,23.7414368 L14.5508969,25.8014677 C14.6849183,26.6936284
							15.4513825,27.3535534 16.3535534,27.3535534 C17.1819805,27.3535534 17.8535534,26.6819805
							17.8535534,25.8535534 C17.8535534,24.9513825 17.1936284,24.1849183 16.3014677,24.0508969
							L14.2414368,23.7414368 Z" fill={color} id="Rectangle-4"
									transform="translate(16.000000, 25.500000) rotate(45.000000)
									translate(-16.000000, -25.500000) "/>
							<path d="M6.24143682,23.7414368 L6.55089694,25.8014677 C6.6849183,26.6936284
							7.45138247,27.3535534 8.35355339,27.3535534 C9.18198052,27.3535534 9.85355339,26.6819805
							9.85355339,25.8535534 C9.85355339,24.9513825 9.1936284,24.1849183 8.30146774,24.0508969
							L6.24143682,23.7414368 Z" fill={color} id="Rectangle-3"
									transform="translate(8.000000, 25.500000) rotate(45.000000)
									translate(-8.000000, -25.500000) "/>
							<path d="M10.2414368,19.7414368 L10.5508969,21.8014677 C10.6849183,22.6936284
							11.4513825,23.3535534 12.3535534,23.3535534 C13.1819805,23.3535534 13.8535534,22.6819805
							13.8535534,21.8535534 C13.8535534,20.9513825 13.1936284,20.1849183 12.3014677,20.0508969
							L10.2414368,19.7414368 Z" fill={color} id="Rectangle-2"
									transform="translate(12.000000, 21.500000) rotate(45.000000)
									translate(-12.000000, -21.500000) "/>
						</g>
					</g>
				</svg>
			}
		case 57:
		case 65:
		case 66:
		case 67:
		case 80:
		case 81:
		case 82:
			return {
				src: "/images/icons/heavy_rain_icon.svg",
				svg: <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd" id="Moderate-Rain" stroke="none" strokeWidth="1">
						<g id="Moderate-rain" stroke={color} strokeWidth="2" transform="translate(3.000000, 2.000000)">
							<g id="Group-2"><path d="M9.64075822,4.50583286 C8.76235298,4.08656863 7.77895738,3.85185185
							6.74074074,3.85185185 C3.01793243,3.85185185 0,6.86978428 0,10.5925926 C0,14.3154009
							3.01793243,17.3333333 6.74074074,17.3333333 C8.57997198,17.3333333 10.2471575,16.5967179
							11.4633749,15.4024092" id="Oval"/>
								<path d="M9.96956753,13.5435375 C11.529699,15.8313205 14.156887,17.3333333
								17.134889,17.3333333 C21.9213568,17.3333333 25.8015556,13.4531345 25.8015556,8.66666667
								C25.8015556,3.88019884 21.9213568,0 17.134889,0 C12.9842561,0 9.51510686,2.91777867
								8.66666667,6.81411072" id="Oval" strokeLinecap="round"/></g>
							<g id="Group-3" strokeLinecap="round" transform="translate(13.409396, 22.893086)
							rotate(25.000000) translate(-13.409396, -22.893086) translate(10.409396, 18.893086)">
								<path d="M5,0 L5,2" id="Path-5"/><path d="M5,5 L5,7" id="Path-6"/>
								<path d="M1,1 L1,3" id="Path-5"/><path d="M1,6 L1,8" id="Path-6"/></g>
							<g id="Group-3" strokeLinecap="round" transform="translate(4.409396, 22.893086)
							rotate(25.000000) translate(-4.409396, -22.893086) translate(1.409396, 18.893086)">
								<path d="M5,0 L5,2" id="Path-5"/><path d="M5,5 L5,7" id="Path-6"/>
								<path d="M1,1 L1,3" id="Path-5"/><path d="M1,6 L1,8" id="Path-6"/>
							</g>
						</g>
					</g>
				</svg>
			}
		case 71:
		case 73:
		case 75:
		case 77:
			return {
				src: "/images/icons/snow_icon.svg",
				svg: <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd" id="Snow" stroke="none" strokeWidth="1">
						<g id="Group" stroke={color} transform="translate(3.000000, 3.000000)">
							<path d="M9.28571429,0.928571429 L13,3.71428571 L16.7142857,0.928571429 M25.0714286,9.28571429
				L22.2857143,13 L25.0714286,16.7142857 M16.7142857,25.0714286 L13,22.2857143 L9.28571429,25.0714286
				M0.928571429,16.7142857 L3.71428571,13 L0.928571429,9.28571429" id="Path-12" strokeLinecap="round"
									strokeWidth="2"/>
							<circle cx="13" cy="13" fill={color} id="Oval-9" r="1.85714286"/>
							<path d="M13,0 L13,26" id="Path-13" strokeLinecap="round" strokeWidth="2"/>
							<path d="M0,13 L26,13" id="Path-14" strokeLinecap="round" strokeWidth="2"/>
							<path d="M3.71428571,3.71428571 L22.2857143,22.2857143" id="Path-16" strokeLinecap="round" strokeWidth="2"/>
							<path d="M3.71428571,22.2857143 L22.2857143,3.71428571" id="Path-17" strokeLinecap="round" strokeWidth="2"/>
						</g>
					</g>
				</svg>
			}
		case 85:
		case 86:
			return {
				src: "/images/icons/snow_and_rain_icon.svg",
				svg: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
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
			}
		case 95:
		case 96:
		case 99:
			return {
				src: "/images/icons/thunder_icon.svg",
				svg: <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd" id="Thunder" stroke="none" strokeWidth="1">
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
			}
		default:
			return "Нет данных"
	}
}