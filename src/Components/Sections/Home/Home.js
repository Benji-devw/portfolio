import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';


const Home = () => {


  return (
    <section id="sectionHome">

      <div className="row align-items-center section-content">
        <div className="col">
          <h1>HOME</h1>
        </div>
      </div>

      <ScrollTo to="sectionObjectifs" classn="scroll-to-next-btn"/>

    </section>
  );
};

export default Home;
