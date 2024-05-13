import React, { useState } from 'react'
import Links from './links/link';
import Togglebutton from './togglebutton/togglebutton';
import { delay, motion } from 'framer-motion';
import './Sidebar.scss'
const Sidebar = () => {
  const [open,setopen]=useState(false)


  const variants={
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness: 20,

      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition: {
                      delay:0.5,
                      type:"spring",
                      stiffness: 400,
                      damping: 40,
                    },
    }
  }
  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Togglebutton setopen={setopen}/>
    </motion.div>
  )
}

export default Sidebar