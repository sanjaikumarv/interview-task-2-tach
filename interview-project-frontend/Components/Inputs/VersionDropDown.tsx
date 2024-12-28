import React, { Dispatch, SetStateAction } from 'react'
import { GetData } from '../Hooks/getdata'
import { GET_SIDE_BAR_VERSIONS } from '../Endpoint'

interface Data {
    id: string,
    value: string
}

export default function TextInput({ version, setVersion }: {
    version: string,
    setVersion: Dispatch<SetStateAction<string>>

}) {
    const { data = [] } = GetData(GET_SIDE_BAR_VERSIONS)

    return (
        <div className='bg-[#9FC7EB] col-span-6 rounded-md flex p-1'>
            <label className='text-sm px-5 mt-1 text-white' htmlFor="Version">Version</label>
            <select value={version} onChange={(e) => setVersion(e.target.value)} className='w-[150px] outline-none border-none py-1 px-2 rounded-sm text-[#9FC7EB]' name="version" id="version">
                {data.map((v: Data) => <option key={v.id} value={v.id}>{v.value}</option>)}
            </select>
        </div>
    )
}
