import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import { GrValidate } from 'react-icons/gr';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import img1 from '../../../assets/Competences/Parallax1.png';
import img2 from '../../../assets/Competences/Parallax2.png';
import webDesignBack from '../../../assets/Competences/WebDesignBack.png';
import webDesignFond from '../../../assets/Competences/WebDesignFond.png';
import webDesignTextRight from '../../../assets/Competences/WebDesignTextRight.png';
import webDesignTextLeft from '../../../assets/Competences/WebDesignTextLeft.png';


function ProgressBar(props) {
  const [ref, isVisible] = useInView({ threshold: .5 });
  const styleAnim = {
    in: {
      width: props.val,
    },
    out: {
      width: "0%",
    },
  };  
  return (
    <div ref={ref} className="percent"> 
    <motion.div className={props.class} 
      variants={styleAnim}
      animate={isVisible ? "in" : "out"}
      transition={{ duration: 1, ease: "easeOut" }}
    ></motion.div> 
  </div>
  )
}



const Competences = () => {
  
  const [refWeb, isVisible] = useInView({ threshold: .5 });
  const [refDesign, isVisible2] = useInView({ threshold: .5 });
  const variants1 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };  
  const variants2 = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  const variants3 = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };
  const variants4 = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -50,
    },
  };



  return (
    <section id="sectionCompetences">

      <div className="row">
      <ScrollTo to="sectionHome" classn="scroll-to-prev-btn" />

        <div className="col-12" style={{minHeight:"90vh"}}>
          <div className="row align-items-center justify-content-center section-content">

            <div className="col-md-6 p-3 competences-images" style={{position:"relative"}}>
              <motion.div
                ref={refWeb}
                variants={variants1}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <img src={img1} alt="im1" className="img-fluid"/>
              </motion.div>

              <motion.div
                ref={refWeb}
                variants={variants2}
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{position:"absolute", top:"0"}}
              >
                <img src={img2} alt="img2" className="img-fluid"/>
              </motion.div>
            </div>

            <div className="col-md-6 p-3 competences-domaine">
              <h4 style={{textAlign:"left"}}>Domaines de compétences Web</h4>
              <br />
              <p><span><GrValidate /></span>Intégration web dans le respect des normes W3C</p>
              <p><span><GrValidate /></span>Bonnes pratiques de la « qualité web » (référencement, performance, ergonomie)</p>
              <p><span><GrValidate /></span>Concevoir des pages web intéractives, dynamique et responsives</p>
              <p><span><GrValidate /></span>Créer, structurer et exploiter une BDD SQL/NOSQL</p>
              <p><span><GrValidate /></span>Réaliser un site web ou un blog à l’aide de CMS</p>
              <p><span><GrValidate /></span>Mise en place hébergement, DNS, SSH, NGINX, PM2, MongoDB</p>
              <p><span><GrValidate /></span>Git, Postman, MongoDBCompass, NPM </p>
              <br />
            </div>

            <div className="col-12 competences-progress-bar">
              <div className="row">

                <div className="col-md-6">
                  <div className="col-10 mx-auto skills" >
                    <span className="name">HTML / CSS / SASS / Bootstrap</span>
                    <ProgressBar class="progress" val={"80%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">JavaScript / Jquery</span>
                    <ProgressBar class="progress" val={"70%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">Mongo / Express / React / Node</span>
                    <ProgressBar class="progress" val={"70%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">php / Symphony / WordPress</span>
                    <ProgressBar class="progress" val={"50%"}/>
                  </div>
                </div>

                <div className="col-md-6">              
                  <div className="col-10 mx-auto skills" >
                    <span className="name">AWS / Postman / Git / Paypal</span>
                    <ProgressBar class="progress" val={"70%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">SQL / Mysql / Nosql</span>
                    <ProgressBar class="progress" val={"80%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">Three / Three fiber</span>
                    <ProgressBar class="progress" val={"40%"}/>
                  </div>                  
                  <div className="col-10 mx-auto skills" >
                    <span className="name">Linux</span>
                    <ProgressBar class="progress" val={"60%"}/>
                  </div>
                </div>

              </div>
            </div>
            
          </div>    
        </div>
            
        <div className="col-12" style={{minHeight:"90vh"}}>
          <div className="row align-items-center justify-content-center section-content">


            <div className="col-md-6 p-3 competences-domaine">
              <h4 style={{textAlign:"left"}}>Domaines de compétences Graphique</h4>
              <br />
              <p><span><GrValidate /></span> Gestion des images et images vectorielles</p>
              <p><span><GrValidate /></span> Maquettage web, optimisation, performance</p>
              <p><span><GrValidate /></span> Logos - Cartes de visites - Flyers - Brochures - Bannières</p>
              <p><span><GrValidate /></span> Modélisation 3D</p>
            </div>

            <div className="col-md-6 p-3 text-center competences-images" style={{position:"relative"}}>
              <motion.div
                ref={refDesign}
                variants={variants2}
                animate={isVisible2 ? "visible" : "hidden"}
                transition={{ duration: .5, ease: "easeOut"  }}
                style={{position:"relative", top:"0rem"}}
              >
                <img src={webDesignBack} alt="im1" className="img-fluid"/>
              </motion.div>

              <motion.div
                ref={refDesign}
                variants={variants1}
                animate={isVisible2 ? "visible" : "hidden"}
                transition={{ duration: .5, ease: "easeOut"  }}
                style={{position:"absolute",top:"0"}}
              >
                <img src={webDesignFond} alt="img2" className="img-fluid"/>
              </motion.div>

              <motion.div
                ref={refDesign}
                variants={variants4}
                animate={isVisible2 ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeOut"  }}
                style={{position:"absolute", top:"0rem"}}
              >
                <img src={webDesignTextLeft} alt="img3" className="img-fluid"/>
              </motion.div>

              <motion.div
                ref={refDesign}
                variants={variants3}
                animate={isVisible2 ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeOut"  }}
                style={{position:"absolute", top:"0rem"}}
              >
                <img src={webDesignTextRight} alt="img4" className="img-fluid"/>
              </motion.div>
            </div>

            <div className="col-12 competences-progress-bar">
              <div className="row justify-content-center">

                <div className="col-md-6">
                  <div className="col-10 mx-auto skills" >
                    <span className="name">Photophop</span>
                    <ProgressBar class="progress-design" val={"70%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">Indesign</span>
                    <ProgressBar class="progress-design" val={"70%"}/>
                  </div>
                  <div className="col-10 mx-auto skills" >
                    <span className="name">XD</span>
                    <ProgressBar class="progress-design" val={"50%"}/>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>


      <ScrollTo to="sectionObjectifs" classn="scroll-to-next-btn" />
      </div>


    </section>
  );
};

export default Competences;
