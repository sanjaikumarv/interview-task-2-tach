import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { GetData } from './Hooks/getdata'
import { GET_MAIN_SIDEBAR_CONTENT } from './Endpoint'
import { useStateContext } from './context/StateContext'

interface Data {
    id: string, label: string
}

interface ApiData {
    [versionKey: string]: Array<Data>


}

export default function MainSidebar() {

    const { version, setComponent, component } = useStateContext()
    const { data } = GetData<ApiData>(`${GET_MAIN_SIDEBAR_CONTENT}/${version}`)

    const sideBarData = data?.[version] || []
    useEffect(() => {
        setComponent(sideBarData?.[0]?.id)
    }, [sideBarData.length])

    return (
        <div className='bg-blue-light col-start-1 min-h-[80vh] col-end-2 pt-14 space-y-2'>
            {sideBarData?.map((d: Data, idx: number) => <Data setComponent={setComponent} key={idx} data={d} component={component} />)}

        </div>
    )
}

function Data({ data, setComponent, component }: { data: Data, component: string, setComponent: Dispatch<SetStateAction<string>> }) {
    return (
        <div onClick={() => setComponent(data.id)} className={`py-2 ${component === data.id ? "bg-blue-medium shadow-lg" : "bg-blue-light"}`}>
            <p className='p-4 m-auto w-2 mt-1 text-center hover:cursor-pointer rounded-full bg-[#4E95D9]'></p>
            <button className={`${component === data.id ? "text-[#4E95D9]" : "text-black"} w-full px-10  `}>{data.label}</button>
        </div>
    )

}