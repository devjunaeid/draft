import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        const cat = await prisma?.category.findMany();
        return new NextResponse(JSON.stringify(cat, {status: 200}))
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({message:"Something Went Wrong!!!"}, {status: 500})
        );
    }
}