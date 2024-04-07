import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from 'react-router-dom'
function Cart({ cart,total,decrease,increase,removeProduct }) {

  return (
    <Layout>
      <div className="h-full  bg-gray-100 pt-10">
        <h1 className="mb-10 text-center text-2xl font-bold">{cart.length} Cart Items</h1>
       
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
          {cart.map((cartItem)=>(
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={cartItem.thumbnail} alt="product-image" className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">{cartItem.title}</h2>
                  <p className="mt-1 text-xs text-gray-700">{cartItem.description}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>(decrease(cartItem))}> - </span>
                    <h3>{cartItem.quantity}</h3>
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>(increase(cartItem))}> + </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{cartItem.price}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>(removeProduct(cartItem))} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
              
            </div>
          ))}
           
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{total()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">80 Rs</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{total()+80}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            <button className="mt-6 w-full rounded-md text-blue-500 py-1.5 font-medium text-blue-50 hover:text-blue-600" ><Link to={'/allproducts'}>Continue Shopping</Link></button>
          </div>
        </div>
        
      </div>
    </Layout>

  )
}

export default Cart
