import { Request } from 'express';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { name: string } }) {
    const { name } = params;

    const mainContent = [
        {
            sideBarName: "A",
            content: ['element-A1', 'element-A2', 'element-A3']
        },
        {
            sideBarName: "B",
            content: ['element-B1', 'element-B2', 'element-B3',]
        },
        {
            sideBarName: "C",
            content: ['element-C1', 'element-C2', 'element-C3',]
        },
        {
            sideBarName: "X",
            content: ['element-X1', 'element-X2', 'element-X3',]
        },
        {
            sideBarName: "Y",
            content: ['element-Y1', 'element-Y2', 'element-Y3']
        },
        {
            sideBarName: "Z",
            content: ['element-Z1', 'element-Z2', 'element-Z3']
        },
    ]
    const filteredData = mainContent.find((item) => item.sideBarName === name)?.content

    return NextResponse.json(filteredData);
}