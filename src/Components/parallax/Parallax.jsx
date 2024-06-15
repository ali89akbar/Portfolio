import React, { useRef, useEffect } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const ytxt = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

    // Adding useEffect to log and check the ref value
    useEffect(() => {
        console.log(ref.current); // Ensure the ref is correctly assigned
    }, [ref]);

    return (
        <div 
            ref={ref} 
            className="parallax" 
            style={{
                background: type === "services" ? 
                    "linear-gradient(180deg, #111132, #0c0c1d)" : 
                    "linear-gradient(180deg, #111132, #505064)",
            }}
        >
            <motion.h1 style={{ y: ytxt }}>
                {type === "services" ? "What we do?" : "What we did?"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div  className="planets" style={{backgroundImage:`url(${type==="services" ? "/planets.png" : "/sun.png"})`, y:ybg}}></motion.div>
            <motion.div style={{  x:xStars }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;
