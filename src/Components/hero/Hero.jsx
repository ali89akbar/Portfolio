import { animate, motion } from 'framer-motion'
import React from 'react'
import "./Hero.scss"


const slidervariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        opacity:1,
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,

        },
    },
};

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

    const download=()=>{
        const link = document.createElement('a');
        link.href= "https://drive.google.com/file/d/1MdYupMpTdebV0Eeht4qjEcby-J3ZP9Mt/view"
        link.download= "https://drive.google.com/file/d/1MdYupMpTdebV0Eeht4qjEcby-J3ZP9Mt/view"
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
        console.log("Clicked")
    }
  return (
<div className="hero">
    <div className="wrapper">
    <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate">
        <motion.h2 variants={textvariants}>Syed Ali Akbar</motion.h2>
        <motion.h1 variants={textvariants}>Web Developer & Mern </motion.h1>
        <motion.div variants={textvariants} className="buttons">
           <a href="#Resume"><motion.button variants={textvariants}>See Latest Work</motion.button></a> 
             <motion.button variants={textvariants} onClick={download}>Resume</motion.button>
        </motion.div>
        <motion.img variants={textvariants} animate="scrollButton" src="/scrolls.png" alt="" />
        </motion.div>
    </div>
<motion.div className="slidingtext" variants={slidervariants} initial="initial" animate="animate">
    Mern Stack Developer 
</motion.div>
    <div className="ImageContainer">
        <img src="pic7.png" alt="" />
    </div>
</div>  
)
}

export default Hero