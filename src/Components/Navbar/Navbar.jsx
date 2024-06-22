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
                <a href="https://www.instagram.com/akbar29670/">Instagram</a>
                <a href="https://www.linkedin.com/in/syed-ali-akbar-760051204/">LinkedIn</a>
                <a href="https://github.com/ali89akbar">Github</a>
                <a href="https://www.youtube.com/channel/UCTunRlzN82KMWG16WWEXudA">Youtube</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
