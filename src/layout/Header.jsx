import { MapPin, Sun, Moon } from 'lucide-react';
import {Switch} from "@nextui-org/react";
import {useDarkMode} from "../hooks/useDarkMode.js";
import Logo from "../assets/Logo.jsx";
import SearchField from "../components/SearchField.jsx";

const Header = () => {
    const {darkMode, setDarkMode} = useDarkMode()

    return (
        <header className="py-[2px] max-w-7xl w-full m-auto">
            <div className="flex justify-between items-center gap-[30px]">
                <div className="flex items-center gap-[30px]">
                    <div className="w-[3.2rem]">
                        <Logo/>
                    </div>

                    <div className="flex items-center gap-[4px]">
                        <MapPin size="1.33rem" strokeWidth="1.5"/>
                        <p>Australia</p>
                    </div>
                </div>

                <div className="relative w-80">
                    <SearchField/>
                </div>

                <Switch
                    defaultSelected size="sm"
                    color="default"
                    thumbIcon={({isSelected, className}) =>
                        isSelected ? (
                            <Sun className={className}/>
                        ) : (
                            <Moon className={className}/>
                        )
                    }
                    isSelected={darkMode}
                    onValueChange={setDarkMode}
                />
            </div>
        </header>
    )
}

export default Header