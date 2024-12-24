import React, { Dispatch, SetStateAction } from 'react'
import { versions } from '../mydatas'
export default function TextInput({ version, setVersion }: {
    version: string,
    setVersion: Dispatch<SetStateAction<string>>

}) {

    return (
        <div className='bg-[#9FC7EB] col-span-6 rounded-sm flex p-1'>
            <label className='text-sm px-5 mt-1' htmlFor="Version">Version</label>
            <select value={version} onChange={(e) => setVersion(e.target.value)} className='w-[150px] py-1 rounded-sm text-[#9FC7EB]' name="version" id="version">
                {versions.map((v: string, idx: number) => <option key={idx} value={v}>{v}</option>)}
            </select>
        </div>
    )
}
