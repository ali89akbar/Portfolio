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
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInview && "animate"} >
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
                    <img src="" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas</h1>
                </motion.div>
                <motion.div className="title">
                    
                    <h1><motion.b whileHover={{color:"orange"}}>For Your </motion.b> Business</h1>
                    <button>What We Do?</button>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nemo, et dolor, earum illum neque ex dolore hic corporis libero alias? Labore, dolores sunt autem modi mollitia molestias magni voluptate.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nemo, et dolor, earum illum neque ex dolore hic corporis libero alias? Labore, dolores sunt autem modi mollitia molestias magni voluptate.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nemo, et dolor, earum illum neque ex dolore hic corporis libero alias? Labore, dolores sunt autem modi mollitia molestias magni voluptate.</p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="boxs" whileHover={{background:"lightgray",color:"black"}}>
                        <h2>Branding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nemo, et dolor, earum illum neque ex dolore hic corporis libero alias? Labore, dolores sunt autem modi mollitia molestias magni voluptate.</p>
                        <button>Go</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
