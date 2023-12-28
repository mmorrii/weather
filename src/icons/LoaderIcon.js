import { motion } from 'framer-motion';

const LoaderIcon = () => {
	return (
		<svg viewBox="0 0 514 516" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g id="logo-icon">
				<motion.g id="cloud"
							 initial={{ opacity: 0, scale: 0.5 }}
							 animate={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5}}}
				>
					<path id="Vector 1" d="M182.501 89.4992C97.0006 34.4998 56.5008 122 72.001 167.499C11 179.5 -37.9998 317.5 86.5006 351H426.501C566.501 291 492.501 144.999 398.001 144.999C406.179 -36.9925 209.237 -14.4103 182.501 89.4992Z" fill="#00AEEF" stroke="black" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round"/>
				</motion.g>
				<motion.g id="sphere"
					 initial={{x: -50, opacity: 0}}
					 animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1.5 } }}
				>
					<g id="Vector">
						<mask id="path-2-inside-1_37_15" fill="white">
							<path d="M94.5 373.999C94.2 372.298 93.1002 361.999 93.0002 361.999C92.8078 359.015 92.7486 355.838 92.8299 352.499C93.5262 323.931 104.919 283.548 131.342 250.5C154.833 221.118 190.204 197.533 240.5 193.2C245.202 192.794 250.035 192.558 255 192.5C260.288 191.967 266.328 191.944 272.897 192.5C305.122 195.226 350.058 211.872 381.255 250.5C401.029 274.984 415.283 308.3 417.283 352.499C417.394 354.965 417.467 357.465 417.5 359.999C417.4 360.099 417 372.499 416 377.499C415 382.499 414.839 382.477 413.939 386.882C413.039 391.286 410.939 399.194 409.239 404.399C407.638 409.604 404.138 418.413 401.438 423.918C398.838 429.424 393.337 438.833 389.337 444.939C386.776 448.69 383.046 453.611 379.46 457.973C377.304 460.596 375.2 463.017 373.435 464.859C368.734 469.764 361.834 476.37 357.933 479.474C354.033 482.577 347.332 487.582 342.932 490.484C338.531 493.287 330.831 497.591 325.93 499.994C321.03 502.396 312.229 505.9 306.428 507.902C300.628 509.804 292.527 512.206 288.426 513.107C285.019 513.885 280.103 514.516 272.897 514.941C268.047 515.227 262.161 515.419 255 515.499C248.461 515.612 243.924 515.67 240.5 515.626C231.722 515.515 230.257 514.739 221.12 512.506C214.119 510.905 204.018 507.902 198.717 505.9C193.317 503.898 185.116 500.294 180.416 497.792C175.715 495.289 167.914 490.484 162.914 487.081C158.013 483.778 149.312 476.471 143.512 470.965C139.751 467.333 135.121 462.351 131.342 457.973C129.392 455.714 127.67 453.616 126.41 451.946C122.71 447.041 117.309 438.833 114.509 433.928C111.709 429.023 107.608 420.415 105.408 414.909C103.308 409.404 100.408 400.795 99.1074 395.891C97.8073 390.986 96.1001 384.404 95.5 379.499C94.4931 374.626 94.8 375.701 94.5 373.999Z"/>
						</mask>
						<path d="M94.5 373.999C94.2 372.298 93.1002 361.999 93.0002 361.999C92.8078 359.015 92.7486 355.838 92.8299 352.499C93.5262 323.931 104.919 283.548 131.342 250.5C154.833 221.118 190.204 197.533 240.5 193.2C245.202 192.794 250.035 192.558 255 192.5C260.288 191.967 266.328 191.944 272.897 192.5C305.122 195.226 350.058 211.872 381.255 250.5C401.029 274.984 415.283 308.3 417.283 352.499C417.394 354.965 417.467 357.465 417.5 359.999C417.4 360.099 417 372.499 416 377.499C415 382.499 414.839 382.477 413.939 386.882C413.039 391.286 410.939 399.194 409.239 404.399C407.638 409.604 404.138 418.413 401.438 423.918C398.838 429.424 393.337 438.833 389.337 444.939C386.776 448.69 383.046 453.611 379.46 457.973C377.304 460.596 375.2 463.017 373.435 464.859C368.734 469.764 361.834 476.37 357.933 479.474C354.033 482.577 347.332 487.582 342.932 490.484C338.531 493.287 330.831 497.591 325.93 499.994C321.03 502.396 312.229 505.9 306.428 507.902C300.628 509.804 292.527 512.206 288.426 513.107C285.019 513.885 280.103 514.516 272.897 514.941C268.047 515.227 262.161 515.419 255 515.499C248.461 515.612 243.924 515.67 240.5 515.626C231.722 515.515 230.257 514.739 221.12 512.506C214.119 510.905 204.018 507.902 198.717 505.9C193.317 503.898 185.116 500.294 180.416 497.792C175.715 495.289 167.914 490.484 162.914 487.081C158.013 483.778 149.312 476.471 143.512 470.965C139.751 467.333 135.121 462.351 131.342 457.973C129.392 455.714 127.67 453.616 126.41 451.946C122.71 447.041 117.309 438.833 114.509 433.928C111.709 429.023 107.608 420.415 105.408 414.909C103.308 409.404 100.408 400.795 99.1074 395.891C97.8073 390.986 96.1001 384.404 95.5 379.499C94.4931 374.626 94.8 375.701 94.5 373.999Z" fill="url(#paint0_linear_37_15)"/>
						<path d="M92.8299 361.499H165.969V343.499H92.8299V361.499ZM165.969 361.499H255V343.499H165.969V361.499ZM255 361.499H342.86V343.499H255V361.499ZM342.86 361.499H417.283V343.499H342.86V361.499ZM246 192.5V285.167H264V192.5H246ZM246 285.167V352.499H264V285.167H246ZM246 352.499V423.518H264V352.499H246ZM246 423.518V515.499H264V423.518H246ZM246.646 509.052C227.915 491.543 206.398 463.928 191.865 430.069L175.325 437.169C190.925 473.513 213.967 503.145 234.354 522.201L246.646 509.052ZM191.865 430.069C181.802 406.623 175.152 380.34 174.968 352.44L156.969 352.559C157.171 383.255 164.483 411.911 175.325 437.169L191.865 430.069ZM174.968 352.44C174.812 328.743 179.318 303.76 190.487 278.189L173.993 270.984C161.78 298.942 156.797 326.429 156.969 352.559L174.968 352.44ZM190.487 278.189C201.704 252.512 219.723 226.056 246.786 199.64L234.214 186.759C205.691 214.599 186.245 242.935 173.993 270.984L190.487 278.189ZM266.755 199.078C284.663 215.799 305.375 242.974 318.997 277.096L335.714 270.422C321.05 233.691 298.763 204.338 279.039 185.922L266.755 199.078ZM318.997 277.096C327.994 299.634 333.856 325.091 333.86 352.501L351.86 352.498C351.856 322.504 345.44 294.785 335.714 270.422L318.997 277.096ZM333.86 352.501C333.863 377.232 329.1 403.676 317.434 431.156L334.003 438.189C346.629 408.446 351.864 379.605 351.86 352.498L333.86 352.501ZM317.434 431.156C306.771 456.274 290.288 482.381 266.231 508.893L279.562 520.988C304.831 493.139 322.473 465.35 334.003 438.189L317.434 431.156ZM126.088 257.807C138.255 266.556 156.646 276.082 179.578 283.183L184.902 265.989C163.591 259.39 146.998 250.673 136.596 243.193L126.088 257.807ZM179.578 283.183C201.032 289.827 226.635 294.403 255.075 294.166L254.925 276.167C228.5 276.387 204.743 272.133 184.902 265.989L179.578 283.183ZM255.075 294.166C278.414 293.972 303.644 290.536 330.021 282.355L324.689 265.163C300.071 272.798 276.592 275.987 254.925 276.167L255.075 294.166ZM330.021 282.355C348.126 276.74 366.744 268.898 385.639 258.36L376.871 242.64C359.059 252.574 341.592 259.921 324.689 265.163L330.021 282.355ZM136.562 465.304C147.232 457.707 164.314 448.839 186.195 442.235L180.995 425.003C157.465 432.104 138.568 441.779 126.122 450.642L136.562 465.304ZM186.195 442.235C205.813 436.314 229.123 432.265 254.912 432.518L255.088 414.519C227.316 414.246 202.192 418.605 180.995 425.003L186.195 442.235ZM254.912 432.518C276.15 432.727 299.086 435.854 323.058 443.27L328.379 426.075C302.654 418.116 277.98 414.744 255.088 414.519L254.912 432.518ZM323.058 443.27C339.923 448.488 357.329 455.838 375.044 465.815L383.877 450.131C365.054 439.53 346.471 431.672 328.379 426.075L323.058 443.27ZM93.0002 361.999L75.0374 363.157L76.1228 379.999H93.0002V361.999ZM95.5 379.499L113.367 377.314L113.277 376.58L113.128 375.857L95.5 379.499ZM105.408 414.909L88.5902 421.325L88.6408 421.458L88.6934 421.589L105.408 414.909ZM126.41 451.946L140.78 441.106L140.78 441.106L126.41 451.946ZM143.512 470.965L131.007 483.913L131.064 483.967L131.12 484.021L143.512 470.965ZM162.914 487.081L173.042 472.201L173.008 472.178L172.975 472.155L162.914 487.081ZM198.717 505.9L205.077 489.061L205.026 489.041L204.974 489.022L198.717 505.9ZM221.12 512.506L225.392 495.021L225.263 494.989L225.134 494.96L221.12 512.506ZM288.426 513.107L284.564 495.526L284.492 495.542L284.421 495.558L288.426 513.107ZM306.428 507.902L312.036 525.006L312.169 524.962L312.301 524.917L306.428 507.902ZM342.932 490.484L352.602 505.666L352.723 505.589L352.844 505.51L342.932 490.484ZM373.435 464.859L360.439 452.405L360.439 452.405L373.435 464.859ZM389.337 444.939L404.202 455.089L404.299 454.947L404.393 454.804L389.337 444.939ZM401.438 423.918L385.277 415.992L385.218 416.111L385.162 416.231L401.438 423.918ZM409.239 404.399L392.128 398.81L392.079 398.96L392.033 399.11L409.239 404.399ZM417.5 359.999L430.234 372.721L435.597 367.353L435.498 359.765L417.5 359.999ZM92.8299 352.499L110.825 352.938L92.8299 352.499ZM417.283 352.499L399.301 353.313L399.301 353.313L417.283 352.499ZM255 192.5L255.209 210.499L256.009 210.49L256.804 210.409L255 192.5ZM255 515.499L254.798 497.5L254.744 497.501L254.691 497.502L255 515.499ZM240.5 515.626L240.272 533.625L240.272 533.625L240.5 515.626ZM240.5 193.2L242.045 211.133L242.045 211.133L240.5 193.2ZM272.897 192.5L274.414 174.564L274.414 174.564L272.897 192.5ZM272.897 514.941L271.838 496.972L271.838 496.972L272.897 514.941ZM131.342 250.5L145.401 261.74L145.401 261.74L131.342 250.5ZM381.255 250.5L395.258 239.191L395.258 239.191L381.255 250.5ZM131.342 457.973L117.715 469.733L117.715 469.733L131.342 457.973ZM379.46 457.973L393.366 469.403L393.366 469.403L379.46 457.973ZM93.0002 379.999C87.9832 379.999 84.2963 377.958 82.2596 376.443C80.2693 374.963 79.0331 373.401 78.4166 372.549C77.1962 370.861 76.5641 369.352 76.365 368.869C75.8789 367.69 75.6341 366.724 75.5794 366.511C75.4134 365.866 75.3256 365.364 75.3137 365.298C75.2654 365.029 75.2445 364.868 75.2578 364.962C75.274 365.077 75.31 365.351 75.3688 365.83C75.4823 366.754 75.6311 368.03 75.7962 369.446C75.9571 370.826 76.1317 372.324 76.2854 373.585C76.4106 374.611 76.5964 376.121 76.7734 377.125L112.227 370.874C112.254 371.027 112.189 370.611 112.021 369.228C111.881 368.08 111.718 366.683 111.554 365.277C111.394 363.905 111.23 362.501 111.1 361.441C111.037 360.927 110.968 360.383 110.904 359.929C110.877 359.738 110.822 359.354 110.747 358.933C110.721 358.791 110.621 358.231 110.445 357.547C110.386 357.315 110.136 356.333 109.646 355.144C109.445 354.657 108.811 353.144 107.589 351.454C106.971 350.6 105.734 349.037 103.743 347.556C101.706 346.041 98.0178 343.999 93.0002 343.999V379.999ZM76.7734 377.125C76.7933 377.238 76.8013 377.288 76.8026 377.297C76.8029 377.298 76.8025 377.295 76.8049 377.313C76.8074 377.332 76.8103 377.353 76.8176 377.408C76.8237 377.455 76.8345 377.536 76.8465 377.625C76.8732 377.822 76.907 378.06 76.9517 378.345C77.1136 379.379 77.3716 380.718 77.8723 383.142L113.128 375.857C112.622 373.407 112.529 372.847 112.518 372.775C112.513 372.74 112.539 372.925 112.478 372.469C112.417 372.022 112.343 371.536 112.227 370.874L76.7734 377.125ZM77.6332 381.685C78.4123 388.053 80.4855 395.889 81.7083 400.503L116.507 391.279C115.129 386.082 113.788 380.755 113.367 377.314L77.6332 381.685ZM81.7083 400.503C83.2247 406.223 86.3555 415.467 88.5902 421.325L122.226 408.494C120.26 403.341 117.59 395.368 116.507 391.279L81.7083 400.503ZM88.6934 421.589C91.1682 427.782 95.6213 437.15 98.8771 442.853L130.141 425.004C127.796 420.897 124.048 413.048 122.123 408.23L88.6934 421.589ZM98.8771 442.853C102.065 448.436 107.888 457.283 112.041 462.787L140.78 441.106C137.531 436.8 132.554 429.231 130.141 425.004L98.8771 442.853ZM131.12 484.021C137.283 489.87 146.795 497.923 152.853 502.007L172.975 472.155C169.232 469.632 161.342 463.071 155.903 457.909L131.12 484.021ZM152.786 501.962C158.184 505.635 166.55 510.802 171.957 513.68L188.874 481.903C184.881 479.777 177.645 475.334 173.042 472.201L152.786 501.962ZM171.957 513.68C177.49 516.626 186.446 520.548 192.461 522.777L204.974 489.022C200.187 487.248 192.742 483.962 188.874 481.903L171.957 513.68ZM192.357 522.739C198.543 525.075 209.443 528.3 217.105 530.053L225.134 494.96C218.795 493.509 209.493 490.729 205.077 489.061L192.357 522.739ZM292.289 530.688C297.311 529.584 306.117 526.946 312.036 525.006L300.82 490.798C295.138 492.661 287.743 494.828 284.564 495.526L292.289 530.688ZM312.301 524.917C318.534 522.765 328.074 518.989 333.853 516.156L318.007 483.832C313.985 485.803 305.923 489.034 300.556 490.887L312.301 524.917ZM333.853 516.156C339.319 513.477 347.606 508.848 352.602 505.666L333.262 475.302C329.457 477.726 322.342 481.706 318.007 483.832L333.853 516.156ZM352.844 505.51C357.838 502.215 364.99 496.861 369.14 493.559L346.727 465.388C343.076 468.292 336.826 472.948 333.02 475.459L352.844 505.51ZM369.14 493.559C373.979 489.709 381.531 482.426 386.431 477.313L360.439 452.405C355.938 457.102 349.688 463.032 346.727 465.388L369.14 493.559ZM404.393 454.804C408.65 448.306 414.63 438.134 417.714 431.606L385.162 416.231C383.045 420.713 378.024 429.36 374.28 435.075L404.393 454.804ZM417.599 431.845C420.689 425.543 424.548 415.855 426.444 409.688L392.033 399.11C390.729 403.354 387.587 411.283 385.277 415.992L417.599 431.845ZM426.349 409.988C428.241 404.195 430.525 395.624 431.575 390.486L396.304 383.278C395.553 386.949 393.636 394.193 392.128 398.81L426.349 409.988ZM431.575 390.486C431.966 388.569 432.178 387.696 432.445 386.571C432.762 385.237 433.1 383.78 433.65 381.029L398.35 373.969C397.9 376.219 397.658 377.25 397.419 378.257C397.13 379.472 396.812 380.79 396.304 383.278L431.575 390.486ZM433.65 381.029C434.086 378.853 434.366 376.4 434.559 374.394C434.765 372.254 434.926 370.017 435.051 368.053C435.177 366.08 435.272 364.274 435.338 363.035C435.373 362.382 435.396 361.96 435.413 361.701C435.422 361.549 435.42 361.602 435.407 361.751C435.404 361.787 435.376 362.11 435.316 362.542C435.292 362.713 435.211 363.288 435.044 364.018C434.967 364.355 434.781 365.136 434.435 366.097C434.26 366.583 433.947 367.389 433.452 368.337C433.029 369.146 432.038 370.916 430.234 372.721L404.766 347.277C402.961 349.084 401.969 350.854 401.545 351.665C401.049 352.614 400.736 353.422 400.56 353.911C400.213 354.877 400.025 355.663 399.946 356.008C399.776 356.753 399.692 357.349 399.664 357.546C399.596 358.032 399.56 358.431 399.548 358.564C399.518 358.908 399.496 359.243 399.483 359.449C399.454 359.907 399.422 360.509 399.39 361.11C399.322 362.381 399.236 364.006 399.124 365.77C398.871 369.746 398.571 372.862 398.35 373.969L433.65 381.029ZM110.963 360.842C110.808 358.433 110.755 355.791 110.825 352.938L74.8353 352.061C74.7421 355.885 74.808 359.597 75.0374 363.157L110.963 360.842ZM399.301 353.313C399.404 355.584 399.471 357.89 399.502 360.233L435.498 359.765C435.463 357.04 435.385 354.347 435.264 351.686L399.301 353.313ZM216.848 529.992C225.579 532.125 229.079 533.483 240.272 533.625L240.728 497.628C236.908 497.579 235.47 497.396 234.252 497.168C232.284 496.8 230.819 496.347 225.392 495.021L216.848 529.992ZM240.272 533.625C244.01 533.672 248.815 533.608 255.309 533.497L254.691 497.502C248.107 497.615 243.839 497.667 240.728 497.628L240.272 533.625ZM242.045 211.133C246.294 210.767 250.68 210.551 255.209 210.499L254.791 174.501C249.389 174.564 244.11 174.822 238.955 175.266L242.045 211.133ZM256.804 210.409C260.826 210.004 265.741 209.959 271.38 210.436L274.414 174.564C266.916 173.93 259.751 173.93 253.196 174.591L256.804 210.409ZM255.202 533.498C262.559 533.415 268.744 533.217 273.956 532.909L271.838 496.972C267.351 497.236 261.763 497.422 254.798 497.5L255.202 533.498ZM273.956 532.909C281.565 532.461 287.614 531.755 292.432 530.655L284.421 495.558C282.424 496.014 278.64 496.571 271.838 496.972L273.956 532.909ZM110.825 352.938C111.433 327.986 121.626 291.477 145.401 261.74L117.283 239.26C88.2122 275.62 75.6198 319.875 74.8353 352.061L110.825 352.938ZM145.401 261.74C166.131 235.811 197.146 215.002 242.045 211.133L238.955 175.266C183.262 180.064 143.535 206.425 117.283 239.26L145.401 261.74ZM271.38 210.436C299.653 212.827 339.685 227.677 367.251 261.809L395.258 239.191C360.43 196.066 310.59 177.624 274.414 174.564L271.38 210.436ZM367.251 261.809C384.512 283.182 397.467 312.78 399.301 353.313L435.264 351.686C433.099 303.819 417.545 266.786 395.258 239.191L367.251 261.809ZM112.041 462.787C113.629 464.892 115.631 467.318 117.715 469.733L144.969 446.213C143.154 444.11 141.71 442.339 140.78 441.106L112.041 462.787ZM117.715 469.733C121.754 474.413 126.762 479.813 131.007 483.913L156.016 458.018C152.741 454.854 148.487 450.289 144.969 446.213L117.715 469.733ZM386.431 477.313C388.633 475.016 391.056 472.212 393.366 469.403L365.555 446.543C363.552 448.98 361.768 451.018 360.439 452.405L386.431 477.313ZM393.366 469.403C397.21 464.726 401.277 459.373 404.202 455.089L374.471 434.79C372.275 438.006 368.881 442.496 365.555 446.543L393.366 469.403Z" fill="black" mask="url(#path-2-inside-1_37_15)"/>
					</g>
				</motion.g>
			</g>
			<defs>
				<linearGradient id="paint0_linear_37_15" x1="388" y1="301" x2="184" y2="487" gradientUnits="userSpaceOnUse">
					<stop stopColor="#96C8EF"/>
					<stop offset="1" stopColor="#1E81CE"/>
				</linearGradient>
			</defs>
		</svg>
	
	)
}

export default LoaderIcon