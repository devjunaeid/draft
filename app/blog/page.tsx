import React from 'react'
import Cardsm from '../components/Cards/Cardsm'
import img from '@/public/featured/fatured.jpg'
import Post from '../components/Posts/Post'
import profilepic from '@/public/post/author.jpg';
import cover from '@/public/post/cover.jpg';
import Card from '../components/Cards/Card';

const des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui voluptates quae ratione vel voluptas quod repellat explicabo eius consequatur perspiciatis eum aspernatur adipisci pariatur, temporibus vitae iste in expedita." 

function page() {
  return (
    <div className='flex w-full gap-16'>
      <div className='w-full md:w-2/3 mb-8 gap-4'>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Post title='Hello 123' alt='demo' date='11-11-23' dsc='Testing all at once' img={img} url='/' tag='gg'/>
        <Card author="Junaeid" cover={cover} date='22-10-19' desc={des} profilePic={profilepic} tag='tech' title='Winter- The harsh reality in middle to lower class family.' url='/blogs'/>
      </div>
      <div className='hidden justify-center items-start md:flex md:w-1/3'>
        <Cardsm author='Junaeid' img={img} title='Hello 123' url='/' tag='tech'/>
      </div>
    </div>
  )
}

export default page