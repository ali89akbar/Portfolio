import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.scss'
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Services from './Components/services/Services';
import Portfolio from './Components/portflio/Portfolio';
import Contact from './Components/contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <>
        <section id='Homepage' >
          <Navbar/>
          <Hero/>
        </section>
        <section id='Services'><Parallax type="services"/></section>
        <section ><Services/></section>
        <section id='Portfolio'><Parallax  type="portfolio"/></section>
        <section id="Resume"> <Portfolio/></section>
        <section id='About'></section>
        <section id='Contact'><Contact/></section>
        </>
   
  )
}

export default App
