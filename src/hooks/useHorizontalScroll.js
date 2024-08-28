import {useEffect, useRef} from "react";

export const useHorizontalScroll = () => {
    const elRef = useRef(null)

    useEffect(() => {
        const el = elRef.current

        if (el) {
            const onWheel = (e) => {
                e.preventDefault()
                if (e.deltaY === 0) return
                el.scrollTo({ left: el.scrollLeft + e.deltaY })
            }

            el.addEventListener("wheel", onWheel)

            return () => el.removeEventListener("wheel", onWheel)
        }
    }, [])

    return elRef
}