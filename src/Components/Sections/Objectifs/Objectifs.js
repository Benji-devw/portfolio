import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import { Parallax } from 'react-scroll-parallax';

import wave from '../../../assets/Objectifs/Wave.png';
import surf from '../../../assets/Objectifs/Surf.png';
import fish from '../../../assets/Objectifs/Fish.png';



const Objectifs = () => {


  return (
    <section id="sectionObjectifs">

      <div className="row align-items-center justify-content-center section-content" style={{minHeight:"100vh"}}>

      <ScrollTo to="sectionCompetences" classn="scroll-to-prev-btn" />

        <div className="col-12">
            <h3>Objectifs</h3>
        </div>

        <div className="col-10 col-md-8 objectifs-content text-center">
          <p>
          <span>M</span>a formation et ma passion dans le développement web ainsi que la logique des technologies MERN, m'ont convaincu de la spécialisation que je souhaite entreprendre.<br />
          <span>M</span>es expériences dans le monde du travail, ce que j'ai pu acquérir dans mon parcours et la maîtrise de certains langages me permettront de m'adapter, de m'intégrer et d'évoluer au plus vite.
          </p>
          <br /> <br />
          <p>
            <span>M</span>es ambitions de vouloir m'investir, d'en apprendre toujours plus et l'intérêt que je porte à ce métier, m'intéresse et me motive extrèmement à vouloir intégrer ce millieu.<br />
            <span>A</span>yant peu d'expérience, je mets un point d'honneur sur mon apprentissage personnel avancé de ce qui me sera confié !
          </p>
          <br /> <br />
          <p>
            <span>M</span>es objectifs principaux se base sur l'apprentissage, l'évolution, la connaissance, l'échange, la passion, la confiance afin de m'intégrer au mieux et faire de cette passion mon métier.<br />
          </p>
        </div>

        <div className="objectifs-parallax">

          <div className="wave">
            <img src={wave} alt="yellow" className="img-fluid" />
          </div>

           <div className="wave surf">
              <Parallax className="custom-class" y={[0, 180]} tagOuter="figure">
                <img src={surf} alt="yellow" className="img-fluid" />
              </Parallax>
          </div>

          <div className="fish">
            <Parallax className="custom-class" x={[0, 200]} y={[0, 200]} tagOuter="figure">
              <img src={fish} alt="yellow" className="img-fluid" />
            </Parallax>
          </div>

        </div>

      <ScrollTo to="sectionPortfolio" classn="scroll-to-next-btn" />
      </div>

    </section>
  );
};

export default Objectifs;
