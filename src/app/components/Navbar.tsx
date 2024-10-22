import React from 'react'
import Image from 'next/image'
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className='w-full bg-cyan-50 shadow-lg shadow-cyan-500/50 '>
    <div className='container pt-6'>
        <div className='flex   '>
        <Image className='' src="/icone2.png" width={50} height={50} alt="logo image" />
        
        
      <ul className='md:flex gap-10  font-semibold  ml-auto p-4 '>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about/">About</Link></li>
       <li><Link href="/pizzaflav">Pizza Flavors</Link></li>
        
        <li><Link href="/contact">Contact</Link></li>
        </ul>
        <button className=' text-black px-6 pb-1 rounded-3xl shadow-lg shadow-cyan-500/50
       
       bg-cyan-400 mb-2 '> <Link href="/signup">Sign Up</Link></button>
       <IoIosMenu className='md:hidden text-cyan-500 size-30' />
          </div>
    </div>
    </nav>
  )
}

export default Navbar
