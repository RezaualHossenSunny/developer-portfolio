import React from 'react'

const About = () => {
  return (
    <div>
        <div className='max-w-container mx-auto bg-[#FFF8F3] mt-28'>
        <div className='py-32'>
       <h1 className='font-sans text-center text-4xl font-bold text-[#181818] leading-normal not-italic'>About Me</h1>
       <p className='mt-8 text-[#757575] text-lg font-normal w-[827px] text-center  mx-auto'>I, m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional resulfs while working with me. Delivering work within time and budget which meets clients requirements in our mata.</p>
       <div className='flex justify-between mx-auto w-[827px] mt-10'>
        <div>
            <p className='text-[#757575] text-xl font-normal font-sans'>Name:</p>
            <h2 className='text-[#474747] text-xl font-bold'>Mary Hardy </h2>
        </div>
        <div>
            <p className='text-[#757575] text-xl font-normal font-sans'>Email:</p>
            <h2 className='text-[#474747] text-xl font-bold'>info@gmail.com </h2>
        </div>
        <div>
            <p className='text-[#757575] text-xl font-normal font-sans'>Date of birth:</p>
            <h2 className='text-[#474747] text-xl font-bold'>11 November 1987</h2>
        </div>
        <div>
            <p className='text-[#757575] text-xl font-normal font-sans'>From:</p>
            <h2 className='text-[#474747] text-xl font-bold'>Los Angeles, USA </h2>
        </div>
       </div>



        </div>

        </div>
    </div>
  )
}

export default About