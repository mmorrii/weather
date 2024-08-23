import { MapPin, Sun, Moon } from 'lucide-react';
import {Switch} from "@nextui-org/react";
import {useDarkMode} from "../hooks/useDarkMode.js";
import Logo from "../assets/Logo.jsx";
import SearchField from "../components/SearchField.jsx";
import {useLocation} from "../hooks/useLocation.js";

const Header = () => {
    const {darkMode, setDarkMode} = useDarkMode()
    const {location} = useLocation()

    return (
        <header className="py-[2px] max-w-7xl w-full m-auto">
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
    )
}

export default Header