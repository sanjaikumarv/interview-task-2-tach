import React, { Dispatch, SetStateAction, useState } from 'react'

export default function SearchBok({ setSearch }: { setSearch: Dispatch<SetStateAction<string>>, search: string }) {

    const [element, setElement] = useState("")
    return (
        <div className='relative'>
            <input value={element} onChange={(e) => setElement(e.target.value)} type="text" className='border-2 border-[#4E95D9] rounded-sm outline-none' />
            <button className='absolute top-1 right-1' onClick={() => setSearch(element)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-[#4E95D9]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    )
}
