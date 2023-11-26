"use client";
import React, { useState } from "react";
import ThemeSwitch from "../Theme/ThemeSwitch";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Auth from "../Auth/Auth";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Posts",
    url: "/blog"
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  const [hamtog, sethamtog] = useState(false);
  const handleClick = () => {
    sethamtog(!hamtog);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-nowrap w-full items-center px-5 md:px-10 py-5 my-2 md:my-5 h-20 rounded-lg bg-secondary">
      <div className="flex-1">
        <h1 className="text-2xl md:text-6xl uppercase text-txt font-black tracking-tighter font-poppins">
          Draft
        </h1>
      </div>
      <div className="hidden flex-1 justify-center gap-5 text-txt text-2xl font-raleway uppercase md:flex">
        {links.map((item, key) => (
          <Link key={key} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-end gap-4">
        <ThemeSwitch />
        <Auth />
      </div>
      <div className="md:hidden z-10" onClick={handleClick}>
        <div className="z-50">
          {hamtog ? <IoMdClose size="1.6rem" /> : <RiMenu5Fill size="1.6rem" />}
        </div>
        <div className={(hamtog) ? "fixed bg-secondary text-txt top-24 left-[50%] translate-x-[-50%] min-w-[90%] rounded-lg flex flex-col gap-4 py-4 items-center justify-center z-10" : "hidden"}>
          {links.map((item, key) => (
            <Link key={key} href={item.url} className="px-3 py-2 text-lg font-semibold uppercase">
              {item.title}
            </Link>
          ))}
          <div onClick={handleClick}>
          <IoMdClose size="1.6rem"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
