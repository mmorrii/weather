import {Search, CircleX, OctagonAlert} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {AnimatePresence, motion} from "framer-motion";
import {button, CircularProgress, Tooltip} from "@nextui-org/react";
import styles from "./button.module.css"

const SearchField = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [xVisible, setXVisible] = useState(false)
    const [data, setData] = useState(undefined)

    const inputRef = useRef()

    useEffect(() => {
        if (value.length > 0) {
            setError(false)
            setXVisible(true)
        } else {
            setXVisible(false)
        }
    }, [value])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value) return setError(true)

        setIsLoading(true)

        fetch(`https://data-api.oxilor.com/rest/search-regions?searchTerm=${value}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer xS9W6HOMQnQKipQ6K_ewl4umZBHlP-",
                "Accept-Language": "ru"
            }
        })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false)
                setData(data)
                console.log(data)
            })
            .catch((err) => console.error(err.message))
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="relative">
                <input
                    className={`w-full dark:bg-zinc-600/40 rounded-full p-[2px_1.88rem_5px_2.22rem] placeholder:text-sm duration-200 ${error ? "borderError" : "borderDefault"}`}
                    type="text" id="search" placeholder="Type to search..." ref={inputRef}
                    value={value} onChange={(e) => setValue(e.target.value)}
                    onFocus={() => setModalOpen(true)}
                />
                <label
                    htmlFor="search"
                    className="absolute top-1/2 -translate-y-1/2 left-[8px] cursor-text"
                >
                    { isLoading ?
                        <CircularProgress
                            aria-label="Loading..."
                            classNames={{ svg: "w-[1.33rem] h-[1.33rem]", indicator: "stroke-blue-200", track: "stroke-white/20" }}
                        /> :
                        <Search size="1.33rem"/>
                    }
                </label>

                <button
                    type="button" onClick={() => { setValue(""); inputRef.current.focus() }}
                    className="absolute top-1/2 -translate-y-1/2 right-[8px]"
                >
                    {xVisible && <CircleX size="1.2rem" className="opacity-50 hover:opacity-100 duration-100" />}
                    {error &&
                        <Tooltip showArrow={true} radius="sm" content="Поле не может быть пустым" placement="right" offset={10}
                             classNames={{
                                 base: ["dark:before:bg-zinc-700" ],
                                 content: [ "dark:bg-zinc-700" ],
                             }}
                        >
                            <OctagonAlert size="1.2rem" className="stroke-red-500"/>
                        </Tooltip>
                    }
                </button>
            </form>
            <AnimatePresence>
                {modalOpen && (<>{createPortal(<Modal data={data} onModalOpen={setModalOpen} />, document.body)}</>)}
            </AnimatePresence>
        </>
    )
}

export default SearchField

const Modal = ({data, onModalOpen}) => {
    return (
        <motion.div
            className="w-screen h-scren bg-black/80 fixed inset-0 top-[3.055rem]"
            initial={{opacity: 0, y: 1000}}
            animate={{opacity: 1, y: 0, transition: {duration: 0.6}}}
            exit={{opacity: 0, y: 1000, transition: {duration: 0.6, ease: "easeIn"}}}
        >
            <div className="max-w-7xl w-full m-auto pt-[42px] pb-[20px] relative">
                <CloseButton onModalOpen={onModalOpen} />
                <div className="overflow-hidden overflow-y-auto">
                    <ul className="flex flex-wrap gap-[10px]">
                        {data?.map(d => (
                            <li key={d.id} className="flex-auto h-auto dark:bg-zinc-600/30 dark:hover:bg-zinc-600/45 min-w-[240px] rounded p-[6px_10px] cursor-pointer">
                                <h2 className="truncate">
                                    {d.name},<span className="text-[0.8rem] textGray ml-[5px]">{d.type}</span>
                                </h2>

                                <div className="text-[0.8rem] flex gap-[6px] textGray">
                                    <p className="flex-[1_1_50%] truncate">
                                        Ш:<span className="ml-[4px] dark:text-blue-500">{d.latitude}</span>
                                    </p>
                                    <p className="flex-[1_1_50%] truncate">
                                        Д:<span className="ml-[4px] dark:text-green-500">{d.longitude}</span>
                                    </p>
                                </div>

                                {d?.parentRegions?.length > 0 && (
                                    <p className="dark:text-pink-500 text-[0.8rem] truncate">
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
            </div>
        </motion.div>
    )
}

const CloseButton = ({onModalOpen}) => {
    return (
        <button
            className={`absolute top-[10px] py-[8px] left-1/2 -translate-x-1/2 flex ${styles.button}`}
            onClick={() => onModalOpen(false)}
        >
            <span className="h-[5px] w-[60px] bg-zinc-600 rounded translate-x-[2px]"></span>
            <span className="h-[5px] w-[60px] bg-zinc-600 rounded -translate-x-[2px]"></span>
        </button>
    )
}