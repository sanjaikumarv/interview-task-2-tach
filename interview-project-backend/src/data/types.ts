export type SidebarItem = {
    id: string;
    label: string;
};

export type Sidebar = {
    label: string;
    sidebarItems: SidebarItem[];
};

export type Version = {
    label: string;
    [sidebarId: string]: Sidebar | string;
};

export type JSONConfig = {
    [versionKey: string]: Version;
};