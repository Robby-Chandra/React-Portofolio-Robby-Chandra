import React from 'react'
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/pfp.png";
import { delay, motion } from "framer-motion";
import resume from "../assets/Resume.pdf";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div id='home' className="mt-20 border-b border-neutral-900 pb-28 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Robby Chandra</motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Mobile Developer | Website Developer</motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'> {HERO_CONTENT} </motion.p>
                    <motion.button 
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                    download class="relative inline-flex items-center justify-center p-0.5 mb-10 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <a href={resume} download='resume' class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Download Resume
                        </a>
                    </motion.button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img 
                    initial={{x: 100, opacity: 0}} 
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay:1.2}}
                className='w-[550px] rounded-3xl' src={profilePic} alt="Profile" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero
