import {Header} from "./Header.jsx";
import {LocationProvider} from "../components/LocationProvider.jsx";
import {ForecastProvider} from "../components/ForecastProvider.jsx";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";

export const Layout = () => {
    return (
        <LocationProvider>
            <div className="w-screen h-screen dark:bg-zinc-900 bg-neutral-100 duration-200">
                <Header/>
                <main className="fixedWidth">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForecastProvider>
                            <Outlet/>
                        </ForecastProvider>
                    </Suspense>
                </main>
            </div>
        </LocationProvider>
    )
}