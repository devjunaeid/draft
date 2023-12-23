import React from "react";
import Categories from "../../components/Cards/Categories";
import Image from "next/image";
import img from "@/public/home/hero1.png";
import Cardsm from "../../components/Cards/Cardsm";

const getdata = async (post: string) => {
  const res = await fetch(`https://draft-9vokpg4lj-devjunaeids-projects.vercel.app/api/posts/${post}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
};

async function page({ params }: { params: { post: string } }) {
  const { post } = params;
  const data = await getdata(post);

  return (
    <div className="fcm w-full gap-8">
      <div className="frm gap-10 w-full h-fit">
        <div className="w-1/3">
          <Image
            src={
              data.img ||
              "https://images.pexels.com/photos/753695/pexels-photo-753695.jpeg"
            }
            width={1440}
            height={1440}
            className="w-full h-[500px] object-cover"
            alt="Post Hero Img"
          />
        </div>
        <div className="w-2/3 flex-col gap-8 justify-start">
          <div className="frm w-full">
            <Categories name={data.catSlag} size="sm" />
            <span className="text-2xl mr-6">|</span>
            <div className="frm gap-2">
              <Image
                src={data.user.image}
                width={440}
                height={440}
                className="w-8 h-8 object-cover rounded-full"
                alt="Post Hero Img"
              />
              <span className="text-xl mr-6">{data.user.name}</span>
              <span className="text-2xl mr-6">|</span>
              <span className="text-xl">
                {data.createAt.substring(0, 10).split("-").reverse().join("-")}
              </span>
            </div>
          </div>
          <h1 className="text:4xl md:text-6xl font-black text-center">
            {data.title}
          </h1>
        </div>
      </div>
      <div className="flex w-full gap-8">
        <div className="flex flex-col w-1/3">
          <h1 className="my-8 text-4xl font-bold">Releted Post</h1>
          <Cardsm
            author="Juaneid"
            img={img.src}
            tag="tech"
            title="Hello world here I come"
            url="/world"
          />
        </div>
        <div
          className="flex flex-col gap-6 text-xl text-justify justify-start p-4 w-2/3"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
        <div className="hidden">{/* future comment section */}</div>
      </div>
    </div>
  );
}

export default page;
