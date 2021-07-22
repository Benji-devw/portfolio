import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';


const Competences = () => {


  return (
    <section id="sectionCompetences">

      <ScrollTo to="sectionObjectifs" classn="scroll-to-prev-btn" />


      <div className="row section-content">
        <div className="col-12">
            <h1>Compétences</h1>
        </div>
      </div>



      <ScrollTo to="sectionPortfolio" classn="scroll-to-next-btn" />

    </section>
  );
};

export default Competences;
