import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';



const Portfolio = () => {


  return (
    <section id="sectionPortfolio">

      <ScrollTo to="sectionCompetences" classn="scroll-to-prev-btn" />

      <div className="row section-content">
        <div className="col-12">
          <h1>Portfolio</h1>
        </div>
      </div>

      <ScrollTo to="sectionAbout" classn="scroll-to-next-btn" />

    </section>
  );
};

export default Portfolio;
