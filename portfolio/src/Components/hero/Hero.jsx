import { animate, motion } from 'framer-motion'
import React from 'react'
import "./Hero.scss"

const textvariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,

        },
    },
scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat:Infinity
}
},
};
const Hero = () => {
  return (
<div className="hero">
    <div className="wrapper">
    <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate">
        <motion.h2 variants={textvariants}>Syed Ali Akbar</motion.h2>
        <motion.h1 variants={textvariants}>Web Developer & Mern </motion.h1>
        <motion.div variants={textvariants} className="buttons">
            <motion.button variants={textvariants}>See Latest Work</motion.button>
            <motion.button variants={textvariants}>Resume</motion.button>
        </motion.div>
        <motion.img variants={textvariants} animate="scrollButton" src="/scrolls.png" alt="" />
        </motion.div>
    </div>
<div className="slidingtext">
    Mern Stack Developer 
</div>
    <div className="ImageContainer">
        <img src="/remove.png" alt="" />
    </div>
</div>  
)
}

export default Hero