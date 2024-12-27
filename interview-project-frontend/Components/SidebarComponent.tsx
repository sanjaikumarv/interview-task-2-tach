import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import SearchBok from './Inputs/SearchBox'
import { GetData } from './Hooks/getdata'
import { GET_SIDEBAR_CONTENT } from './Endpoint'

export default function SidebarComponent({ component, element, setElement }: { component: string, element: string, setElement: Dispatch<SetStateAction<string>> }) {
    const [search, setSearch] = useState("")
    const [filteredData, setFilteredData] = useState([""])
    const { data } = GetData(`${GET_SIDEBAR_CONTENT}/${component}`, setElement, true)

    function filter() {
        const filtededData = data.filter((item: string) => item.toLowerCase().includes(search.toLowerCase()))
        return setFilteredData(filtededData)
    }

    useEffect(() => {
        if (search !== "") {
            return filter()
        }
        setFilteredData(data)
    }, [search, data[0]])



    return (
        <div className='bg-blue-medium min-h-[80vh] col-start-2 col-end-4 -ml-1 space-y-3 py-2  px-3 rounded-md'>
            <div className='flex justify-between px-1'>
                <p className='text-[#4E95D9] font-semibold'>Components</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4  text-[#4E95D9]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <SearchBok search={search} setSearch={setSearch} />
            <div className='border text-center max-h-[500px] lg:min-h-[500px] overflow-y-scroll rounded-md space-y-2 px-2 py-2 border-[#E0EDF8]'>
                {filteredData.map((d, idx) => <Content element={element} setElement={setElement} key={idx} content={d} />)}
            </div>
        </div>
    )
}


function Content({ content, setElement, element }: { setElement: Dispatch<SetStateAction<string>>, content: string, element: string }) {
    return (
        <div className={`${element === content ? "bg-[#4E95D9] text-white rounded-md" : "text-[#0E2841]"} text-black flex px-2 py-2 space-x-2`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg>

            <button className='border-none outline-none text-sm' onClick={() => setElement(content)}>{content}</button>
        </div>
    )
}