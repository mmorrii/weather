import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {App2} from "./App2.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App2 />
    </BrowserRouter>
)
