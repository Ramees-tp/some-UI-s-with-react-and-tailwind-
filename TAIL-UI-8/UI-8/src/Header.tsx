import React from 'react'
import face from '../src/assets/img/facebook (1).png'
import twit from '../src/assets/img/twitter.png'
import doc from '../src/assets/img/google-docs.png'
import down from '../src/assets/img/downloading.png'

function Header() {
  return (
    <div>
      <div>
        <div className='border-b shadow-md border-zinc-400 p-4  '>
            <div className='text-center p-7 sm:flex justify-between sm:px-36 items-center'>
                <b>TAILWIND STARTER KIT</b>
                <nav>
                    <ul className='sm:flex
                     gap-4 text-xs font-medium'> 
                            <li><a className='flex gap-1' href=""><img src={face} />SHARE</a></li>
                            <li><a className='flex gap-1' href=""><img src={twit} />TWEET</a></li>
                            <li><a className='flex gap-1' href=""><img src={doc} />DOCS</a></li>
                            <li><a className='flex gap-1' href=""><img src={down}/>DOWNLOAD</a></li>
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
