import React from 'react';
import Home from './Home/Home';
import Competences from './Competences/Competences';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';


const Sections = () => {
  return ( 
    <>
      <Home />
      <div className="container">
        <Competences />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </>
  );
};
export default Sections;