import React, { useState } from 'react'

import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav,setNav]=useState('false');

  const handleNav= ()=>{
    setNav(!nav)
  }
  return (
    <div className=' p-4 flex mx-auto h-24 items-center justify-between max-w-[1240px] text-white' >
        <h1 className='w-full  text-3xl text-[#00df9a] font-bold'>React.</h1>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/> }
          
          </div>
        <div className={!nav ?'fixed left-0 top-0  w-[40%] border-r-gray-900 h-full border-r bg-black ease-in-out duration-500': 'fixed left-[-100%]'}>
            <h1 className=' m-3 w-full  text-3xl text-[#00df9a] font-bold'>React.</h1>
            <ul className='uppercase p-4'>
            <li className='p-4 border-b border-r-gray-500'>Home</li>
            <li className='p-4 border-b border-r-gray-500'>Resources</li>
            <li className='p-4 border-b border-r-gray-500'>About</li>
            <li className='p-4 '>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar