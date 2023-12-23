"use client";
import React, { useState } from "react";
import ThemeSwitch from "../Buttons/ThemeSwitch";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { TbPencilPlus } from "react-icons/tb";
import Link from "next/link";
import Auth from "../Auth/Auth";
import { signOut, useSession } from "next-auth/react";

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
  const {data, status} = useSession();
  const handleClick = () => {
    sethamtog(!hamtog);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-nowrap w-full items-center px-5 md:px-10 py-5 my-2 md:my-5 h-20 rounded-lg bg-secondary">
      <div className="flex-1">
        <Link href={"/"} className="text-2xl md:text-6xl uppercase text-txt font-black tracking-tighter font-poppins">
          Draft
        </Link>
      </div>
      <div className="hidden flex-1 justify-center gap-5 text-txt text-2xl font-raleway uppercase md:flex">
        {links.map((item, key) => (
          <Link key={key} href={item.url}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="hidden flex-1 md:flex items-center justify-end gap-4">
        <ThemeSwitch />
        <Auth status={status}/>
      </div>
      <Link href={(status == "authenticated") ? "/write" : "/login"} className="mx-4 md:hidden"><TbPencilPlus size="1.5em" /></Link>
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
          <div className="text-lg font-bold uppercase">
          {
            (status== "unauthenticated") ? <Link href={"/login"} className="text-lg font-bold uppercase">Sign up/ Log in</Link> : <span onClick={() => signOut()} className="text-lg font-bold uppercase">Log out</span>
          }
          </div>
          <div onClick={handleClick}>
          <IoMdClose size="1.6rem"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
