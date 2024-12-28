import { JSONData } from "./data";
import { Sidebar } from "./types"

export const getMainSideBarItems = (version: string) => {
    const labels: Record<string, any[]> = {};

    if (JSONData[version]) {
        labels[version] = Object.entries(JSONData[version])
            .filter(([key]) => key.includes('main-sidebar'))
            .map(([key, value]: any) => ({
                id: key,
                label: value.label,
            }))
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

