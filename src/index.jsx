import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App2 from "./App2.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="weather">
        <App2 />
    </BrowserRouter>
)
