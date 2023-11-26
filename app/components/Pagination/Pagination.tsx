import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Pagination() {
  return (
    <div className='frm gap-16 mb-4 md:my-8 md:w-2/3 md:justify-evenly px-10'>
        <button className='p-1 md:p-4 bg-accent/40 rounded-full'><IoIosArrowBack size="2rem"/></button>
        <button className='p-1 md:p-4 bg-accent/40 rounded-full'><IoIosArrowForward size="2rem"/></button>
    </div>
  )
}

export default Pagination