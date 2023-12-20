import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";


// single post req API


export const GET = async (req: NextRequest, {params}) => {

  const {post} = params

  try {

    const pt = await prisma.post.findUnique({
      where: {slug: post},
      include: {user: true}
    })
    return new NextResponse(JSON.stringify(pt), { status: 200 });

  } catch (error) {

    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something Went Wrong!!!" }),
      { status: 500 }
    );

  }
};
