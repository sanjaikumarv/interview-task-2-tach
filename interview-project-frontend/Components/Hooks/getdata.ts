import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios"
export function GetData(url: string, setCurrentElement: Dispatch<SetStateAction<string>>, currentElement: boolean) {
    const [data, setData] = useState([""])
    const fetchData = async () => {
        const responsse = await axios.get(url)
        const data = responsse.data
        setData(data)
        if (currentElement) {
            setCurrentElement(data[0])
        }

    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, setData }

}