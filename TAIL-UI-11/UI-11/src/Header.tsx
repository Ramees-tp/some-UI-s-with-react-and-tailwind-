import React from 'react'
import icon1 from '../src/assets/icon/menu.png'
import icon2 from '../src/assets/icon/search.png'
import bg1 from '../src/assets/icon/R.jpeg'

function Header() {
  return (
    <div>
      <div className='sm:flex justify-around  p-2'>
        <div className='flex items-center gap-5'><img src={icon1} alt="" /><h1>SUBSCRIBE</h1></div>
        <div className='text-xl font-semibold'><h1>HEALTHLINE</h1></div>
        <div className='flex items-center'><input className='relative border px-2' type="text" placeholder='Search Headline'/><img className='absolute right-40' src={icon2} alt="" /></div>
      </div>
      <div >
        <h1 className='text-5xl font-bold text-white p-2 '><img src={bg1} alt="" /></h1>
      </div>
      <div className='flex flex-col gap-10 p-5 sm:grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-10 sm:p-20 sm:ml-72'>
        <div>
            <h1 className='text-xl font-bold'>The psychology behind why politics can get so heated-and how to show...</h1>
            <p className='text-xs text-slate-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aperiam amet debitis, ipsum sequi eveniet quaerat esse soluta. Neque, aut.</p>
        </div>
        <div>
            <h1 className='text-xl font-bold'>Brainy Beauty: Can anti-pollution skin care really protect your skin ?</h1>
            <p className='text-xs text-slate-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aperiam amet debitis, ipsum sequi eveniet quaerat esse soluta. Neque, aut.</p>
        </div>
        <div>
            <h1 className='text-xl font-bold'>Holydays During a pandemic: Staying Festive and Connected</h1>
            <p className='text-xs text-slate-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aperiam amet debitis, ipsum sequi eveniet quaerat esse soluta. Neque, aut.</p>
        </div>
        <div>
            <h1 className='text-xl font-bold'>The psychology behind why politics can get so heated-and how to show...</h1>
            <p className='text-xs text-slate-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas aperiam amet debitis, ipsum sequi eveniet quaerat esse soluta. Neque, aut.</p>
        </div>
      </div>
    </div>
  )
}

export default Header
