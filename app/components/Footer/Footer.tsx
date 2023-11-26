import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex flex-col-reverse md:flex-row p-4 justify-between min-w-full bg-accent/30 rounded-t-lg">
      <div className='fcm md:flex-col md:justify-start gap-2 md:gap-8'>
      <h1 className='hidden md:flex text-2xl md:text-4xl font-extrabold'>DRAFT</h1>
        <p className="frm gap-1"><FaRegCopyright />2023 Draft. All rights resarved.</p>
      </div>
      <div className='grid grid-cols-2 text-center md:text-left md:flex flex-col gap-1 my-4 md:justify-start'>
        <h3 className='col-span-2 text-left md:flex text-xl font-semibold'>Links</h3>
        <Link href={"/"}>Home</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/Contact"}>Contact</Link>
      </div>
      <div className='fcm gap-4'>
        <h2 className='text-2xl font-bold'>Follow us on</h2>
        <div className="frm gap-4">
          <Link href="/"><FaSquareFacebook size="2rem" /></Link>
          <Link href="/"><FaSquareXTwitter size="2rem"/></Link>
          <Link href="/"><ImLinkedin size="2rem" /></Link>
          <Link href="/"><FaInstagramSquare size="2rem" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer