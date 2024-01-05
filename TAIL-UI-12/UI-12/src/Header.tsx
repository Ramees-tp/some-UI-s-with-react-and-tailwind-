import React from 'react'
import m1 from '../src/assets/img/m1.jpeg'
import im1 from '../src/assets/img/kargil.jpeg'
import im2 from '../src/assets/img/store.jpeg'
import im3 from '../src/assets/img/chang la pass.jpeg'
import im4 from '../src/assets/img/lake.jpeg'

function Header() {
  return (
    <div>
      <div className='bg-cover grayscale-[40%] px-5 pb-4'style={{backgroundImage:`url(${m1})`}}>
        <nav className='text-white  px-0 p-6 flex justify-between'>
            <ul className='ml-10 sm:flex gap-10 font-semibold'>
                <li>Home</li>
                <li>Destination</li>
                <li>About</li>
                <li>Plan Your Trip</li>
            </ul>
            <h1 className='font-bold'>traavel <span className='text-yellow-600'>.</span></h1>
        </nav>
       <div>
       <div className='  space-y-5'>
            <h1 className=' text-center text-4xl sm:text-7xl font-bold text-white sm:text-left'>Explore Ladakh</h1>
            <p className='max-w-lg text-slate-800'>Ladakh is a region administrated by india as a union territory, and constituting a part of the larger region of kashmir, which has been the subject of dispute between india,pakistan and china since 1947.  </p>
        </div>
        <div className='mt-10 flex flex-col sm:grid grid-cols-4 gap-10'>
            <div className='bg-zinc-900 text-white rounded overflow-hidden '>
                <img className='w-[100%] h-[50%]' src={im1} alt="" />
               <div className='p-4 space-y-4'>
               <h1 className='text-xl font-semibold'>Kargil War Memorial</h1>
                <p className='text-slate-400 font-medium text-sm '>Pink sandstone memorial to the 1999 Kargil War, with names of soldiers lost in OPeration Vijay.</p>
               </div>
            </div>
            <div className='bg-zinc-900 text-white rounded overflow-hidden '>
                <img className='w-[100%] h-[50%]' src={im2} alt="" />
                <div className='p-4 space-y-4'>
                <h1 className='text-xl font-semibold'>The Corner Grocery Store Shey</h1>
                <p className='text-slate-400 font-medium text-sm '>serene, 17th-century monastery complex with panoramic views & annnual culture events.
                </p>
                </div>
            </div>
            <div className='bg-zinc-900 text-white rounded overflow-hidden '>
                <img className='w-[100%] h-[50%]' src={im3} alt="" />
                <div className='p-4 space-y-4'>
                <h1 className='text-xl font-semibold'>chang la pass</h1>
                <p className='text-slate-400 font-medium text-sm '>mountainous route claiming to be the third highest vehicular road in the wourld at 17585 ft.</p>
                </div>
            </div>
            <div className='bg-zinc-900 text-white rounded overflow-hidden '>
                <img className='w-[100%] h-[50%]' src={im4} alt="" />
                <div className='p-4 space-y-4'>
                <h1 className='text-xl font-semibold'>Tso morori </h1>
                <p className='text-slate-400 font-medium text-sm '>Big, pictursque high-altitude spring fed lake located in the scenic & secluded rupshu valley.</p>
                </div>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Header
