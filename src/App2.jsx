import {createBrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./layout/Layout.jsx";
import {lazy} from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"))
const WeekPage = lazy(() => import("./pages/WeekPage.jsx"))
const TwoWeekPage = lazy(() => import("./pages/TwoWeekPage.jsx"))

export const App2 = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/week" element={<WeekPage />} />
                <Route path="/two-week" element={<TwoWeekPage />} />
            </Route>
        </Routes>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "week",
                element: <WeekPage />,
                // loader: () => fetch(7),
            },
            {
                path: "two-week",
                element: <TwoWeekPage />,
            },
        ],
    }
], { basename: import.meta.env.BASE_URL })