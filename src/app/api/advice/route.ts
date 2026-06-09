// app/api/advice/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    const categories = ["happiness", "love", "inspirational", "life", "success", "friendship"];
    const random = categories[Math.floor(Math.random() * categories.length)];

    const res = await fetch(`https://api.api-ninjas.com/v2/quotes?category=${random}`, {
        headers: { "X-Api-Key": process.env.API_NINJAS_KEY! },
        cache: "no-store",
    });
    const data = await res.json();
    return NextResponse.json(data[0]);  
}