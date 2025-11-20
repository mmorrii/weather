import { Header } from "./Header.jsx"
import { LocationProvider } from "../providers/LocationProvider.jsx"
import { ForecastProvider } from "../providers/ForecastProvider.jsx"
import { Outlet } from "react-router-dom"
import { CustomSuspense } from "../components/CustomSuspense.jsx"

export const Layout = () => {
   return (
      <LocationProvider>
         <div className="min-w-screen min-h-screen dark:bg-zinc-900 bg-neutral-100 duration-200">
            <Header />
            <main className="w-fixed">
               <ForecastProvider>
                  <CustomSuspense>
                     <Outlet />
                  </CustomSuspense>
               </ForecastProvider>
            </main>
         </div>
      </LocationProvider>
   )
}