import { Request } from 'express';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { version: string } }) {
    const { version } = params;

    const sideBarItems = [
        {
            verisonName: "0.1",
            sideBarElements: ["A", "B", "C"]
        },
        {
            verisonName: "0.2",
            sideBarElements: ["X", "Y", "Z"]

        }
    ]

    const filteredData = sideBarItems.find((item) => item.verisonName === version)?.sideBarElements

    return NextResponse.json(filteredData);
}