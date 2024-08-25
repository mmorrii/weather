export const WeatherIcon = ({code}) => {
    return (
        <>
            {(c => {
                    switch (c) {
                        case 0:
                            return <div>Ясно</div>

                        case 1:
                        case 2:
                            return <div>Облачно</div>

                        case 3:
                            return <div>Пасмурно</div>

                        case 45:
                        case 48:
                            return <div>Туман</div>

                        case 51:
                        case 53:
                        case 55:
                        case 56:
                        case 57:
                            return <div>Морось</div>

                        case 61:
                        case 63:
                        case 65:
                        case 66:
                        case 67:
                            return <div>Дождь</div>

                        case 71:
                        case 73:
                        case 75:
                        case 77:
                            return <div>Снег</div>

                        case 80:
                        case 81:
                        case 82:
                            return <div>Ливень</div>

                        case 85:
                        case 86:
                            return <div>Снег с дождем</div>

                        case 95:
                            return <div>Гроза</div>

                        case 96:
                        case 99:
                            return <div>Гроза с градом</div>
                    }
                }
            )(code)}
        </>
    )

}