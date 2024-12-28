import React from 'react'
import { GetData } from '../Hooks/getdata'
import { GET_SIDE_BAR_VERSIONS } from '../Endpoint'
import { useStateContext } from '../context/StateContext'
import { Data } from '../Types'



interface ApiData {
    versions: Data[]
}

export default function TextInput() {
    const { version, setVersion } = useStateContext()

    const { data: { versions = [] } = {} } = GetData<ApiData>(GET_SIDE_BAR_VERSIONS)
    return (
        <div className='bg-[#9FC7EB] col-span-6 rounded-md flex p-1'>
            <label className='text-sm px-5 mt-1 text-white' htmlFor="Version">Version</label>
            <select value={version} onChange={(e) => setVersion(e.target.value)} className='w-[150px] outline-none border-none py-1 px-2 rounded-sm text-[#9FC7EB]' name="version" id="version">
                {versions.map((v: Data) => <option key={v.id} value={v.id}>{v.label}</option>)}
            </select>
        </div>
    )
}
