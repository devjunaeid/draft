import React from "react";
import hero1 from "../../../public/home/hero1.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { MdCardTravel } from "react-icons/md";
import { IoCloud } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex flex-col my-10 w-full h-fit">
      <div className="flex">
        <h1 className="text-center md:text-left text-6xl md:text-8xl text-txt font-raleway font-black mb-16">
          Writing Free,
          <br /> Sharing with the world.
        </h1>
      </div>
      <div className="fcm md:flex-row w-full gap-10">
        <div className="relative w-full max-h-[450px]">
          <Image
            src={hero1}
            className="w-full h-[450px] rounded-lg object-cover"
            alt=""
          />
          <div className="absolute inset-0 w-full h-full flex flex-col justify-end items-start px-10 bg-black/60 rounded-lg">
            <h1 className="text-2xl font-raleway font-black text-white">
              Welcome to DRAFT!
            </h1>
            <p className="text-lg text-white text-left mt-4">
              Hey there, I'm Juaneid, and this is my digital space – DRAFT.
              Here, I embark on a journey through the realms of technology,
              share personal experiences, dive into the world of software
              development, explore the wonders of AI, and reflect on social
              dynamics.
            </p>
            <Link href={"/about"} className="frm gap-1 text-white text-xl font-bold my-8">
              Learn More<MdOutlineArrowOutward size="1.6rem" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center">
          <h1 className="text-center text-2xl font-thin italic font-poppins mb-4 text-txt"><span className="p-2 underline underline-offset-2 hover:bg-blue-700">#writing</span>about</h1>
          <div className="w-full grid grid-rows-3 grid-flow-col gap-y-8 gap-x-5">
            <div className="text-lg md:text-2xl py-2 md:py-4 rounded-md row-span-2 fcm text-txt font-bold uppercase bg-accent/30"><GrTechnology size="2.2rem" /> Tech</div>
            <div className="text-lg md:text-2xl py-2 md:py-4 rounded-md fcm text-txt font-bold uppercase bg-accent/30"><RiRobot2Fill size="2.8rem" />AI</div>
            <div className="text-lg md:text-2xl py-2 md:py-4 rounded-md fcm text-txt font-bold uppercase bg-accent/30"><MdCardTravel size="2.8rem" />Travel</div>
            <div className="text-lg md:text-2xl py-2 md:py-4 rounded-md row-span-2 fcm text-txt text-center font-bold uppercase bg-accent/30"><IoCloud size="2.8rem" />Cloud <br />Computing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
