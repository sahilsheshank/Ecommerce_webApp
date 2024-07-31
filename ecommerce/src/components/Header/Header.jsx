import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function Header({userName}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className='container justify-between mx-auto w-full h-15 flex flex-row border-b-2'>
        <div className='flex justify-center items-center mx-6'>
          <Link to={'/'}><p className='font-bold text-red-500 text-3xl'>E-<span className='text--300'>Shop</span></p></Link>
        </div>
        <div className="hidden md:block">
          <ul className='flex justify-center  items-center'>
            <li className='m-6 text-lg text-black font-medium'><Link to={'/'}>Home</Link></li>
            <li className='m-6 text-lg text-black font-medium'><Link to={'/allproducts'}>All Products</Link></li>
            <li className='m-6 text-lg text-black font-medium'><Link to={'/cart'}>Cart</Link></li>
            <li className='m-6 text-lg text-black font-medium'><Link to={'/contactus'}>Contact Us</Link></li>
          </ul>
        </div>
        <div className='items-center justify-center flex'>
          <ul className='flex items-center gap-4 mx-6'>
            {userName? <li><Link to={'/signup'} className='border-blue-700 border rounded-lg p-2'>Log Out</Link></li>: <li><Link to={'/login'} className='border-blue-700 border rounded-lg p-2'>Log In</Link></li>}
           
            <li><Link to={'/signup'} className='bg-blue-500 rounded-lg p-2'>Sign Up</Link></li>
            <li className='flex items-center gap-2'>
              <img src="noUser.png" className='rounded-full w-8 h-8' alt="" />
              <Link to={'/signup'} className='border-b-2 rounded-lg p-2'>{userName}</Link></li>
            <li className='md:hidden block cursor-pointer' onClick={toggleMenu}>{menuOpen?<RxCross1 size={30}/>:<GiHamburgerMenu size={30} />}</li>
          </ul>
        </div>
      </div>
      {/* Hamburger Menu */}
      {menuOpen && (
        <div className="md:hidden absolute z-10 top-8 right-0 w-full h-screen bg-red-400   border rounded-lg p-4 ">
          <ul>
            <li className='text-lg text-black font-medium my-2 flex justify-center text-white'><Link to={'/'}>Home</Link></li>
            <li className='text-lg text-black font-medium my-2 flex justify-center text-white'><Link to={'/allproducts'}>All Products</Link></li>
            <li className='text-lg text-black font-medium my-2 flex justify-center text-white'><Link to={'/cart'}>Cart</Link></li>
            <li className='text-lg text-black font-medium my-2 flex justify-center text-white'><Link to={'/contactus'}>Contact Us</Link></li>
            <li className='text-lg text-black font-medium my-2 flex justify-center text-white'><Link to={'/login'}>Log In</Link></li>
            <li className='text-lg text-black font-medium my-2 flex justify-center text-white'><Link to={'/signup'}>Sign Up</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
