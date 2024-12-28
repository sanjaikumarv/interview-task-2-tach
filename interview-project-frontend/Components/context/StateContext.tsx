/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, JSX, use, useState } from 'react'
import { GetData } from '../Hooks/getdata';

const StateContext = createContext<any>({})

export const useStateContext = () => use(StateContext)

interface SetupFormProps {
    children: JSX.Element | JSX.Element[];
}


export default function StateProvider({ children }: SetupFormProps) {
    const [version, setVersion] = useState("v_0-1")
    const [component, setComponent] = useState("main-sidebar-001")
    const [element, setElement] = useState("element-A1")
    const elementDatas = ["Example-1", "Example-2", "Example-3", "Example-4"]


    const { data } = GetData(`/helpDocs/${version}/sidebar/${component}`)

    const sidebarComponent = data?.[version]?.[component] || []

    return (
        <StateContext value={{ version, setVersion, component, setComponent, element, setElement, elementDatas, sidebarComponent: sidebarComponent }}>{children}</StateContext>
    )
}
