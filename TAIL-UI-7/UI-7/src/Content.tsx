import React from 'react'
import img1 from '../src/assets/img/send.png'
import img2 from '../src/assets/img/saturn-space-planet-solar-system-wallpaper-preview.jpg'

function Content() {
  return (
    <div>
      <div className='bg-black p-24 flex items-center justify-center'>
        <div className='flex flex-col gap-5 max-w-[40%]'>
            <h1 className='text-white text-5xl'><b>Dare To Reach Higher</b></h1>
            <p className='text-xs text-[#838488]'>Our vision is to drive transformation for the most <br /> impactful B tech company all over world in this </p>
            <div className='flex flex-col justify-center sm:flex-row gap-5 sm:justify-start'>
                <button className='bg-[#838488] p-2 px-5 text-xs rounded text-white'>Request a demo</button>
                <button className='bg-orange-600 rounded p-1'><img src={img1} alt="" /></button>
            </div>
        </div>
        <div className='w-[50%]'><img src={img2} alt="" /></div>
      </div>
    </div>
  )
}

export default Content
