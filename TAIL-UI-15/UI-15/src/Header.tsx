import React from 'react'
import img from '../src/assets/old.jpeg'

function Header() {
  return (
    <div className='px-20 pt-5'>
      <div className='lg:px-32'>
        <div className='p-16  bg-gray-300'>
            <nav>
                <ul className='text-center sm:flex justify-between'>
                    <li>DD.</li>
                    <div className='md:flex gap-10'>
                        <li className='text-red-700'>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>My Work</li>
                        <li>Contact</li>
                    </div>
                </ul>
            </nav>
            <div className='pt-20 space-y-8 flex flex-col-reverse justify-center items-center sm:flex sm:flex-row gap-10 sm:justify-between'>
                <div className='space-y-5 max-w-[50%]'>
                    <p className='text-xs'>Hello My Name is </p>
                    <h1 className='font-bold text-5xl'>Daisy Dalton</h1>
                    <p className='text-xs'>From Kondotty</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quasi maxime nemo, harum incidunt velit, sint, quisquam ea ipsum nisi earum. A tempore delectus, earum doloribus eos quas tempora ut.</p>
                    <div className='space-y-5 sm:space-x-8'>
                        <button className='text-white bg-red-600 text-xs p-2 px-4'>My Website</button>
                        <button className='text-red-600 font-bold border-2 border-red-600 text-xs p-2 px-4'>Click Here</button>
                    </div>
                </div>
                <div className=''>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
