import React from 'react'

export default function Footer() {
    return (
       
        <div className="relative min-h-screen">
  

  <footer className="bg-cyan-800 text-black py-8 absolute bottom-0 left-0 right-0">
    <div className="container mx-auto flex flex-col md:flex-row justify-between">
      <div className="mb-4 md:mb-0">
        <h2 className="text-xl font-bold">Pizza Paradise</h2>
        <p className="mt-2">Freshly baked pizza delivered to your door!</p>
      </div>
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">Quick Links</h3>
        <ul className="mt-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>
      <div className="mb-4 md:mb-0">
        <h3 className="text-lg font-semibold">Follow Us</h3>
        <ul className="mt-2 flex space-x-4">
          <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-6">
      <p className="text-gray-400">&copy; 2024 Pizza Paradise. All rights reserved.</p>
    </div>
  </footer>
</div>


     
    );
  }