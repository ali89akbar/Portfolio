import { motion, transform } from 'framer-motion'
import React from 'react';

const variants ={

    open:{
        transition:{
            staggerChildren: 0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
        },
    },
};

const itemVariants={
    open:{
       y:0,
       opacity:1,
       },
    closed:{
        y:50,
        opacity:0,
    }
}
const Link = () => {

    const items=["Homepage","Services","Resume","Contact","About"]
  return (
    <motion.div className='links'>
       { items.map((i)=>(
        <motion.a href={`#${i}`} key={i} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.95}} style={{fontFamily:"sans-serif" , fontWeight:100, fontSize:"30px"}}>{i}</motion.a>
       ))}
    </motion.div>
  )
}

export default Link