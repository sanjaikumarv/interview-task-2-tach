/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios"
export function GetData(url: string) {
    const [data, setData] = useState<any>()
    const fetchData = async () => {
        const responsse = await axios.get(url)
        const data = responsse.data
        setData(data)
    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { data, setData }

}