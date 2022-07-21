import React from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import { AiFillFolderOpen } from "react-icons/ai";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import Resume from '../Assets/Resume.pdf'

import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[50px] flex items-center justify-between bg-[#0a192f] text-gray-300 px-4">
      <div>
        {/* <img src={logo} className="w-[50px]" alt="Logo Image" /> */}
        <AiFillFolderOpen size={50} style={{ fill: '#ffa500' }} />
      </div>
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer">
          <Link to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className="px-4 cursor-pointer">
          <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="text-4xl py-6">
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
        </li>
        <li className="text-4xl py-6">
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
        </li>
        <li className="text-4xl py-6">
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="text-4xl py-6">
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link>
        </li>
        <li className="text-4xl py-6">
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/surmitajaiswal22/" target='_blank' rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="https://github.com/surmitaj" target='_blank' rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href="mailto:surmitajais@gmail.com" target='_blank' rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-around items-center w-full text-gray-300"
              href={Resume} target='_blank' rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
