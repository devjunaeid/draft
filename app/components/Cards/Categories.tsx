import Link from 'next/link'
import React from 'react'

let bgs:{[key:string]:any} = {
  tech: 'bg-blue-300/70',
  sm: 'scale-50 -ml-8',
  md: 'scale-[65%] -ml-6',
  normal: 'scale-0'
} 

function Categories(props:{name:string, size:string}) {
  return (
    <Link href={`/blog?cat=${props.name}`} className={`fcm rounded-md w-fit px-4 py-2 h-16 ${bgs[props.name] || "bg-pri"} ${bgs[props.size]}`}>
        <span className='text-2xl text-txt'>#{props.name}</span>
    </Link>
  )
}

export default Categories