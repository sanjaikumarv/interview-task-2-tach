import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    const { id } = params; // Extract `id` from the URL
    console.log("id", id)
    // Example response
    const userData = { id, name: "John Doe", age: 30 };

    return NextResponse.json(userData);
}

export async function DELETE(request, { params }) {
    const { id } = params; // Extract `id` from the URL

    // Example delete logic
    return NextResponse.json({ message: `User with id ${id} deleted.` });
}
