import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { getAuthSession } from "../auth/[...nextauth]/options";
import { NextApiRequest } from "next";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const cat = searchParams.get("cat");
  const POST_NUMBER = 2;
  const getPostQ = {
    take: POST_NUMBER,
    skip: POST_NUMBER * (Number(page) - 1),
    where:{
      ...(cat && {catSlag: cat})
    },
    include: {user: true}
  };
  try {
    const [post, count] = await prisma.$transaction([
      prisma.post.findMany(getPostQ),
      prisma.post.count(
        {where: getPostQ.where}
      ),
    ]);
    return new NextResponse(JSON.stringify({post, count}), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something Went Wrong!!!" }),
      { status: 500 }
    );
  }
};

// Create a post
export const POST = async (req:NextRequest) => {
  const session = await getAuthSession();
  if(!session){
    return new NextResponse(
      JSON.stringify({message: "Not authenticated!!!"}), {status: 401}
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: {...body, userEmail: session?.user?.email},
    });
    return new NextResponse(JSON.stringify(post) , { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something Went Wrong!!!" }),
      { status: 500 }
    );
  }
}