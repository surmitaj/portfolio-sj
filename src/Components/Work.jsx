import React from 'react'
import dice from '../Assets/dice.png'
import guess from '../Assets/guess.png'


const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
      <div className='max-w-[1000px] mx-auto p-4 w-full h-full flex flex-col justify-center'>
        <div className='pb-8'>
        <p className="text-4xl font-bold border-b-4 inline border-orange-500">
          Work
        </p>
        <p className="py-4">Check out my work here-</p>
        </div>
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div style={{backgroundImage: `url(${guess})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-white tracking-wider text-2xl font-bold'>Guess My Number</span>
            <div className='pt-8 text-center'>
              <a href="https://github.com/surmitaj/js-guess-game" target='_blank' rel="noopener noreferrer">
                <button className='text-center rounded-lg text-gray-700 font-bold text-lg px-4 py-3 m-2 bg-white'>Code</button>
              </a>
              <a href="https://surmitaj.github.io/js-guess-game/" className='text-center rounded-lg text-gray-700 font-bold text-lg px-4 py-3 m-2 bg-white' target='_blank' rel="noopener noreferrer">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>
        <div style={{backgroundImage: `url(${dice})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto img-div'>
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-white tracking-wider text-2xl font-bold'>Dice Game</span>
            <div className='pt-8 text-center'>
              <a href="https://github.com/surmitaj/js-dice-game" target='_blank' rel="noopener noreferrer">
                <button className='text-center rounded-lg text-gray-700 font-bold text-lg px-4 py-3 m-2 bg-white'>Code</button>
              </a>
              <a href="https://surmitaj.github.io/js-dice-game/" className='text-center rounded-lg text-gray-700 font-bold text-lg px-4 py-3 m-2 bg-white' target='_blank' rel="noopener noreferrer">
                <button>See Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Work