import Image from "next/image";
import React from "react";
import hero1 from "@/public/home/hero1.png";
import Link from "next/link";

interface smcard {
  title: string;
  author: string;
  img?: string;
  url: string;
  tag: string;
}

function Cardsm(props: smcard) {
  return (
    <div className="flex justify-start items-center h-fit w-full rounded-md gap-6 my-4 dark:bg-white/10 bg-black/10 p-4">
      <div className="flex-none">
        <Image alt="Img" src={hero1} className="h-24 w-24 rounded-full object-cover" />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <div className="px-1 py-[0.12rem] text-base bg-accent/20 rounded-sm w-fit lowercase">
          {props.tag}
        </div>
        <Link href={props.url}>
          <h3 className="text-xl font-semibold font-nunito text-left">{props.title}</h3>
        </Link>
        <div>
          <span className="text-red-600 dark:text-blue-50">{props.author}</span>
        </div>
      </div>
    </div>
  );
}

export default Cardsm;
