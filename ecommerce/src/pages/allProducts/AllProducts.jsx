import React from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
function AllProducts({ addToCart }) {
  const [productCategory, setProductCategory] = useState([])
  const [originalProducts, setOriginalProducts] = useState([])
  const [priceRange,setPriceRange]=useState(100)
  const [allProducts, setAllProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios('https://dummyjson.com/products/categories')
      setProductCategory(res.data)

    };
    getProducts();
  }, [])


  useEffect(() => {
    const getAllProducts = async () => {
      const res = await axios('https://dummyjson.com/products')
      setAllProducts(res.data.products)
      setOriginalProducts(res.data.products);


    };
    getAllProducts();
  }, [])

  const filterProducts = (valueCollected) => {

    const data = valueCollected ? originalProducts.filter((item) => (item.category === valueCollected)) : originalProducts
    setAllProducts(data)
  }


  const handleSearch = () => {
       const query = originalProducts.filter((item) => (item.title.toLowerCase().includes(searchedProduct.toLowerCase())))
    setAllProducts(query);
  }


  const rangeCalc=(range)=>{
      setPriceRange(range);
      const filteredPrice=originalProducts.filter((item)=>(item.price<=range))
      setAllProducts(filteredPrice)
  }





  return (
    <Layout>
      <div className='h-full'>
        <div className='w-full flex justify-center flex-col items-center'>
          <select onChange={(e) => filterProducts(e.target.value)} className='my-4 '>

            {productCategory.slice(0, 6).map((category, index) => (
              <option value={category} key={index} className=' bg-red-500 text-white cursor-pointer   m-2 border-solid'>{category}</option>
            ))}

          </select>
          <h1>HERE ARE THE PRODUCTS</h1>
          <div className='flex gap-2 m-4 '>
            <input type="text" placeholder='search products' onChange={(e) => (setSearchedProduct(e.target.value))} className='border p-2 h-10 flex justify-center items-center' />
            <button onClick={handleSearch} className='border-black cursor-pointer p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700 '>Search</button>
          </div>
          <span>Select The Price Range</span>
          <div className='flex m-4'>
          <input type="range" min={100} step={20} max={2000} onChange={(e)=>(rangeCalc(e.target.value))} className='w-70'/><span className='mx-4 px-2 border-2 rounder-lg'>{priceRange}</span>
          </div>

        </div>




        <section className='text-gray-600 body-font'>
          <div className="">
            <div className='flex flex-wrap justify-center gap-4'>
              {allProducts.map((item) => (
                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 m-4 rounded-lg">
                  
                    <Link className="block relative h-48 rounded overflow-hidden" to={`/singleProduct/${item.id}`}>
                    <img  alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail} />
                    </Link>
                  
                  <div className="mt-4">
                    <h3 className="text-gray-700 text-xs tracking-widest title-font mb-1">{item.title}</h3>
                    <h2 className="text-gray-500 title-font text-sm font-medium">{item.description}</h2>


                  </div>
                  <div className='flex justify-between m-2'>

                    <h2 className="mt-1 font-bold text-black">{item.price} Rs</h2>
                    <button onClick={() => (addToCart(item))} className='hover:bg-blue-600 transition-all ease-in-out rounded-lg text-black p-2 bg-blue-500 text-base cursor-pointer'>add to cart</button>
                  </div>

                </div>


              ))


              }

            </div>
          </div>
        </section>




      </div>
    </Layout>
  )
}

export default AllProducts
