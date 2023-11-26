import React from 'react'
import Cardsm from '../components/Cards/Cardsm'
import img from '@/public/featured/fatured.jpg'
import Post from '../components/Posts/Post'

function page() {
  return (
    <div className='flex w-full gap-16'>
      <div className='w-2/3 mb-8 gap-4'>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
      </div>
      <div className='w-1/3'>
        <Cardsm author='Junaeid' img={img} title='Hello 123' url='/' tag='tech'/>
      </div>
    </div>
  )
}

export default page