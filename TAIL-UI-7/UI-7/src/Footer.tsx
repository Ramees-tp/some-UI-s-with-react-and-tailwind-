import React from 'react'

function Footer() {
  return (
    <div>
      <div>
        <div className=' bg-[#1F2229] flex flex-col gap-5 sm:grid grid-cols-8 sm:grid-rows-6 text-gray-600 px-24'>
            <h1 className='text-5xl sm:row-start-2 col-start-1 row-end-5 col-end-3 col-span-2'>Core Values We Live By</h1>
            <div className=' row-start-3 col-start-3 row-span-2 row-end-6 col-end-5'>
                <h1 className='text-xl text-white'>Integrity</h1>
                <p>To speack up and act with authenticity, consistency and truth</p>
            </div>
            <div className='row-start-3 col-start-5 row-span-2 row-end-6 col-end-7'>
                <h1 className='text-xl text-white'>Quality</h1>
                <p>To spaeck up and high impact authenticity, consistency and truth</p>
            </div>
            <div className='row-start-3 col-start-7 row-span-2 row-end-6 col-end-9'>
                <h1 className='text-xl text-white'>Respect</h1>
                <p>To respect one another listen and learn from our frfom differences</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
