import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import ScrollAnimation from 'react-animate-on-scroll';
import { GrValidate } from 'react-icons/gr';


const Competences = () => {
  
  return (
    <section id="sectionCompetences">


      <div className="row p-2 m-2 section-content">
      <ScrollTo to="sectionHome" classn="scroll-to-prev-btn" />
        <div className="col-12">
          <h3>Mes Compétences</h3>
        </div>

        <div className="col-md-6 p-2 competences-domaine">
          <h4>Domaines de compétences Web</h4>
          <p><span><GrValidate /></span>Intégration web dans le respect des normes W3C</p>
          <p><span><GrValidate /></span>Bonnes pratiques de la « qualité web » (référencement, performance, ergonomie)</p>
          <p><span><GrValidate /></span>Concevoir des pages web intéractives, responsives et des applications mobiles</p>
          <p><span><GrValidate /></span>Créer, structurer et exploiter une BDD SQL/NOSQL</p>
          <p><span><GrValidate /></span>Réaliser un site web ou un blog à l’aide de CMS</p>
          <p><span><GrValidate /></span>Mise en place hébergement, DNS, SSH</p>

          <h4>Domaines de compétences Graphique</h4>
          <p><span><GrValidate /></span>Gestion des images et images vectorielle</p>
          <p><span><GrValidate /></span>Crétion logos - Cartes de visites - Flyers - Brochures</p>

        </div>

        <div className="col-md-6 p-2 competences-icons">
          <h4>Développement Web</h4>
          <div className="row">
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>HTML/CSS/SASS - Bootstrap</p> </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>Mongo/Express/React/Node</p> </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>JavaScript - Jquery</p> </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>php - Symphony - WordPress</p> </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>AWS - Postman - Git - Paypal </p> </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>SQL/Mysql</p> </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>Windows - Linux</p> </div>
            </ScrollAnimation>

            <h4>Conception Graphique</h4>
            <ScrollAnimation animateIn='fadeIn' delay={100}>
              <div className="col-12 competences-icon"> <p>Photophop</p> </div>
              <div className="col-12 competences-icon"> <p>Indesign</p> </div>
              <div className="col-12 competences-icon"> <p>XD</p> </div>
            </ScrollAnimation>
          </div>
        </div>

      <ScrollTo to="sectionObjectifs" classn="scroll-to-next-btn" />
      </div>


    </section>
  );
};

export default Competences;
