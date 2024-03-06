import React from 'react'
import fb from '../assets/Frame.png';
import ins from '../assets//Frame (1).png';
import twi from '../assets/Frame (2).png';

const Connect = () => {
  return (
    <div className='bg-[#FFF8F3] '>
       <div className='max-w-container mx-auto py-36'>
      <div className='flex'>
      <div className='w-3/6'>
        <h2 className='font-sans text-[#181818] font-bold  text-4xl '>Lets Connect</h2>
        <p className='w-[562px] text-base font-sans font-normal text-[#474747] mt-2'>Please fill out the form on this section to contact with me or call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.</p>

        <div className='flex mt-6 gap-6'>
        <img src={fb}/>
        <img src={ins}/>
        <img src={twi}/>
        </div>
      </div>


       <div className='w-3/6'>
       <h2 className='font-sans text-[#181818] font-bold  text-4xl '>Let’s Message me</h2>
       <div className='mt-7 w-[461px] h-[64px] bg-white '>
        <input type='text' className='font-sans text-[#757575] font-normal text-base mt-6 ml-2 ' placeholder='Your name'/>
       </div>

       <div className='mt-4 w-[461px] h-[64px] bg-white '>
        <input type='text' className='font-sans text-[#757575] font-normal text-base mt-6 ml-2 ' placeholder='Your email'/>
       </div>


       <div className='mt-4 w-[461px] h-[180px] bg-white '>
        <input type='text' className='font-sans text-[#757575] font-normal text-base mt-6 ml-2 ' placeholder='Message'/>
       </div>

       <div className=' bg-[#FD6E0A] h-[64px] w-[169px] py-4 rounded-md mt-8'>
             <p className='text-center text-xl font-bold text-[#FFF] font-sans cursor-pointer '> Submit</p>
             </div>
    
       </div>
      </div>

       </div>  
    </div>
  )
}

export default Connect