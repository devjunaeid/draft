import React from 'react'
import Cardsm from '../components/Cards/Cardsm'
import img from '@/public/featured/fatured.jpg'
import Post from '../components/Posts/Post'
import profilepic from '@/public/post/author.jpg';
import cover from '@/public/post/cover.jpg';
import Card from '../components/Cards/Card';
import CardList from '../components/Cards/CardList';

const des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui voluptates quae ratione vel voluptas quod repellat explicabo eius consequatur perspiciatis eum aspernatur adipisci pariatur, temporibus vitae iste in expedita." 

function page({
  searchParams,
}: {
  searchParams: {
    query: string;
    page: string;
    cat: string;
  };
}) {

  const currentPage = searchParams.page || "1";
  const { cat }= searchParams;
  return (
    <div className='flex w-full gap-16'>
      <div className='w-full md:w-2/3 mb-8 gap-4'>
        <CardList pageNumber={currentPage} cat={cat}/>
      </div>
      <div className='hidden justify-center items-start md:flex md:w-1/3'>
        <Cardsm author='Junaeid' img={img} title='Hello 123' url='/' tag='tech'/>
      </div>
    </div>
  )
}

export default page