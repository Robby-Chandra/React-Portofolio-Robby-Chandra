import React from 'react'
import logo from "../assets/RyCh-logo.png"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between">
    <div className="flex flex-shrink-0 items-center">
        <img className='w-40 hover:scale-125' src={logo} alt="Logo" />
    </div>
    <div className="m-8 flex flex-wrap items-center justify-center gap-5 text-2xl">
        <a href="https://www.linkedin.com/in/robby-chandra-73580b32a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUax6rjD3TmqgAb6sdPlC8g%3D%3D" target='_blank'>
        <FaLinkedin className='hover:scale-150' />
        </a>
        
        <a href="https://github.com/Robby-Chandra" target='_blank'>
        <FaGithub className='hover:scale-150'/>
        </a>

        <a href="https://wa.me/qr/AJTQ4GTA2NKZA1" target='_blank'>
        <BsWhatsapp className='hover:scale-150'/>
        </a>
        
        <a href="mailto:rochan.130904@gmail.com" target='_blank'>
        <MdEmail className='hover:scale-150'/>
        </a>
        
        <a href="https://www.instagram.com/rob_chand/" target='_blank'>
        <FaInstagram className='hover:scale-150'/>
        </a>

    </div>
  </nav>
  )
}

export default Navbar
