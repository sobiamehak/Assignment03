import React from 'react'
import Image from 'next/image'
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className='w-full  bg-cyan-50 shadow-lg shadow-cyan-500/50 '>
    <div className='container pt-5'>
        <div className='flex justify-between items-center  '>
        <Image className='' src="/icone2.png" width={50} height={50} alt="logo image" />
        
        
      <ul className='md:flex hidden gap-8 items-center  font-semibold  ml-auto p-4 '>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about/">About</Link></li>
       <li><Link href="/pizzaflav">Pizza Flavors</Link></li>
        
        <li><Link href="/contact">Contact</Link></li>
          <button className='  text-black px-6 py-2 rounded-3xl  shadow-lg shadow-cyan-500/50
       
       bg-cyan-400 '> <Link href="/signup">Sign Up</Link></button>
        </ul>
       
       <IoIosMenu className='md:hidden text-cyan-500 size-30' />
          </div>
    </div>
    </nav>
  )
}

export default Navbar
