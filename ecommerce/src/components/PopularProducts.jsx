import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './popularCss.css'
function PopularProducts() {
    const [AllProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const getAllProducts = async () => {
            const res = await axios('https://dummyjson.com/products')
            setAllProducts(res.data.products)



        };
        getAllProducts();
    }, [])

    return (

        <>
            <div className='flex flex-col my-10 gap-6'>
                <h1 className='font-bold text-3xl justify-center flex'>Popular products</h1>
                <div className="overflow-x-auto py-4 custom-scrollbar">
                    <div className="flex flex-nowrap space-x-4">
                        {AllProducts.slice(0, 10).map((item) => (
                            <div key={item.id} className="flex-shrink-0 w-64 border-2 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <img alt="ecommerce" className="object-cover object-center w-full h-48 rounded-t-lg" src={item.thumbnail} />
                                <div className="mt-4">
                                    <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">{item.title}</h3>
                                </div>
                                <div className="flex justify-between m-2">
                                    <h2 className="mt-1 font-bold text-black">{item.price} Rs</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>


    )
}

export default PopularProducts
