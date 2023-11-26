import React from 'react'

let bgs:{[key:string]:any} = {
  tech: 'bg-blue-300/70',
  sm: 'scale-50 -ml-8',
  md: 'scale-[65%] -ml-6',
  normal: 'scale-0'
} 

function Categories(props:{name:string, size:string}) {
  return (
    <div className={`fcm rounded-md px-4 py-2 w-36 h-16 ${bgs[props.name] || "bg-lime-400"} ${bgs[props.size]}`}>
        <span className='text-2xl text-txt'>#{props.name}</span>
    </div>
  )
}

export default Categories