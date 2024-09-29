import React, { useState } from 'react'
import logo from "../assets/RyCh-logo.png"
import { IoMenu } from "react-icons/io5";

import {Link} from "react-scroll"

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    // <header className='flex justify-between items-center py-6 px-8 md:px-32'>
    //   <a href="#">
    //     <img className='w-40 hover:scale-105 transition-all' src={logo} alt="Logo" />
    //   </a>

    //   <ul className='hidden xl:flex items-center gap-12'>
    //     <li className='p-3 cursor-pointer'>Home</li>
    //     <li className='p-3 cursor-pointer'>About</li>
    //     <li className='p-3 cursor-pointer'>Experience</li>
    //     <li className='p-3 cursor-pointer'>Projects</li>
    //     <li className='p-3 cursor-pointer'>Contact</li>
    //   </ul>

    //   <IoMenu className='xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}/>

    //   <div className={`absolute xl:hidden top-24 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
      
    //   style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
    //   >
    //   <li className='list-none w-full text-center p-4 transition-all cursor-pointer'>Home</li>
    //   <li className='list-none w-full text-center p-4 transition-all cursor-pointer'>About</li>
    //   <li className='list-none w-full text-center p-4 transition-all cursor-pointer'>Experience</li>
    //   <li className='list-none w-full text-center p-4 transition-all cursor-pointer'>Project</li>
    //   <li className='list-none w-full text-center p-4 transition-all cursor-pointer'>Contact</li>
    //   </div>
      
    // </header>
  
  <header className='w-full'>
    <div className="w-full container items-center justify-between flex fixed">
      <a href="#">
          <img className='w-40 hover:scale-105 transition-all' src={logo} alt="Logo" />
        </a>

      <div className="flex items-center justify-between gap-10 text-2xl">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
        Home
        </Link>
        
        <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
        About Me
        </Link>
        
        <Link to="exp" spy={true} smooth={true} offset={50} duration={1000}>
        Experience
        </Link>

        <Link to="project" spy={true} smooth={true} offset={50} duration={1000}>
        Projects
        </Link>

        <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>
        Contact
        </Link>
    </div>
  </div>
  </header>
  
  


  // <nav className="fixed right-10 mb-20 flex items-center justify-between gap-56">
  //   <div className="flex flex-shrink-0 items-center">
  //       <img className='w-40' src={logo} alt="Logo" />
  //   </div>
    // <div className="m-8 flex items-center justify-center gap-10 text-2xl">
    //     <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
    //     Home
    //     </Link>
        
    //     <Link to="about" spy={true} smooth={true} offset={50} duration={1000}>
    //     About Me
    //     </Link>
        
    //     <Link to="exp" spy={true} smooth={true} offset={50} duration={1000}>
    //     Experience
    //     </Link>

    //     <Link to="project" spy={true} smooth={true} offset={50} duration={1000}>
    //     Projects
    //     </Link>

    //     <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>
    //     Contact
    //     </Link>
    // </div>
  // </nav>
  )
}

export default Header
