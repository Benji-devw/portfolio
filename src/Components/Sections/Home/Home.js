import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import ParticulesOndulation from './ParticulesOndulation'

const Home = () => {
  return (
    <section id="sectionHome" className="pb-0">
      <ParticulesOndulation />
      <div style={{marginTop:"-2rem"}}>
        <ScrollTo to="sectionCompetences" classn="scroll-to-next-btn"/>
      </div>

    </section>
  );
};

export default Home;
