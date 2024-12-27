import React, { Dispatch, SetStateAction, useState } from 'react'

export default function SearchBox({ setSearch }: { setSearch: Dispatch<SetStateAction<string>>, search: string }) {
    const [element, setElement] = useState("")
    return (
        <div className='relative'>
            <input value={element} onChange={(e) => setElement(e.target.value)} type="text" placeholder='Search components' className='py-0.5 px-2 border text-blue-medium w-full placeholder:text-blue-medium border-[#4E95D9] rounded-md outline-none' />

            <button className='absolute top-[4.5px] right-2 border-blue-light outline-none bg-blue-light rounded-sm p-1' onClick={() => setSearch(element)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3  text-blue-dark">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>
    )
}
