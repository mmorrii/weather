import { Search, CircleX, OctagonAlert } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence } from "framer-motion"
import { button, CircularProgress, Tooltip } from "@nextui-org/react"
import { SearchModal } from "./SearchModal.jsx"

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
            "Authorization": import.meta.env.VITE_AUTH_KEY,
         },
      })
         .then(response => response.json())
         .then(data => {
            setIsLoading(false)
            setData(data)
         })
         .catch((err) => console.log(err))
   }

   return (
      <>
         <form onSubmit={handleSubmit} className="relative">
            <input
               className={`w-full dark:bg-zinc-600/40 bg-white rounded-full p-[2px_1.88rem_5px_2.22rem] placeholder:text-sm duration-200 ${error ? "border-error" : "border-default"}`}
               type="text" id="search" placeholder="Type to search..." ref={inputRef}
               value={value} onChange={(e) => setValue(e.target.value)}
               onFocus={() => setModalOpen(true)}
            />
            <label
               htmlFor="search"
               className="absolute top-1/2 -translate-y-1/2 left-[8px] cursor-text"
            >
               {isLoading
                  ? <CircularProgress aria-label="Loading..."
                       classNames={{
                          svg: "w-[1.33rem] h-[1.33rem]",
                          indicator: "stroke-blue-200",
                          track: "stroke-white/20",
                       }}
                  />
                  : <Search size="1.33rem" />
               }
            </label>

            <button type="button" className="absolute top-1/2 -translate-y-1/2 right-[8px]"
                    onClick={() => {
                       setValue("")
                       inputRef.current.focus()
                    }}
            >
               {xVisible && <CircleX size="1.2rem" className="opacity-50 hover:opacity-100 duration-100" />}
               {error &&
                  <Tooltip showArrow={true} radius="sm" content="Поле не может быть пустым" placement="right"
                           offset={10}
                           classNames={{
                              base: ["dark:before:bg-zinc-700"],
                              content: ["dark:bg-zinc-700"],
                           }}
                  >
                     <OctagonAlert size="1.2rem" className="stroke-red-500" />
                  </Tooltip>
               }
            </button>
         </form>
         <AnimatePresence>
            {modalOpen && (<>{createPortal(<SearchModal data={data} onModalOpen={setModalOpen} />, document.body)}</>)}
         </AnimatePresence>
      </>
   )
}

export default SearchField