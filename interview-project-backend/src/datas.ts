


// /helpDocs/versions / { versionId }


// GET / helpDocs / main - sidebar / { versionId }

// [
//     { id, label },
//     { id, label },
//     { id, label },
//     { id, label },
// ]

// GET / helpDocs / { versionId } / sidebar / { id }

export const versions = [
    { id: 1, label: "0.1" },
    { id: 2, label: "0.2" },
]

export const mainSideBar = [
    {
        id: 1,
        versionId: 1,
        label: "A"
    },
    {
        id: 2,
        versionId: 1,
        label: "B"
    },
    {
        id: 3,
        versionId: 1,
        label: "C"
    },
    {
        id: 4,
        versionId: 1,
        label: "X"
    },
    {
        id: 5,
        versionId: 1,
        label: "Y"
    },
    {
        id: 6,
        versionId: 1,
        label: "X"
    },
]

export const sideBar = [
    {
        id: 1,
        sideBarId: 1
    }
]

export const sideBarItems = [
    {
        verisonName: "0.1",
        sideBarElements: ["A", "B", "C"]
    },
    {
        verisonName: "0.2",
        sideBarElements: ["X", "Y", "Z"]

    }
]
export const mainContent = [
    {
        sideBarName: "A",
        content: ['Element-A1', 'Element-A2', 'Element-A3']
    },
    {
        sideBarName: "B",
        content: ['Element-B1', 'Element-B2', 'Element-B3']
    },
    {
        sideBarName: "C",
        content: ['Element-C1', 'Element-C2', 'Element-C3']
    },
    {
        sideBarName: "X",
        content: ['Element-X1', 'Element-X2', 'Element-X3',]
    },
    {
        sideBarName: "Y",
        content: ['Element-Y1', 'Element-Y2', 'Element-Y3']
    },
    {
        sideBarName: "Z",
        content: ['Element-Z1', 'Element-Z2', 'Element-Z3']
    },
]
