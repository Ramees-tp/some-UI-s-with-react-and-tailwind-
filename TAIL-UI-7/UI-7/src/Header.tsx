 import React from 'react'
 
 function Header() {
   return (
     <div>
       <div>
        <div className='text-center space-y-4 sm:flex items-center sm:justify-around bg-[#050810] text-white p-4 border-b-2'>
            <div><b>Laziye</b></div>
            <nav>
                <ul className='text-center sm:flex gap-10 text-sm text-[#838488]'>
                    <li>Home</li>
                    <li>Work</li>
                    <li>EXpertise</li>
                    <li>Why us?</li>
                    <li>Team</li>
                </ul>
            </nav>
            <button className='border-2 border-gray-400 text-xs text-gray-400 p-2 px-4 rounded-lg'>Contact Us</button>
        </div>
       </div>
     </div>
   )
 }
 
 export default Header
 