import { MapPin, Sun, Moon } from 'lucide-react';
import {Divider, Switch} from "@nextui-org/react";
import {useDarkMode} from "../hooks/useDarkMode.js";
import Logo from "../assets/Logo.jsx";
import SearchField from "../components/SearchField.jsx";
import {useLocality} from "../hooks/useLocality.js";
import {NavLink} from "react-router-dom";

export const Header = () => {
    const {darkMode, setDarkMode} = useDarkMode()
    const {location} = useLocality()

    return (
        <>
            <header className="py-[2px] fixedWidth">
                <div className="grid grid-cols-[34%_1fr_34%] items-center gap-[30px]">
                    <div className="flex items-center gap-[30px]">
                        <div className="flex-[0_0_auto] w-[3.2rem]">
                            <Logo/>
                        </div>

                        <div className="flex items-center gap-[4px] overflow-hidden">
                            <div><MapPin size="1.33rem" strokeWidth="1.5"/></div>
                            <p className="truncate">{location?.name || "N/A"}</p>
                        </div>
                    </div>

                    <div className="justify-self-center w-full">
                        <SearchField/>
                    </div>

                    <Switch
                        className="justify-self-end"
                        defaultSelected size="sm" color="default"
                        thumbIcon={({isSelected, className}) =>
                            isSelected ? (
                                <Sun className={className}/>
                            ) : (
                                <Moon className={className}/>
                            )
                        }
                        classNames={{}}
                        isSelected={darkMode} onValueChange={setDarkMode}
                    />
                </div>
            </header>
            <Divider className="mb-[30px]" />
            <nav className={`flex gap-[20px] fixedWidth dark:text-zinc-200/40 text-lg`}>
                <NavLink to="/" state={{timeStamp: 1}}
                     className={({isActive}) => isActive ? "dark:text-zinc-200" : "hover:dark:text-zinc-200/70 duration-200"}>
                    Today
                </NavLink>

                <NavLink to="/tomorrow" state={{timeStamp: 3}}
                     className={({isActive}) => isActive ? "dark:text-zinc-200" : "hover:dark:text-zinc-200/70 duration-200"}>
                    Tomorrow
                </NavLink>

                <NavLink to="/week" state={{timeStamp: 7}}
                     className={({isActive}) => isActive ? "dark:text-zinc-200" : "hover:dark:text-zinc-200/70 duration-200"}>
                    Next 7 days
                </NavLink>

                <NavLink to="/two-week" state={{timeStamp: 14}}
                     className={({isActive}) => isActive ? "dark:text-zinc-200" : "hover:dark:text-zinc-200/70 duration-200"}>
                    Next 14 days
                </NavLink>
            </nav>
        </>
    )
}