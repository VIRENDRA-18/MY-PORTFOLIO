

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';


// import Projects from './components/Projects/Projects';
// import './App.css';



function App () {
  return (
    <div >
      <Navbar />
      <Hero />
      <About  />
      <Experience />
      
       <Skills />
       <Projects/>  
       <Education/>
       
       
       <Contact />
       <Footer />
      
   
    </div>
  );
}

export default App;