import {NextResponse} from "next/server"

export async function GET (request) {
    return NextResponse.json([
        {
            "id" : 1,
            "name": "Watch"
        },
        {
            "id" : 2,
            "name": "Clock"
        },
    ])
}