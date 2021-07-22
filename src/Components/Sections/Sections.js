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
      <Objectifs />
      <Competences />
      <Portfolio />
      <About />
      <Contact />

    {/* <Footer /> */}
    </>
  );
};
export default Sections;