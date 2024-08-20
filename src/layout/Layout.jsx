import Header from "./Header.jsx";
import {Divider} from "@nextui-org/react";

const Layout = ({ children }) => {
    return (
        <div className="w-screen h-screen dark:bg-zinc-900 bg-neutral-100 dark:text-zinc-100 duration-200">
            <Header />
            <Divider />
            <main >
                {children}
            </main>
        </div>
    )
}

export default Layout