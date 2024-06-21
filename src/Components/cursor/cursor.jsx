import React, { useEffect, useState } from 'react';
import "./cursor.scss";
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouse = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener("mousemove", mouse);

        return () => {
            window.removeEventListener("mousemove", mouse);
        };
    }, []); 
    return (
        <motion.div
         animate={{x:position.x+10, y:position.y+10}} 
         className='cursor' 
>           
        </motion.div>
    );
};

export default Cursor;
