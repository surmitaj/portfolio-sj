import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pl-4 pb-8">
            <p className="text-4xl font-bold border-b-4 inline border-orange-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className='sm:text-right font-bold text-4xl'>
            <p>Hi. I'm Surmita, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am detail-oriented, responsible and committed software engineer
              with experience in development technologies. Also skilled
              in developing plans, managing projects and user documentation.
              Proficient in HTML, CSS, Javascript and ReactJS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
