import React from 'react'
import javascript from '../assets/logo-javascript 1.png';
import react from '../assets/Group.png';
import node from '../assets/nodejs-icon 1.png'
import mongo from '../assets/mongo 1.png'
const WhatIdo = () => {
  return (
    <div className=' bg-[#FFF]'>
        <div className='py-52 max-w-container mx-auto   '>
         <div>
         <h1 className='text-center text-[#181818] text-4xl font-bold font-sans'>What I do</h1>
         <p className='mt-8 font-sans text-[#757575] align-center font-normal w-[909px] mx-auto text-center leading-8'>I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
         </div>

         <div  className='flex justify-between mt-20 rounded-md'>
         <div>
            <div className='px-8 py-8 w-[267px] shadow-shadow h-[377px] border-2'>
           <div className='ml-6'>
            <img src={javascript}/>
            <h2 className='mt-6 text-[#181818] text-xl font-bold font-sans'>Vanilla JavaScript</h2>
            <p className='mt-4 font-sans text-[#757575] w-[201px] text-base '>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
           </div>
            </div>
         </div>


         <div>
            <div className='px-8 py-8 w-[267px] shadow-shadow h-[377px] border-2'>
           <div className='ml-6'>
            <img src={react}/>
            <h2 className='mt-6 text-[#181818] text-xl font-bold font-sans'>React</h2>
            <p className='mt-4 font-sans text-[#757575] w-[201px] text-base '>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
           </div>
            </div>
         </div>


         <div>
            <div className='px-8 py-8 w-[267px] shadow-shadow h-[377px] border-2'>
           <div className='ml-6'>
            <img src={node}/>
            <h2 className='mt-6 text-[#181818] text-xl font-bold font-sans'>Node.js</h2>
            <p className='mt-4 font-sans text-[#757575] w-[201px] text-base '>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
           </div>
            </div>
         </div>

         <div>
            <div className='px-8 py-8 w-[267px] shadow-shadow h-[377px] border-2'>
           <div className='ml-6'>
            <img src={mongo}/>
            <h2 className='mt-6 text-[#181818] text-xl font-bold font-sans'>Node.js</h2>
            <p className='mt-4 font-sans text-[#757575] w-[201px] text-base '>List skill/technologies here. You can change the icon above to any of the 1500+ FontAwesome 5 free icons available. Aenean commodo ligula eget dolor.</p>
           </div>
            </div>
         </div>

         </div> 
        </div>
    </div>
  )
}

export default WhatIdo