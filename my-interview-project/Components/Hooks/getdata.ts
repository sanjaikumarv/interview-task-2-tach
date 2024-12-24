import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function GetData(url: string, setCurrentElement: Dispatch<SetStateAction<string>>, currentElement: boolean) {
    const [data, setData] = useState([""])
    const fetchData = async () => {
        const responsse = await fetch(url)
        const data = await responsse?.json()
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