import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Footer.scss'; // Assuming you have a CSS file for styling

const Footer = () => {
    const [name,Setname]= useState(true)
  return (
    <>
    <div className="footer-container">
      <div className="footer-column">
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Menu
        </motion.h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Social
        </motion.h2>
        <ul>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <motion.h2
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Contact
        </motion.h2>
        <ul>
          <li>Address: 123 Street Name</li>
          <li>City: Your City</li>
          <li>Location: Your Location</li>
        </ul>
      </div>
     
    </div>
     <AnimatePresence>
     {
         name && <motion.h1>
             Ali
         </motion.h1>
     }
     <button onClick={()=>{Setname(!name)}}>{name ? "hide":"show"}</button>
   </AnimatePresence>
   </>
  );
};

export default Footer;
