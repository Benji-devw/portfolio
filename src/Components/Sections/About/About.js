import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';



const About = () => {


  return (
    <section id="sectionAbout">

      <ScrollTo to="sectionPortfolio" classn="scroll-to-prev-btn" />

      <div className="row section-content">
        <div className="col-12">
          <h1>About me</h1>
        </div>
      </div>

      <ScrollTo to="sectionContact" classn="scroll-to-next-btn" />

    </section>
  );
};

export default About;
