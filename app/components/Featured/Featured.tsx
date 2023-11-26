import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

interface ft{
  title: string,
  img: string | undefined,
  dsc: string,
  tag?: string,
  url?: string,
  alt: string
}

function Featured(props: ft) {
  return (
    <div className="mt-16 fcm md:flex-row w-full h-[700px] bg-primary/10 mx-auto gap-6 rounded-lg">
      <Image src={props.img} className='md:w-1/2 h-full object-cover rounded-t-lg md:rounded-l-lg' alt={props.alt}/>
      <div className='fcm gap-4 text-txt p-2'>
        <div className='frm gap-4 w-full'>
        <p className='self-end text-center text-md text-txt bg-accent/20 px-2 py-1 rounded-lg'>Cloud Computing</p>
        <p className='text-xl'>|</p>
        <p className='text-txt'>11-2-24</p>
        </div>
        <h1 className='text-4xl md:text-6xl text-txt text-center font-openSans font-bold'>{props.title}</h1>
        <p className='text-lg md:text-xl text-txt text-center my-4'>{props.dsc}</p>
        <Link href={props.url} className='pb-8 text-primary font-bold hover:scale-150 md:mt-8 frm gap-2 text-[1.2rem]'>Learn More<FaLongArrowAltRight size="1.2rem" /></Link> 
      </div>
    </div>
  )
}

export default Featured