import React from 'react'

function Footer() {
  return (
    <div>
     <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Company Name</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>123 Street, City</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
