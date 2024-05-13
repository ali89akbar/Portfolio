import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
        <section id='Homepage' >
          <Navbar/>
          <Hero/>
        </section>
        <section id='Services'><Parallax/></section>
        <section >Services</section>
        <section id="Resume">Porfolio 2</section>
        <section id='About'>Portfolio 3</section>
        <section id='Contact'>Contact us</section>
        </>
   
  )
}

export default App
