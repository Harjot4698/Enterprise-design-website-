import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full mx-auto text-center h-screen flex flex-col'> 
        <p className='text-[hsl(161,100%,44%)] font-bold'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>GROW WITH DATA</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold md:py-6'>Fast, flexible financing for</p>
            <Typed  className='px-1 font-bold md:text-4xl sm:text-3xl text-xl md:py-6'
            strings={['BTB','BTC','SASS']} 
            typeSpeed={120} 
            backSpeed={140} 
            loop/>
           
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
        
        <button className='bg-[hsl(161,100%,44%)]  text-black w-[200px] mx-auto mt-6 rounded-md  py-1 font-medium '> Get Started</button>

        </div>
        
    </div>
  )
}

export default Hero;