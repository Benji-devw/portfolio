import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import ScrollAnimation from 'react-animate-on-scroll';


const Home = () => {

  


  return (
    <section id="sectionHome">

      <div className="row align-items-center justify-content-center section-content">


        <div className="back-screen">
          <div className="back-screen-content"></div>
        </div>


        <div className="col text-center">

          <ScrollAnimation animateIn='fadeIn' delay={600}>
            <h2>
              Benjamin NAVARRO
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn='fadeIn' delay={1000}>
          <h1>DEVELOPPEUR WEB</h1>
          </ScrollAnimation>          
 
        </div>



      </div>

      <ScrollTo to="sectionCompetences" classn="scroll-to-next-btn"/>

    </section>
  );
};

export default Home;
