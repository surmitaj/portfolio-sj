import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/736253eb-3d99-4c9f-b830-77fcc72ee2e0' className='flex flex-col max-w-[600px] h-full w-full'>
            <div className='py-8'>
                <p className='text-4xl font-bold border-b-4 inline border-orange-500'>Contact</p>
                <p className='py-4'>Submit the form or shoot me an email- surmitajais@gmail.com</p>
            </div>
            <input type='text' className='bg-[#ccd6f6] p-2 text-black' placeholder='Name' name='name'/>
            <input type='email' className='bg-[#ccd6f6] my-4 p-2 text-black' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2 text-black' name='message' placeholder='Message' rows='10'></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto hover:bg-orange-500 hover:border-orange-500'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact