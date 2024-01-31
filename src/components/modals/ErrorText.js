const ErrorText = ({ isError }) => {
	return (
		<>
			{ isError === "comma" &&
				<p className="text-sm text-red-600 ml-1">
					Координаты должны содержать запятую
				</p>
			}
			{ isError === "empty" &&
				<p className="text-sm text-red-600 ml-1">
					Поле не может быть пустым
				</p>
			}
		</>
	)
}

export default ErrorText