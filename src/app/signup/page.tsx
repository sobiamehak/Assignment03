import React from 'react'
import Navbar from '../components/Navbar'

const Signup = () => {
  return (
    <div>
        <Navbar />
    <form>
       <h1 className='border border-gray-600 p-4  rounded-md  text-center'>Name</h1>
       <h1 className='border border-gray-600 p-4  rounded-md  text-center'>location</h1>
       <h1 className='border border-gray-600 p-4  rounded-md  text-center'>sign up</h1>
    </form>
    </div>
  )
}

export default Signup