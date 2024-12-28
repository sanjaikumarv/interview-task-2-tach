/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, JSX, use, useState } from 'react'
import { GetData } from '../Hooks/getdata';
import { Data } from '../Types';

const StateContext = createContext<any>({})

export const useStateContext = () => use(StateContext) || {}

interface SetupFormProps {
    children: JSX.Element | JSX.Element[];
}



interface ApiData {
    [versionKey: string]: {
        [sidebarmainId: string]: Data[]
    }
}
export default function StateProvider({ children }: SetupFormProps) {
    const [version, setVersion] = useState("v_0-1")
    const [component, setComponent] = useState("main-sidebar-001")
    const [element, setElement] = useState("element-A1")
    const elementDatas = ["Example-1", "Example-2", "Example-3", "Example-4"]


    const { data } = GetData<ApiData>(`/helpDocs/${version}/sidebar/${component}`)

    const sidebarData = data?.[version]?.[component] || []

    return (
        <StateContext value={{ version, setVersion, component, setComponent, element, setElement, elementDatas, sidebarData: sidebarData }}>{children}</StateContext>
    )
}
