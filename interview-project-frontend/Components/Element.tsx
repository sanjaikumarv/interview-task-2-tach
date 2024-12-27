"use client"
import React, { useState } from 'react'

export default function Element({ element }: { element: string }) {

    const elementDatas = ["Example-1", "Example-2", "Example-3", "Example-4"]

    const [currentElement, setCurrentElement] = useState("Example-1")
    return (
        <div className='bg-white p-4 col-start-4 col-end-13 text-black'>
            <p className=' text-xl font-semibold text-[#215F9A]'> : {element}</p>
            <div className='flex space-x-4 px-3'>
                {elementDatas.map((d, idx) => <button onClick={() => setCurrentElement(d)} key={idx} className={`text-[#AACDED] ${currentElement === d && "text-[#27639E] border-b-4 py-2 border-[#23619C]"}`}>{d}</button>)}
            </div>
            <p className='p-5 min-h-[73vh] -mt-[2.5px] border-[#9FC7EB] rounded-md text-[#23619C] border w-full'>component usage {currentElement}</p>
        </div>
    )
}
