/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { mainContent } from './mydatas'
import SearchBok from './Inputs/SearchBox'

export default function SidebarComponent({ component, element, setElement }: { component: string, element: string, setElement: Dispatch<SetStateAction<string>> }) {
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const mainContentData: any = mainContent.find((c) => c.sideBarName === component)

    useEffect(() => {
        if (search !== "") {
            const filterData = mainContentData?.content.filter((item: string) => item.toLowerCase().includes(search.toLowerCase()))
            return setData(filterData)
        }
        setData(mainContentData?.content)
        setElement(mainContentData?.content[0])

    }, [search, component])

    return (
        <div className='bg-blue-dark space-y-3 py-2 min-h-screen px-2 rounded-md'>
            <div className='flex justify-between px-1'>

                <p className='text-[#4E95D9]'>Components</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4  text-[#4E95D9]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>

            <SearchBok search={search} setSearch={setSearch} />
            {data.map((d, idx) => <Content element={element} setElement={setElement} key={idx} content={d} />)}
        </div>
    )
}


function Content({ content, setElement, element }: { setElement: Dispatch<SetStateAction<string>>, content: string, element: string }) {
    return (
        <div className={`${element === content ? "bg-[#4E95D9] text-white rounded-sm" : "text-[#223C55]"} text-black px-10 flex `}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>

            <button className='ml-2 text-lg' onClick={() => setElement(content)}>{content}</button>
        </div>
    )
}