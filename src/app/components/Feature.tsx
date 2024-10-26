import React from 'react'
import Dash from './Dash'
import Image from 'next/image'


const Feature = () => {
  return (
    <div>

      <Dash />
<div className='flex items-center justify-center h-screen'>
        <Image className='mt-[290px] max-w-[500px] w-full object-contain'  src="/lava.jpeg"
        width={400}height={600} alt="grid image" />
</div>
        <h2 className=' text-center text-4xl font-bold h-auto mt-10'>Must Try</h2>
        <h2 className='text-center text-4xl font-bold '>Lava
            <span className='text-cyan-500 '> Pizza </span>
        </h2>

        <p className='text-center  text-gray-700'>Overflowing with molten cheese and
             <br /> a brust of bold flavors in every bite!</p>

             <h1 className=' text-center font-extrabold '>Only:1799/-</h1>
        
            <Dash />
        
      <div className='flex items-center justify-center h-screen'>
        <Image className='max-w-full object-contain' src="/veg.jpg"
        width={400}height={400} alt="grid image" />
</div>
        <h2 className=' text-center text-4xl h-auto mt-0  '>Veg
            <span className='text-cyan-500 '> Pizza </span>
        </h2>
        <p className='  
         text-gray-700 text-center '>Healthy and  delicious
         <br /> vegetable flavors in every bite!</p>
         
         <h1 className='font-extrabold text-center'>Only:1299/-</h1>
       
      
            <Dash />
          <div className='flex items-center justify-center h-screen'>
           <Image className='max-w-[500px] w-full object-contain' src="/corn.jpeg"
       width={400}height={600} alt="grid image" />

</div>
<h2 className='text-center font-bold mt-0  text-4xl  h-auto  '>Chicken Fijita
            <span className='text-cyan-500  h-auto  '> Pizza </span>
        </h2>
        <p className=' text-center font-medium 
         text-gray-700 h-auto  m-8'>Healthy and  delicious chicken flavors in  <br />
         every bite! just only </p>
         <h1 className='  font-extrabold text-center'>Only:1499/-</h1> 

</div>
      
    
  )
}

export default Feature
