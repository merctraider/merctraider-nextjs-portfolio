import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import {SiItchdotio} from 'react-icons/si'
const Navbar = () => {

  const [nav, setNav] = useState(false) 

  const handleNav = () => {
    setNav(!nav); 
  } 

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div>
          <ul className='hidden md:flex'>
            <Link href="/#home" scroll={false}>
              <li className='navbar-button'>Home</li>
            </Link>
            <Link href="/#projects" scroll={false}>
              <li className='navbar-button'>Projects</li>
            </Link>
            <a href="https://drive.google.com/file/d/1foctmAN097R_awbkkWLcjgwPf0bLGi9s/view" target='_blank'>
              <li className='navbar-button'>Resume</li>
            </a>
          </ul>
        </div>

        <div className='md:hidden' onClick={handleNav}>
          <ul>
            <AiOutlineMenu size={25} />
          </ul>
        </div>

        
      </div>

      <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : 'md:hidden'}>
          <div className={
            nav 
            ?'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#05272e] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }>
            <div>
              <div className='flex w-full items-center justify-between'>
                <p>merctraider</p>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer' onClick={handleNav}>
                  <AiOutlineClose />
                </div>
              </div>
              <div>

                <ul>
                  <Link href="/#home">
                    <li className='py-4 text-sm'>Home</li>
                  </Link>
                  <Link href="/#projects">
                    <li className='py-4 text-sm'>Projects</li>
                  </Link>
                  <a href="https://drive.google.com/file/d/1foctmAN097R_awbkkWLcjgwPf0bLGi9s/view" target='_blank'>
                    <li className='py-4 text-sm'>Resume</li>
                  </a>
                </ul>

              </div>

            </div>

          </div>
        </div>
    </div>
  )
}

export default Navbar