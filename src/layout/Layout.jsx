import {Header} from "./Header.jsx";
import {LocationProvider} from "../components/LocationProvider.jsx";
import {ForecastProvider} from "../components/ForecastProvider.jsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <LocationProvider>
            <ForecastProvider>
                <div className="w-screen h-screen dark:bg-zinc-900 bg-neutral-100 duration-200">
                    <Header/>
                    <main className="fixedWidth">
                        <Outlet/>
                    </main>
                </div>
            </ForecastProvider>
        </LocationProvider>
    )
}