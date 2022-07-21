import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* {Container} */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-500'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Surmita Jaiswal</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Frontend Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a frontend developer focused on building responsive web applications but still exploring other technologies and frameworks that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you!</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-500 hover:border-orange-500'> View Work 
          <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home