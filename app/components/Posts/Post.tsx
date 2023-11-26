import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface post {
  date: string;
  title: string;
  img: string | undefined;
  dsc: string;
  tag?: string;
  url?: string;
  alt: string;
}

function Post(props: post) {
  return (
    <div className="bg-accent/25 backdrop-blur-sm mb-6 p-2 md:p-4 rounded-lg">
      <Image src={props.img} className="w-full h-24 md:h-56 rounded-lg object-cover" />
      <div className="frm gap-4 w-full my-2 md:my-4">
        <p className="text-center text-base text-txt bg-accent/20 px-2 py-1 rounded-lg">
          {props.tag}
        </p>
        <p className="text-lg">|</p>
        <p className="text-txt text-lg">{props.date}</p>
      </div>
      <h3 className="text-xl text-center md:text-2xl text-txt font-bold my-2">{props.title}</h3>
      <p className="text-center text-base tracking-tight leading-none subpixel-antialiased md:text-lg">{props.dsc}</p>
      <Link href={props.url} className='mt-2 md:my-4 text-txt self-start font-bold frm gap-2 text-lg'>Learn More <FaLongArrowAltRight size="1.2rem" /></Link>
    </div>
  );
}

export default Post;
