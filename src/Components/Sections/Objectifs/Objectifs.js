import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';



const Objectifs = () => {


  return (
    <section id="sectionObjectifs">

      <ScrollTo to="sectionHome" classn="scroll-to-prev-btn" />


      <div className="row section-content">
        <div className="col-12">
            <h1>Objectifs</h1>
        </div>
      </div>



      <ScrollTo to="sectionCompetences" classn="scroll-to-next-btn" />

    </section>
  );
};

export default Objectifs;
