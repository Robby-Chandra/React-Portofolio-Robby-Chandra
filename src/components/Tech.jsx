import React from 'react'
import {animate, motion} from "framer-motion"
import { PiFileCpp } from "react-icons/pi";
import { FaJava } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { SiDart } from 'react-icons/si'
import { SiFlutter } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { FaJsSquare } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { SiKotlin } from 'react-icons/si'
import { SiSwift } from 'react-icons/si'
import { IoLogoFigma } from 'react-icons/io5'
import { SiNotion } from 'react-icons/si'


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Skills</motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <PiFileCpp className='text-7xl text-blue-800' />
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className='text-7xl text-red-600' />
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-7xl text-yellow-400' />
            </motion.div>

            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDart className='text-7xl text-teal-500' />
            </motion.div>

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlutter className='text-7xl text-blue-500' />
            </motion.div>

            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-7xl text-amber-500' />
            </motion.div>

            <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiHtml5 className='text-7xl text-orange-600' />
            </motion.div>

            <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className='text-7xl text-blue-600' />
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJsSquare className='text-7xl text-yellow-400' />
            </motion.div>

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className='text-7xl text-cyan-300' />
            </motion.div>

            <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>

            <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKotlin className='text-7xl text-purple-700' />
            </motion.div>

            <motion.div 
                variants={iconVariants(4.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSwift className='text-7xl text-orange-500' />
            </motion.div>

            <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoFigma className='text-7xl text-red-400' />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiNotion className='text-7xl' />
            </div>
        </motion.div>
      
    </div>
  )
}

export default Tech
