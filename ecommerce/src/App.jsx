import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Toaster } from 'react-hot-toast';

import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from './pages/Home/Home';
import AllProducts from './pages/allProducts/AllProducts';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Firebase-auth';
import SingleProduct from './pages/singleProduct/SingleProduct';
function App() {

 











  
  const[cart,setCart]=useState([]);
  const[userName,setUserName]=useState('');


  const decrease=(cartItem)=>{
    const decreasedCount=cart.map((item)=>(
      item.id===cartItem.id && item.quantity>0? {...item,quantity:item.quantity-1}:item
    ))
    setCart(decreasedCount);
  }
  const increase=(cartItem)=>{
    const increasedCount=cart.map((item)=>(
      item.id===cartItem.id ? {...item,quantity:item.quantity+1}:item
    ))
    setCart(increasedCount);
  }
  const total=()=>{
    const totalAmount=cart.reduce((total,element)=>{
      return (total+element.price*element.quantity); 
    },0);
    return totalAmount;
    

  }

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName('');
      }
    })
  },[])

  const addToCart=(product)=>{
    
    const repeatedItem=cart.find((item)=>item.id===product.id)
    if(repeatedItem){
      const updatedItem=cart.map((item)=>(
      item.id===product.id ? {...item,quantity:item.quantity+1}:item
      
      ))
      setCart(updatedItem)
      
      
    }
    else{
      setCart([...cart,{...product,quantity:1}]);
    }
    
  }

  const removeProduct=(product)=>{
    setCart(cart.filter((item)=>(
      product.id!==item.id
    )))
  }

  const singleProduct=(product)=>{


  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<Home userName={userName} />}/>
          <Route path='allproducts' element={<AllProducts addToCart={addToCart} />}/>
          <Route path='cart' element={<Cart cart={cart} removeProduct={removeProduct} total={total} decrease={decrease} increase={increase}/>}/>
          <Route path='contactus' element={<Contact/>}/>
          <Route path='singleProduct/:productId' element={<SingleProduct addToCart={addToCart}/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      </Router>
      <Toaster/>
    </>
  )
}

export default App
