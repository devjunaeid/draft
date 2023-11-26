import Image from "next/image";
import Link from "next/link";
import React from "react";
import Categories from "./Categories";

interface crd {
  author: string;
  profilePic: string;
  tag: string;
  date: string;
  title: string;
  cover: string;
  desc: string;
  url: string;
}

function Card(props: crd) {
  return (
    <div className="p-2 w-full h-fit md:h-[600px]">
      <div className="relateive fcm md:flex-row gap-10 bg-secondary rounded-md">
        <div className="w-full md:block md:py-6 md:-ml-4">
          <Image
            src={props.cover}
            alt="cover"
            className="w-full md:min-w-1/2 h-[300px] md:h-[450px] object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center md:justify-start gap-2 md:gap-4">
          <div className="flex justify-center flex-col-reverse md:flex-col md:justify-start">
            <div className="flex justify-center md:justify-start items-center">
              <Categories name={props.tag} size="sm" /><span className="mr-6">|</span>
              <span>{props.date}</span>
            </div>
            <div className="flex justify-center md:justify-start items-center">
              <div className="absolute -mt-24 md:-ml-[70px] md:-mt-0">
                <Image
                  src={props.profilePic}
                  alt={props.author}
                  className="w-14 h-14 object-cover rounded-full border-4 border-accent"
                />
              </div>
              <h3 className="text-lg -mt-[12px] md:mt-0 md:text-xl font-bold">{props.author}</h3>
            </div>
          </div>
          <div className="px-2 pb-4 text-center md:text-left md:p-0 md:pr-6">
            <h1 className="text-xl md:text-2xl font-semibold mb-4">{props.title}</h1>
            <p className="line-clamp-3 text-base md:text-lg font-medium">
              {props.desc}
            </p>
            <Link href={props.url} className="flex justify-center md:justify-start mt-4 font-bold">
                Read more
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
