"use client"
import React, { useState } from 'react'

export default function Element({ element }: { element: string }) {

    const elementDatas = ["Example-1", "Example-2", "Example-3", "Example-4"]

    const [currentElement, setCurrentElement] = useState("Example-1")
    return (
        <div className='bg-white p-4 text-black min-h-screen'>
            <p className=' text-xl  text-[#145593]'>{element}</p>
            <div className='flex space-x-4 px-4'>
                {elementDatas.map((d, idx) => <button onClick={() => setCurrentElement(d)} key={idx} className={`text-[#AACDED] ${currentElement === d ? "text-[#376FA4] border-b-2 py-2 border-[#145593]" :"text-[#AACDED]"}`}>{d}</button>)}
            </div>
            <p className='p-5 border-[#AACDED] min-h-[60vh] rounded-md text-[#145593] border min-w-[800px]'>component usage {currentElement}</p>
        </div>
    )
}
