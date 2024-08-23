import Header from "./Header.jsx";
import {Divider} from "@nextui-org/react";
import {LocationProvider} from "../components/LocationProvider.jsx";
import {ForecastProvider} from "../components/ForecastProvider.jsx";

const Layout = ({ children }) => {
    return (
        <LocationProvider>
            <ForecastProvider>
                <div className="w-screen h-screen dark:bg-zinc-900 bg-neutral-100 duration-200">
                    <Header/>
                    <Divider/>
                    <main>
                        {children}
                    </main>
                </div>
            </ForecastProvider>
        </LocationProvider>
    )
}

export default Layout