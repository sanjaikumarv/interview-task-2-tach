import { useEffect, useState } from "react";
import axios from "axios"
export function GetData<T>(url: string) {
    const [data, setData] = useState<T>()
    const fetchData = async () => {
        const responsse = await axios.get(url)
        const data: T = responsse.data
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, setData }

}