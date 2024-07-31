import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/HeroSection'
import { useState } from 'react'
import PopularProducts from '../../components/PopularProducts';
function Home({userName}) {

  
  const[country,setCountry]=useState();
  return (
   <Layout userName={userName}>
        <div className='relative '>
          <div className=''>
            <img src="cover.png" alt="image" className='  top- w-full object-cover object-center h-[100vh]  ' />
          </div>
          <div className='absolute top-[40%] left-[12%]'>
            <h1 className='text-6xl font-bold text-black'>Welcome <span className='text-white font-bold'>{userName}</span>, Let's fill your shopping bag </h1>
            <h2 className='text-2xl font-bold text-gray-700 '></h2>
          </div>
        </div>
        <HeroSection/>
        <PopularProducts/>

        

   </Layout>
  )
}

export default Home
