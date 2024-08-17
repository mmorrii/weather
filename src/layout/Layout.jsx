import Header from "./Header.jsx";

const Layout = ({ children }) => {
    return (
        <div className="w-screen h-screen dark:bg-zinc-900 bg-neutral-100 dark:text-zinc-100 duration-200">
            <Header />
            {children}
        </div>
    )
}

export default Layout