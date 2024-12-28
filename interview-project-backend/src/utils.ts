import { JSONData } from "./data";
import { Sidebar } from "./data/types"

export const getMainSideBarItems = (version: string) => {
    const labels: Record<string, any[]> = {};

    if (JSONData[version]) {
        //  JSONData[version] = get object with perticular version 
        labels[version] = Object.entries(JSONData[version]) // convert object key value pair to array 
            .filter(([key]) => key.includes('main-sidebar')) // Filter the data(value) with perticular key  
            .map(([key, value]: any) => ({
                id: key,
                label: value.label,
            })) // return data for perticular format
    }

    return labels;
};

export const getVersionLabels = () => {
    return Object.keys(JSONData).map((key) => ({ id: key, value: JSONData[key]?.label }))
}

export const getMainElements = (
    version: string,
    mainSideBarId: string
) => {
    const result: Record<string, any> = {};

    const sideBarData = JSONData[version]?.[mainSideBarId] as Sidebar
    if (sideBarData?.sidebarItems) {
        result[version] = {
            [mainSideBarId]: [...sideBarData.sidebarItems],
        };
    }

    return result;
};

