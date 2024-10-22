import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

const Hero = () => {
  return (
    
    <div className='relative min-h-screen' >
      
        <Image className='lg:w-[680px] xl:w-[520px] h-auto absolute right-10 top-20 
        -z-10 mt-10 rounded-full ' src="/largep.avif"
         width={600} height={600} alt='hero bg '/>
        <Navbar />
         <div className='container h-[calc(100vh-120px)] grid items-center'>
            <div className='space-y-8  w-fit p-10 m-20 mt-40 '>
                <p className='uppercase font-medium text-black'>wide options of choice</p>
                <h2 className='text-4xl sm:text-6xl font-bold'>
                    Ideal <span className='text-cyan-400'>Pizza</span>
                    </h2>
                    <p className='text-gray-700 text-[14px] sm:[16px]'>crafted with love ,baked to perfection! 
                        <br /> what are you waiting for?</p>
                        <button className='bg-cyan-500 px-10 py-4 rounded-3xl text-[14px] sm:text[16px] shadow-lg shadow-cyan-500/50'> Order Now</button>
            </div>
         </div>
    </div>


  )
}

export default Hero
