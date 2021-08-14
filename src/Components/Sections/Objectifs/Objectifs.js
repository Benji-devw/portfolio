import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';



const Objectifs = () => {


  return (
    <section id="sectionObjectifs">

      <div className="row align-items-center justify-content-center section-content">
      <ScrollTo to="sectionCompetences" classn="scroll-to-prev-btn" />

        <div className="col-12">
            <h3>Mes Objectifs</h3>
        </div>
        <div className="col-10 objectifs-content text-center">
          <p>
          <span>M</span>a formation et ma passion dans le développement web ainsi que la logique des technologies MERN, m'ont convaincu de la spécialisation que je souhaite entreprendre.<br />
          <span>M</span>es expériences dans le monde du travail, ma maîtrise de certains langages et ce que j'ai pu acquérir dans mon parcours, me permettront de m'adapter, de m'intégrer et d'évoluer au plus vite.
          </p>
          <br /> <br />
          <p>
            <span>M</span>es ambitions de vouloir m'investir, d'en apprendre toujours plus et l'intérêt que je porte à ce métier, m'intéresse et me motive extrèmement à vouloir intégrer ce millieu.<br />
            <span>A</span>yant peu d'expérience, je mets un point d'honneur sur mon apprentissage personnel avancé de ce qui me sera confié !
          </p>
          <br /> <br />
          <p>
            <span>M</span>es objectifs principaux se base sur l'apprentissage, l'évolution, la connaissance, l'échange, la passion, la confiance afin de m'adapter et de m'intégrer au mieux au métier de Développeur web.<br />
          </p>
        </div>

      <ScrollTo to="sectionPortfolio" classn="scroll-to-next-btn" />
      </div>

    </section>
  );
};

export default Objectifs;
