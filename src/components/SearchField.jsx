import {Search} from "lucide-react";
import {useState} from "react";
import {createPortal} from "react-dom";
import {AnimatePresence, motion} from "framer-motion";

const SearchField = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [value, setValue] = useState("")
    const [data, setData] = useState(undefined)

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`https://data-api.oxilor.com/rest/search-regions?searchTerm=${value}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer xS9W6HOMQnQKipQ6K_ewl4umZBHlP-",
                "Accept-Language": "ru"
            }
        })
            .then(response => response.json())
            .then(data => {
                    setData(data)
                    console.log(data)
            })
            .catch((err) => console.error(err.message))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full dark:bg-zinc-600/40 rounded-full p-[3px_20px_4px_40px] placeholder:text-sm"
                    type="text" id="search" placeholder="Type to search..."
                    value={value} onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <label
                    htmlFor="search"
                    className="absolute top-1/2 -translate-y-1/2 left-[8px] cursor-text"
                >
                    <Search size="1.33rem"/>
                </label>
            </form>
            <AnimatePresence>
                {isFocused && (<>{createPortal(<Modal data={data} />, document.body)}</>)}
            </AnimatePresence>
        </>
    )
}

export default SearchField

const Modal = ({data}) => {
    return (
        <motion.div
            className="w-screen h-scren bg-black/80 fixed inset-0 top-[55px]"
            initial={{opacity: 0, y: 1000}}
            animate={{opacity: 1, y: 0, transition: {duration: 0.6}}}
            exit={{opacity: 0, y: 1000, transition: {duration: 0.6, ease: "easeIn"}}}
        >
            <div className="max-w-7xl w-full m-auto py-[20px]">
                <ul className="flex flex-wrap gap-[10px]">
                    {data?.map(d => (
                        <li key={d.id} className="dark:bg-zinc-600/30 dark:hover:bg-zinc-600/50 w-[180px] rounded p-[6px_10px] cursor-pointer">
                            <h2 className="truncate">{d.name},<span className="text-[0.8rem] textGray ml-[5px]">{d.type}</span></h2>
                            <div className="text-[0.8rem] flex gap-[6px] textGray">
                                <p className="flex-[1_1_50%] truncate">Ш:<span className="ml-[4px]">{d.latitude}</span></p>
                                <p className="flex-[1_1_50%] truncate">Д:<span className="ml-[4px]">{d.longitude}</span></p>
                            </div>
                            {d?.parentRegions?.length > 0 && (
                                <p className="textGray text-[0.8rem] truncate">
                                    {d?.parentRegions?.map((region, index) => (
                                        <span key={region.id}>{region.name}
                                            {/* add ", " except for the last element */}
                                            {index < d.parentRegions.length - 1 && ", "}
                                        </span>
                                    ))}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}