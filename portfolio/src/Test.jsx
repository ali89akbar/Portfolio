import React from 'react'
import "./app.scss"
import {motion} from 'framer-motion';

const Test = () => {
    const [open,setOpen]=React.useState(false);
    const variants={
        visible: (i)=>(
        {   opacity:1,
            x:50,
            transition:{ delay: i * 0.3}
        }),
        hidden:{opacity:0}
    }
const items = ["item 1","item 2","item 3"]
  return (
    <div className="course">
  <motion.ul initial="hidden" animate="visible" variants={variants}>
{items.map((item,i)=>(
    <motion.li variants={variants} key={item} custom={i}>
        {item}
    </motion.li>
))}
  </motion.ul>
    </div>
  )
}

export default Test