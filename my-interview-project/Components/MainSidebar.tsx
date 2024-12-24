import React, { Dispatch, SetStateAction } from 'react'
import { GetData } from './Hooks/getdata'
import { GET_MAIN_SIDEBAR_CONTENT } from './Endpoint'

export default function MainSidebar({ component, setComponent, version }: { component: string, setComponent: Dispatch<SetStateAction<string>>, version: string }) {
    const { data } = GetData(`${GET_MAIN_SIDEBAR_CONTENT}/${version}`, setComponent, true)

    return (
        <div className='bg-blue-light pt-14 space-y-2  min-h-screen'>
            {data?.map((d: string, idx: number) => <Data setComponent={setComponent} key={idx} name={d} component={component} />)}

        </div>
    )
}

function Data({ name = "", component, setComponent }: { name: string, component: string, setComponent: Dispatch<SetStateAction<string>> }) {
    return (
        <div onClick={() => setComponent(name)} className={`w-32 py-2 ${component === name ? "bg-blue-dark shadow-lg" : "bg-blue-light"}`}>
            <p className='p-4 m-auto  w-2 text-center rounded-full bg-[#4E95D9]'></p>
            <button className={`text-black w-full px-10 `}>{name}</button>
        </div>
    )

}