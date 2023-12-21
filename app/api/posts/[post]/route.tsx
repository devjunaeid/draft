import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { Url, UrlObject } from "url";

// single post req API

export const GET = async (
  req: NextRequest,
  { params }: { params: { post: string } }
) => {
  const { post } = params;

  try {
    const pt = await prisma.post.findUnique({
      where: { slug: post },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(pt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something Went Wrong!!!" }),
      { status: 500 }
    );
  }
};
