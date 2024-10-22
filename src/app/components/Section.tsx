import React from 'react'
import Image from 'next/image'

const Section = () => {
  return (
    <div className='right-0 h-auto absolute pt-80'>
           <Image className=' h-auto absolute right-10 pt-80  ' src="/corn.jpeg"
       width={400}height={800} alt="grid image" />

<div>
<h2 className=' font-bold mt-0  text-6xl  h-auto  '>Chicken Fijita
            <span className='text-cyan-500  h-auto  '>Pizza</span>
        </h2>
        <p className='font-medium ml-20 
         text-gray-700 h-auto  m-8'>Healthy and  delicious chicken flavors in  <br />
         every bite! just only </p>
         <h1 className='font-extrabold text-center'>Only:1499/-</h1>
</div>
    </div>
  )
}

export default Section
