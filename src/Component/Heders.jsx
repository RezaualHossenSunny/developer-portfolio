import React from 'react'
import pro from '../assets/pro (2).png';
import baner from '../assets/show.png';
import  dev from '../assets/Developer.png'
const Heders = () => {
  return (
    <div  className=' bg-[#FFF8F3] relative'>
    <div className='max-w-container mx-auto py-44 '>
    <div className='flex '>
    <div className='w-6/12'>
        <p className='text-5xl  font-semibold font-sans text-[#474747] not-italic'>Hi, I  am</p>
        <h1 className='text-[85px] font-bold font-sans text-[#181818] not-italic mt-2'>Mary Hardy</h1>

        <p className='mt-5 font-sans text-[#757575] text-base font-normal leading-8 w-[585px]'>Shot what able cold new see hold.Friendly as an betrayed formerly he. Morning because as to society behaved moments.</p>

        <div className='flex mt-6 gap-6'>
        <div className=' bg-[#FD6E0A] h-[64px] w-[169px] py-4 rounded-md'>
             <p className='text-center text-xl font-bold text-[#FFF] font-sans cursor-pointer '>Download CV</p>
             </div>
             <div className=' bg-white border-2 border-orange h-[64px] w-[169px] py-4 rounded-md'>
             <p className='text-center text-xl font-bold text-[#FD6E0A] font-sans cursor-pointer '>Contact</p>
             </div>  
        </div>
    </div>
    <div className='w-6/12 flex justify-end '>
        <img className='h-[467px] w-[484px] z-0' src={pro}/>
    </div>
    </div>

    </div>
    <div className='absolute top-[130px] right-0 z-1'>
        <img className='' src={baner}/>
    </div>
    <div className='absolute top-[-90px] left-0 '>
        <img className='h-screen ml-3' src={dev}/>
    </div>
    </div>
  )
}

export default Heders