import React from 'react'
import laptop from './laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'> 
        <img classNam='max-w-[800px] mx-auto my-4 ' src={laptop} alt="/"/>
        <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt nemo, illum pariatur ullam eos voluptate ratione repellat voluptatibus sint aut corporis minima ipsam, obcaecati qui nostrum cumque fugit maiores!</p>
        <button className='bg-black  text-white w-[200px] mx-auto mt-6 rounded-md  py-1 font-medium md:m-2 '> Get Started</button>

        </div>
        

        </div>
    </div>
  )
}

export default Analytics