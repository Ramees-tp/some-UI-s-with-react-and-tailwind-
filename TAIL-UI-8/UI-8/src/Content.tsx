import React from 'react'
import img1 from '../src/assets/img/images.png'
function Content() {
  return (
    <div>
      <div>
        <div className='space-y-5 p-10 sm:flex justify-between sm:pl-40'>
            <div className='sm:max-w-[50%] pt-36 space-y-5'>
                <h1 className='font-bold text-3xl max-w-[70%]'>
                    A Beautiful extension for TailwindCSS.
                </h1>
                <p className='text-gray-500 max-w-[70%] text-sm'>Tailwind strater kit is a free and Open Sourse.It does not change or add any CSS to the already one from TailwindCSS.It features multiple HTML elements and it comes with dynamic components for react JS,Vue and Angular.</p>
                <div className='text-center space-y-4 sm:space-x-4'>
                    <button className='bg-pink-500 p-2 px-5 text-xs rounded text-white'>GET STARTED</button>
                    <button className='bg-black p-2 px-5 text-xs rounded text-white'>OTHER STAR</button>
                </div>
            </div>
            <div><img className='w-[500px]' src={img1} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Content
