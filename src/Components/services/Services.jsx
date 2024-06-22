import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import './services.scss';

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.5
        }
    }
}
const Services = () => {
    const ref = useRef()

    const isInview= useInView(ref,{margin:'-100px'})

    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"} >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping brands grow
                    <br />
                    <span>
                        through design
                    </span>
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <motion.div className="title">
                    <img src="pic5.png" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
                </motion.div>
                <motion.div className="title">
                    
                    <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business</h1>
                    <button>What We Do?</button>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>Navy one landing page</h2>
                        <p>The Navy One Landing Page is a modern, responsive, and visually appealing landing page designed to showcase a product, service, or brand. Built with the latest web development technologies, this landing page ensures a seamless user experience across various devices and screen sizes.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>AI Shoe Analyzer</h2>
                        <p>The AI Shoe Analyzer is a full-stack web app for analyzing shoe conditions, featuring separate panels for uploaders, users, and companies. It enables image uploads, result viewing, and data management with real-time analysis and role-based access control.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>Resturant</h2>
                        <p>
                        The Restaurant Website is a modern, responsive platform enhancing the dining experience with comprehensive menus, reservations, and customer reviews. It showcases my skills in creating interactive, visually appealing web applications focusing on user experience and functionality.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>E-Commerce</h2>
                        <p>The E-Commerce Platform offers seamless shopping, with product search, detailed pages, reviews, and secure checkout. It demonstrates expertise in creating user-friendly, secure, and scalable e-commerce solutions.</p>
                        <button>Go</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
