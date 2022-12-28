import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaCaretDown } from 'react-icons/fa';

export default function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                <div>
                    <div className='py-6'>
                        <h1>Hi, I'm <span className='text-[#87CEEB]'>Jonathan Teo</span></h1>
                    </div>

                    <h2 className='py-2'>A Web and Game Developer. </h2>
                    <p className='py-4 text-light-gray-600 sm:max-w-[70%] m-auto'>
                        I have a passion for building things. Right now, I love doing web design and development. While my background is programming in Game Design and Development, I have recently branched out into full-stack web development.
                    </p>

                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/jonathan-teo-304900186/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#05272e]'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/merctraider'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#05272e]'>
                                <FaGithub />
                            </div>
                        </a>
                        <a
                            href='https://www.linkedin.com/in/jonathan-teo-304900186/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#05272e]'>
                                <AiOutlineMail />
                            </div>
                        </a>
                        <Link href='/resume'>
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#05272e]'>
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-center mt-20'>
                    <Link href='#projects' scroll={false}>
                        <div className='animate-bounce text-xl'><FaCaretDown/></div>
                    </Link>
                    </div>
                    
                    



                </div>
                
            </div>
            
        </div>
    )
}
