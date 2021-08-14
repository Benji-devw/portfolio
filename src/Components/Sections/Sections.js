import React from 'react';
import Home from './Home/Home';
import Objectifs from './Objectifs/Objectifs';
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
        <Objectifs />
        <Portfolio />
        <About />
        <Contact />

      {/* <Footer /> */}
      </div>
    </>
  );
};
export default Sections;