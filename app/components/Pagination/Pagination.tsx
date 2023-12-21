"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

// Hay do you thing having under line is a good idea? no i guess not a good idea so what we are going to do in this case?? 

function Pagination({page, prev, next}: {page: string, prev: boolean, next:boolean}) {
  const router = useRouter();
  return (
    <div className='frm min-w-full gap-36 mb-4 justify-between px-10'>
        <button disabled={!prev} onClick={() => router.push(`?page=${parseInt(page) - 1}`)} className='p-1 md:p-4 bg-accent/40 rounded-full disabled:bg-accent/10 disabled:cursor-not-allowed'><IoIosArrowBack size="2rem"/></button>
        <button disabled={!next} onClick={() => router.push(`?page=${parseInt(page) + 1}`)} className='p-1 md:p-4 bg-accent/40 rounded-full disabled:bg-accent/10 disabled:cursor-not-allowed'><IoIosArrowForward size="2rem"/></button>
    </div>
  )
}

export default Pagination