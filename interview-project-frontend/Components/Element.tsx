/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import { useStateContext } from './context/StateContext'

export default function Element() {
    const { element, elementDatas, sidebarComponent } = useStateContext()

    const elementName = sidebarComponent.find((e: any) => element === e.id)?.label
    const [currentElement, setCurrentElement] = useState("Example-1")
    return (
        <div className='bg-white p-4 col-start-4 col-end-13 text-black'>
            <p className=' text-xl font-semibold text-[#215F9A]'> : {elementName}</p>
            <div className='flex space-x-4 px-3'>
                {elementDatas.map((d: string, idx: number) => <button onClick={() => setCurrentElement(d)} key={idx} className={`text-[#AACDED] hover:cursor-pointer ${currentElement === d && "text-[#27639C] border-b-4 py-2 border-[#23619C]"}`}>{d}</button>)}
            </div>
            <p className='p-5 min-h-[73vh] -mt-[2.5px] border-[#9FC7EB] rounded-md text-[#23619C] border w-full'>component usage {currentElement}</p>
        </div>
    )
}
