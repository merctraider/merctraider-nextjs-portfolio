import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaCaretDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Main() {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
                <div>
                    <motion.div 
                    initial={{y:25, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={
                        {
                            delay:0.2, 
                            duration:0.75
                        }
                      }
                    className='py-6'
                    >
                        <h1>Hi, I'm <span className='text-[#87CEEB]'>Jonathan Teo</span></h1>
                    </motion.div>
                    
                    <motion.div 
                    initial={{y:25, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={
                        {
                            delay:0.4, 
                            duration:0.75
                        }
                      }
                    
                    >
                    <h2 className='py-2'>A Web and Game Developer. </h2>
                    <p className='py-4 text-light-gray-600 sm:max-w-[70%] m-auto'>
                        I have a passion for building things. Right now, I love doing web design and development. While my background is programming in Game Design and Development, I have recently branched out into full-stack web development.
                    </p>
                    </motion.div>

                    <motion.div 
                    initial={{y:-25, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={
                        {
                            delay:0.75, 
                            duration:0.75
                        }
                      }
                    className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <a
                            href='https://www.linkedin.com/in/jonathan-teo-304900186/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-800'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a
                            href='https://github.com/merctraider'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-800'>
                                <FaGithub />
                            </div>
                        </a>
                        <a
                            href='mailto:jonathanteomail@gmail.com'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-800'>
                                <AiOutlineMail />
                            </div>
                        </a>
                        <a href='https://drive.google.com/file/d/1foctmAN097R_awbkkWLcjgwPf0bLGi9s/view' target="_blank">
                            <div className='rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-slate-800'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a>
                    </motion.div>
                    <motion.div 
                    initial={{y:-25, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={
                        {
                            delay:1, 
                            duration:0.75
                        }
                      }
                    
                    className='flex justify-center mt-20'>
                    <Link href='#projects' scroll={false}>
                        <div className='animate-bounce text-xl'><FaCaretDown/></div>
                    </Link>
                    </motion.div>
                    
                    



                </div>
                
            </div>
            
        </div>
    )
}
