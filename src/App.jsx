// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Tech from './components/Tech'
// import Exp from './components/Exp'
// import Project from './components/Project'
// import Contact from './components/Contact'
// import Navbar2 from './components/Header'
// import Header from './components/Header'

// const App = () => {
//   return (
//     <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
//       <div className="fixed top-0 -z-10 h-full w-full">
//         <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
//       </div>
      
//       <div className="px-8">
//       <Navbar />
//       {/* <Header /> */}
//       </div>
      
//       <div className="container mx-auto px-8">
        
//         <Hero />
//         <About />
//         <Tech />
//         <Exp />
//         <Project />
//         <Contact />
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Exp from './components/Exp'
import Project from './components/Project'
import Contact from './components/Contact'
import Header from './components/Header'

const App = () => {
  React.useEffect(() => {
    document.body.style.msOverflowStyle = 'none';
    document.body.style.scrollbarWidth = 'none';
    const style = document.createElement('style');
    style.textContent = `
      body::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.append(style);
    
    return () => {
      document.body.style.msOverflowStyle = '';
      document.body.style.scrollbarWidth = '';
      style.remove();
    };
  }, []);

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="px-8">
        <Navbar />
        {/* <Header /> */}
      </div>
      
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Tech />
        <Exp />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App