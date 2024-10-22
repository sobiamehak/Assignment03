import React from 'react'
import Dash from './Dash'
import Image from 'next/image'


const Feature = () => {
  return (
    <div className='container pt-40 ml-40'>
        <h2 className='text-6xl font-bold'>Must Try</h2>
        <h2 className='text-6xl font-bold pt-2'>Lava
            <span className='text-cyan-500'>Pizza</span>
        </h2>
        <p className=' max-w-[550px] pt-10 text-gray-700'>Overflowing with molten cheese and
             <br /> a brust of bold flavors in every bite!</p>
             <h1 className='font-extrabold '>Only:1799/-</h1>
      <Dash />
      <div className='grid md:grid-cols[1fsr,37%,1fr]  mt-0 '>
      <div className='w-fit  self-end'>
        <Image className=' ml-0 w-[100%] max-w-[400px] sm:max-w-full mx-40  shadow-2xl' src="/lava.jpeg"
        width={400}height={800} alt="grid image" />

        <div className='relative'>
            <Dash />
          
        </div>
      <div className='h-auto absolute   '>
        <Image className=' text-center ml-50 md:flex w-[70%] max-w-[600px] sm:max-w-full mx-40  shadow-2xl' src="/veg.jpg"
        width={600}height={800} alt="grid image" />
<div className=' '> 
        <h2 className=' text-6xl  '>Veg
            <span className='text-cyan-500   '>Pizza</span>
        </h2>
        <p className='  
         text-gray-700 mt-7'>Healthy and  delicious
         <br /> vegetable flavors in every bite!</p>
         <h1 className='font-extrabold  '>Only:1299/-</h1>
        </div>
        </div>
      </div>



        <div className='space-y-4'>
            <Dash />

</div>
      </div>
    </div>
  )
}

export default Feature
