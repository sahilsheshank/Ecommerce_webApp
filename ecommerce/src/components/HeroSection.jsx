import React from 'react'
import { FaShoppingCart,FaShippingFast,FaBackspace  } from "react-icons/fa";

function HeroSection() {
    return (
        <div>
            <div className='flex w-full flex-wrap w-full justify-around'>
                <div className='flex flex-col items-center m-4 p-4 bg-red-400 rounded-xl font-bold cursor-pointer w-1/4'>
                    <FaShippingFast size={25}/>
                    <h2 className='text-lg'>Free Shipping</h2>
                </div>
                <div className='flex flex-col items-center m-4 p-4 bg-red-400 rounded-xl font-bold cursor-pointer w-1/4'>
                    <FaShoppingCart size={25}/>
                    <h2 className='text-lg'>Authentic Products</h2>
                </div>
                <div className='flex flex-col items-center m-4 p-4 bg-red-400 rounded-xl font-bold cursor-pointer w-1/4'>
                    <FaBackspace size={25}/>
                    <h2 className='text-lg'>Easy Returns</h2>
                </div>
               
                
            </div>
        </div>
    )
}

export default HeroSection
