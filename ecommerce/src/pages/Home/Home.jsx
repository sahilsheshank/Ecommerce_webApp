import React from 'react'
import Layout from '../../components/Layout/Layout'
import HeroSection from '../../components/HeroSection'
function Home({userName}) {
  
  return (
   <Layout userName={userName}>
        <div className='relative '>
          <div className=''>
            <img src="ecommerce-banner.jpg" alt="image" className=' opacity-70 top- w-full object-cover object-center h-[100vh]  ' />
          </div>
          <div className='absolute top-[40%] left-[20%]'>
            <h1 className='text-6xl font-bold text-black'>Welcome To Our Shopping hub <span className='text-red-600'>{userName}</span></h1>
            <h2 className='text-2xl font-bold text-gray-700 '>All About Men's Apparel</h2>
          </div>
        </div>
        <HeroSection/>
   </Layout>
  )
}

export default Home
