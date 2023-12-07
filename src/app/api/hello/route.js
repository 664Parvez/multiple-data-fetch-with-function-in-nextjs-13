import {NextResponse} from "next/server"

export async function GET(Request) {
    return NextResponse.json([
        {
            "id": 1,
            "name": "Parvez"
        },
        {
            "id": 2,
            "name": "Rabbi"
        },
        {
            "id": 3,
            "name": "Rubel"
        },
        {
            "id": 4,
            "name": "Thapa"
        },
    ])
}