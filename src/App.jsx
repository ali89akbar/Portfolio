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
import Footer from './Components/Footer/Footer';
import Cursor from './Components/cursor/cursor';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
      <Cursor/>
        <section id='Homepage' >
          <Navbar/>
          <Hero/>
        </section>
        <section id='Services'><Parallax type="services"/></section>
        <section ><Services/></section>
        <section id='Portfolio'><Parallax  type="portfolio"/></section>
        <section style={{height:'60%'}} id="Resume"> <Portfolio/></section>
       
        <section id='Contact'><Contact/></section>
        </div>
   
  )
}

export default App
