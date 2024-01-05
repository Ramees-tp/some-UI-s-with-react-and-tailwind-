import React from 'react'
import img from '../src/assets/OIP.jpeg'

function Header() {
  return (
    <div className='flex items-center justify-center md:p-20 md:px-52'style={{background:`url(${img})`}}>
      <div className='md:flex '> 
        <div className='bg-blue-200 p-20 space-y-10 text-center '>
            <h1 className='font-bold text-3xl'>Hello,friend!</h1>
            <div className='space-y-5'>
            <input className='border rounded-3xl md:pr-20 p-2' type="text" placeholder='Name'/><br />
            <input className='border rounded-3xl md:pr-20 p-2' type="text" placeholder='E-mail'/><br />
            <input className='border rounded-3xl md:pr-20 p-2' type="text" placeholder='Password'/>
            </div>
            <button className='bg-blue-700 text-white font-medium rounded-2xl p-2 px-8 text-sm'>CREATE ACCOUNT</button>
        </div>
        <div className='bg-blue-600 text-white p-20 flex flex-col gap-10 text-center items-center justify-center'>
            <h1 className='font-semibold text-4xl'>Glad to see You!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero maiores, nulla.</p>
        </div>
      </div>
    </div>
  )
}

export default Header
