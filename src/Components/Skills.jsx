import React from 'react';
import JS from '../Assets/JS.png';
import HTML from '../Assets/HTML.png';
import CSS from '../Assets/CSS.png';
import ReactIcon from '../Assets/ReactIcon.png';
import Jest from '../Assets/Jest.png';
import Github from '../Assets/Github.png';

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 inline border-orange-500'>Skills</p>
          <p className='py-4'>These are the technologies I have worked with-</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt='CSS icon'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JS} alt='JS icon'/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactIcon} alt='React icon'/>
                <p className='mt-8'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Jest} alt='Jest icon'/>
                <p className='my-4'>JEST</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt='Github icon'/>
                <p className='my-4'>GITHUB</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
