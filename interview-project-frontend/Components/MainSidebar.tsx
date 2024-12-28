/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { GetData } from './Hooks/getdata'
import { GET_MAIN_SIDEBAR_CONTENT } from './Endpoint'

export default function MainSidebar({ component, setComponent, version }: { component: string, setComponent: Dispatch<SetStateAction<string>>, version: string }) {
    const { data } = GetData(`${GET_MAIN_SIDEBAR_CONTENT}/${version}`)

    const sideBarData = data?.[version] || []
    useEffect(() => {
        setComponent(sideBarData?.[0]?.id)
    }, [sideBarData.length])

    return (
        <div className='bg-blue-light col-start-1 min-h-[80vh] col-end-2 pt-14 space-y-2'>
            {sideBarData?.map((d: string, idx: number) => <Data setComponent={setComponent} key={idx} name={d} component={component} />)}

        </div>
    )
}

function Data({ name = "", setComponent, component }: { name: any, component: string, setComponent: Dispatch<SetStateAction<string>> }) {
    return (
        <div onClick={() => setComponent(name.id)} className={`py-2 ${component === name.id ? "bg-blue-medium shadow-lg" : "bg-blue-light"}`}>
            <p className='p-4 m-auto w-2 mt-1 text-center hover:cursor-pointer rounded-full bg-[#4E95D9]'></p>
            <button className={`${component === name.id ? "text-[#4E95D9]" : "text-black"} w-full px-10  `}>{name.label}</button>
        </div>
    )

}