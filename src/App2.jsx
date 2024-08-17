import {Route, Routes} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

const App2 = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/*<Route*/}
                {/*    path="/"*/}
                {/*    element={<Home weather={weather} selectedOption={selectedOption} cityData={city} />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*	path="/today"*/}
                {/*	element={<Today weather={weather} selectedOption={selectedOption} cityData={city} season={curSeason} />}*/}
                {/*/>*/}
                {/*<Route*/}
                {/*	path="/weekly"*/}
                {/*	element={<Weekly weather={weather} selectedOption={selectedOption} cityData={city} season={curSeason} />}*/}
                {/*/>*/}
            </Route>
        </Routes>
    )
}

export default App2