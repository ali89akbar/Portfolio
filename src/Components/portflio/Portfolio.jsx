import React, { useRef } from 'react';
import './Portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: "AI shoe analyzer",
    img: "https://i.postimg.cc/15qLSzB3/pro2.png",
    desc: "The AI Shoe Analyzer is a full-stack web application for analyzing shoe conditions, featuring separate panels for uploaders, users, and companies. Users can upload images, view analysis results, and manage data through intuitive dashboards. The platform ensures seamless interaction between the frontend and backend, providing real-time analysis and role-based access control for enhanced security and functionality. Technologies Used:Frontend: HTML, CSS, JavaScript, React.js Backend: Node.j,Expressjs Database: PostgreSQL Hosting: Heroku",
    demo:"https://aishoeanalyzer-17b7d8ac992d.herokuapp.com/"

  },
  {
    id: 2,
    title: "E-Commerce ",
    img: "https://i.postimg.cc/pXgM56kk/pro3.png",
    desc: "The E-Commerce Platform is a dynamic and user-friendly website designed for online shopping. It offers a seamless browsing experience, allowing users to explore various products, add items to their cart, and proceed with secure checkout. The website includes features such as product search, detailed product pages, user reviews, and personalized recommendations. This project demonstrates my ability to create a fully functional e-commerce platform with a focus on user experience, security, and scalability. The E-Commerce Platform showcases my skills in both frontend and backend development, providing a comprehensive solution for online shopping needs.Technologies Used: Frontend: HTML, CSS, JavaScript, React.js Backend: Firebase",
    demo:"https://e-commerce-ec8b1.web.app/"
  },
  {
    id: 3,
    title: "Navy one",
    img: "https://i.postimg.cc/fb9sgvPB/pro1.png",
    desc: "The Navy One Landing Page is a modern, responsive, and visually appealing website designed to showcase a product or service. It features a sleek design, fast loading times, and clear call-to-actions (CTAs) to enhance user engagement. The page is SEO-friendly and incorporates high-quality imagery and interactive elements for a polished look. Built to ensure optimal performance, it provides an exceptional user experience across all devices Technologies Used Frontend: HTML, CSS, JavaScript, React.js Hosting: Vercel ",
    demo:"https://landing-page-navy-one.vercel.app/"
  },
  {
id:4,
title:"Resturant Website",
img:"https://i.postimg.cc/tJcJxNmP/pro4.png",
desc:"The Restaurant Website is a modern, responsive web application designed to enhance the dining experience by providing users with a comprehensive overview of a restaurant's offerings. It features a sleek design with an easy-to-navigate interface, allowing customers to browse the menu, make reservations, and view customer reviews. The website also includes a gallery showcasing the restaurant's ambiance and special events.Technologies Used:Frontend: HTML, CSS, JavaScript, React.js Backend: Firebase",
demo:"https://resturant-cb439.web.app/"
  },
 {
id:5,
title:"AI Shoe Analyzer Landing Page",
img:"https://i.postimg.cc/t4qR4fgf/pro5.png",
desc:"The Personal Portfolio Website is a sleek and modern platform designed to showcase my skills, projects, and professional experience. It features a clean layout with sections for an about me, portfolio, resume, and contact information. The website provides an intuitive navigation experience, allowing visitors to easily explore my work and learn more about my background. This project highlights my ability to create visually appealing and functional web applications that effectively communicate my personal brand and professional capabilities.Technologies Used:Frontend: HTML, CSS, JavaScript, React.js Hosting: Netlify",
demo:"https://magnificent-daffodil-0e1886.netlify.app/"
 },
 
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
     target: ref ,
    offset: [ "start start","end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref}>
    <div className="container">
      <div className="wrapper">
        <div className="imgcontainer">
          <img src={item.img} alt={item.title} />
        </div>
        <motion.div className="textcontainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a target='blank' href={item.demo}>
          <button>See Demo</button>
</a>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <motion.div className="progress">
        <h1>Featured Work</h1>
        <motion.div className="progressbar" style={{ scaleX }}></motion.div>
      </motion.div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
