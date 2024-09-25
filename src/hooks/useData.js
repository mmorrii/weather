import { useEffect, useState } from "react"

export const useData = (url, headers = {}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        let ignore = false

        fetch(url, { headers })
            .then(response => response.json())
            .then(data => {
                if (!ignore) {
                    setData(data)
                    console.log(data)
                }
            })
            .catch((err) => console.error(err.message))

        return () => {
            ignore = true
        }
    }, [url])

    return data
}