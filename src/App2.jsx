import {Route, Routes} from "react-router-dom";
import {Layout} from "./layout/Layout.jsx";
import {Home2} from "./pages/Home2.jsx";
import {Tomorrow} from "./pages/Tomorrow.jsx";
import {Week} from "./pages/Week.jsx";
import {TwoWeek} from "./pages/TwoWeek.jsx";

const App2 = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home2 />} />
                <Route path="/tomorrow" element={<Tomorrow />} />
                <Route path="/week" element={<Week />} />
                <Route path="/two-week" element={<TwoWeek />} />
            </Route>
        </Routes>
    )
}

export default App2