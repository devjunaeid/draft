import React from "react";
import Post from "../Posts/Post";
import featured from "@/public/featured/fatured.jpg";
import { JsonArray, JsonObject } from "next-auth/adapters";
import Pagination from "../Pagination/Pagination";
import { stringify } from "querystring";
import Card from "./Card";

const ft = {
  title: '"Cloud" The next generation of Computing',
  img: featured,
  dsc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  url: "/",
  alt: "Testing",
};

const getdata = async (pageNumber: number, cat: string) => {
  const res = await fetch(
    `http://127.0.0.1:3000/api/posts?page=${pageNumber}&cat=${cat || ""}`,
    {
      cache: "no-cache",
    }
  );
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
};

async function CardList({ pageNumber, cat }: { pageNumber: string, cat: string }) {
  const page = parseInt(pageNumber);
  const { post, count } = await getdata(page, cat);
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-4 my-8 w-full">
      <div>
        {post?.map((item: any, index: number) => (
          <Card
            title={item.title}
            cover={item.img}
            desc={item.sdesc}
            author={item.user.name}
            date={item.createAt}
            profilePic={item.user.image}
            tag={item.catSlag}
            url={item.slug}
            key={index}
          />
        ))}
      </div>
      <div className="w-full md:col-span-2">
        <Pagination page={pageNumber} prev={hasPrev} next={hasNext} />
      </div>
    </div>
  );
}

export default CardList;
