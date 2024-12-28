import React from 'react'
import VersionDropDown from './Inputs/VersionDropDown'

export default function Header() {
    return (
        <div className='p-5 bg-blue-light flex justify-between'>
            <div className='flex space-x-8'>
                <p className='bg-[#110FA7] p-5 rounded-full'></p>
                <p className='text-[#100EAB] font-semibold mt-2'>Cogniyon</p>
                <p className='text-black mt-2'>logo</p>
            </div>
            <VersionDropDown />
        </div>
    )
}
