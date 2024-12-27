import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import SearchBok from './Inputs/SearchBox'
import { GetData } from './Hooks/getdata'
import { GET_SIDEBAR_CONTENT } from './Endpoint'
import FonelSvg from './Svg/FonelSvg'
import CancelSvg from './Svg/CancelSvg'
import ComponentSvg from './Inputs/ComponentSvg'

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
            <div className='flex justify-between space-x-2'>
                <p className='text-[#4E95D9] font-semibold'>Components</p>
                <CancelSvg />
            </div>
            <div className='flex justify-between'>
                <SearchBok search={search} setSearch={setSearch} />
                <FonelSvg />
            </div>
            <div className='border text-center max-h-[500px] lg:min-h-[500px] overflow-y-scroll rounded-md space-y-2 p-2 border-[#E0EDF8]'>
                {filteredData.map((d, idx) => <Content element={element} setElement={setElement} key={idx} content={d} />)}
            </div>
        </div>
    )
}


function Content({ content, setElement, element }: { setElement: Dispatch<SetStateAction<string>>, content: string, element: string }) {
    return (
        <div onClick={() => setElement(content)} className={`${element === content ? "bg-[#4E95D9] text-white rounded-md" : "text-[#0E2841]"} text-black flex px-2 py-2 space-x-2`}>
            <ComponentSvg />
            {content}
        </div>
    )
}