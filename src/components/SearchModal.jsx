import { motion, useDragControls, useMotionValue } from "framer-motion"
import { button } from "@nextui-org/react"
import styles from "./button.module.css"
import { useLocality } from "../hooks/useLocality.js"

export const SearchModal = ({ data, onModalOpen }) => {
    const dragControls = useDragControls()
    const y = useMotionValue(0)
    const { setLocation } = useLocality()

    return (
        <motion.div
            className="w-screen h-scren bg-black/80 backdrop-blur-lg fixed z-20 inset-0 top-[3.085rem]"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, y: "100%", transition: { duration: 0.4, ease: "easeInOut" } }}
            drag="y" dragControls={dragControls} dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }} style={{ y }}
            onDragEnd={() => y.get() >= 150 && onModalOpen(false)}
        >
            <div className="max-w-7xl w-full h-full m-auto pt-[42px] pb-[20px] relative overflow-hidden flex flex-col">
                <CloseButton onModalOpen={onModalOpen} controls={dragControls} />

                <div className="mb-8">
                    <h3 className="mb-1">История поиска</h3>
                    <p className="textGray">Нет данных</p>
                </div>

                <div className="h-full overflow-y-auto">
                    <ul className="flex flex-wrap gap-[10px]">
                        {data?.map(d => (
                            <li
                                key={d.id}
                                className="flex-auto dark:bg-zinc-600/30 dark:hover:bg-zinc-600/45 min-w-[240px] rounded p-[6px_10px] cursor-pointer"
                                onClick={() => setLocation(d)}
                            >
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

const CloseButton = ({ controls, onModalOpen }) => {
    return (
        <button
            className={`absolute top-[10px] py-[8px] left-1/2 -translate-x-1/2 cursor-grab active:cursor-grabbing flex ${styles.button}`}
            onPointerDown={(e) => controls.start(e)}
            onDoubleClick={() => onModalOpen(false)}
        >
            <span className="h-[5px] w-[60px] bg-zinc-600 rounded translate-x-[2px]"></span>
            <span className="h-[5px] w-[60px] bg-zinc-600 rounded -translate-x-[2px]"></span>
        </button>
    )
}