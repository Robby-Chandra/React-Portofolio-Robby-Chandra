import React from 'react'
import { CONTACT } from '../constants'
import {motion} from "framer-motion"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [5, -5],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Contact = () => {
  return (
    <div id='contact' className='border-b border-neutral-900 pb-20'>
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 1, x: -100}}
                transition={{duration: 1}}
            className='my-4'>{CONTACT.address}</motion.p>
            <motion.p 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 1, x: 100}}
                transition={{duration: 1}}
            className='my-4'>{CONTACT.phone}</motion.p>
            <motion.p 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 1, y: 50}}
                transition={{duration: 0.5}}
            className='my-4'>{CONTACT.email}</motion.p>
        </div>

        <motion.div 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 100}}
            transition={{duration: 0.5}}
        className="m-8 flex items-center justify-center gap-7 text-4xl">
        <motion.a 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
        href="https://www.linkedin.com/in/robby-chandra-73580b32a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUax6rjD3TmqgAb6sdPlC8g%3D%3D" target='_blank'>
        <FaLinkedin className='hover:scale-150' />
        </motion.a>
        
        <motion.a 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
        href="https://github.com/Robby-Chandra" target='_blank'>
        <FaGithub className='hover:scale-150'/>
        </motion.a>

        <motion.a 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
        href="https://wa.me/qr/AJTQ4GTA2NKZA1" target='_blank'>
        <BsWhatsapp className='hover:scale-150'/>
        </motion.a>

        <motion.a 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
        href="https://www.tiktok.com/@kikinotavailable?is_from_webapp=1&sender_device=pc" target='_blank'>
        <MdEmail className='hover:scale-150'/>
        </motion.a>
        
        <motion.a 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
        href="https://www.instagram.com/rob_chand/" target='_blank'>
        <FaInstagram className='hover:scale-150'/>
        </motion.a>
        
    </motion.div>

    </div>
  )
}

export default Contact
