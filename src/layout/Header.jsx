import { MapPin, Sun, Moon, Search } from 'lucide-react';
import {Switch} from "@nextui-org/react";
import {useDarkMode} from "../hooks/useDarkMode.js";

const Header = () => {
    const {darkMode, setDarkMode} = useDarkMode()

    return (
        <header className="flex justify-between items-center gap-[30px] py-[2px] max-w-7xl w-full m-auto">
            <div className="flex items-center gap-[30px]">
                <div className="w-[3.4rem] stroke-zinc-100">
                    <img className="stroke-zinc-100" src="/weather/src/assets/logo.svg" alt=""/>
                </div>
                    <div className="w-[3.2rem]">
                        <Logo/>

                <div className="flex items-center gap-[4px]">
                    <MapPin size="1.33rem" strokeWidth="1.5"/>
                    <p>Australia</p>
                </div>
            </div>

            <div className="relative w-80">
                <input
                    className="w-full dark:bg-zinc-600/40 rounded-full p-[3px_20px_4px_40px] placeholder:text-sm"
                    type="text" id="search" placeholder="Type to search..."
                />
                <label
                    htmlFor="search"
                    className="absolute top-1/2 -translate-y-1/2 left-[8px] cursor-text"
                >
                    <Search size="1.33rem" />
                </label>

            </div>

            <Switch
                defaultSelected size="sm"
                color="default"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <Sun className={className} />
                    ) : (
                        <Moon className={className} />
                    )
                }
                isSelected={ darkMode }
                onValueChange={ setDarkMode }
            />
        </header>
    )
}

export default Header