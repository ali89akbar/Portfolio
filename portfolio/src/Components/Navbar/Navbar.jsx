import React from 'react'
import "./Navbar.scss";
import {motion} from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar></Sidebar>
        <div className="wrapper">
            <div className="name">
                <motion.span
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:1}}>Syed Ali Akbar</motion.span>
            </div>
            <div className="social-media">
                <a href="">Instagram</a>
                <a href="">LinkedIn</a>
                <a href="">Github</a>
                <a href="">Youtube</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
