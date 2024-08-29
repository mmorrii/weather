export const WeatherIcon = ({code, isDay = false}) => {
    switch (code) {
        case 0:
            return <div className="size-full">
                {isDay ? <img src={`${import.meta.env.BASE_URL}/clear-sky-day.svg`} title="Ясно" alt="Ясно"/> :
                    <img src={`${import.meta.env.BASE_URL}/clear-sky-night.svg`} title="Ясно" alt="Ясно"/>
                }
            </div>

        case 1:
        case 2:
            return <div className="size-full">
                {isDay ? <img src={`${import.meta.env.BASE_URL}/cloudy-day.svg`} title="Облачно" alt="Облачно"/> :
                    <img src={`${import.meta.env.BASE_URL}/cloudy-night.svg`} title="Облачно" alt="Облачно"/>
                }
            </div>

        case 3:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/overcast.svg`} title="Пасмурно" alt="Пасмурно"/>
            </div>

        case 45:
        case 48:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/fog.svg`} title="Туман" alt="Туман"/>
            </div>

        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/drizzle.svg`} title="Морось" alt="Морось"/>
            </div>

        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/rain.svg`} title="Дождь" alt="Дождь"/>
            </div>

        case 71:
        case 73:
        case 75:
        case 77:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/snow.svg`} title="Снег" alt="Снег"/>
            </div>

        case 80:
        case 81:
        case 82:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/rain.svg`} title="Ливень" alt="Ливень"/>
            </div>

        case 85:
        case 86:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/snow-showers.svg`} title="Снег с дождем" alt="Снег с дождем"/>
            </div>

        case 95:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/thunderstorm.svg`} title="Гроза" alt="Гроза"/>
            </div>

        case 96:
        case 99:
            return <div className="size-full">
                <img src={`${import.meta.env.BASE_URL}/thunderstorm.svg`} title="Гроза с градом" alt="Гроза с градом"/>
            </div>
    }
}
