import React from 'react'
 import  dev from '../assets/Developer.png'
 import logo from  '../assets/logo.png'
const Baner = () => {
  return (
    <div className='bg-[#FFF8F3]'>
    {/* <img src={dev} className='h-screen ml-4'/> */}
        <div className='max-w-container mx-auto'>
           <div className='flex py-4'>
           <div className='w-1/4 py-4'>
            <img src={logo}/>
           </div>
            <div className='w-2/4 flex justify-end gap-6 py-4'>
             <p className='text-xl	font-normal	text-[#474747] leading-normal font-sans cursor-pointer'>Portfolio</p>
             <p className='text-xl	font-normal	text-[#474747] leading-normal font-sans cursor-pointer'>Blog</p>
            </div>
            <div className='w-1/4 gap-12 flex justify-center '>
             <div className=' bg-[#FD6E0A] h-[64px] w-[169px] py-4 rounded-md'>
             <p className='text-center text-xl font-bold text-[#FFF] font-sans cursor-pointer '>Hire Me</p>
             </div>
    
            
            
                 
            </div>
           </div>
        </div>
    </div>
  )
}

export default Baner