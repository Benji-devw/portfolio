import React, { useEffect, useState } from 'react';
import SlideSlick from "../../GeneralComponents/Slide-Slick";
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ReactViewer from '../../GeneralComponents/React_Viewer';
import CircleWave from './CircleWave';
import ModalProject from '../../GeneralComponents/Modal_Projects';
import VallenaImg1 from '../../../assets/Portfolio/Vallena/perspective-1.jpg';
import VallenaImg2 from '../../../assets/Portfolio/Vallena/perspective-2.jpg';
import VallenaImg3 from '../../../assets/Portfolio/Vallena/perspective-3.jpg';
import VallenaLogo from '../../../assets/Portfolio/Vallena/Logo-Vallena.svg';
import CircleLogo from '../../../assets/Portfolio/Vallena/LogoCircle.svg';
import np2cLogo from '../../../assets/Portfolio/Logo-np2c';
import csi from '../../../assets/Portfolio/3csi';
import kokmoka from '../../../assets/Portfolio/Kokmoka';
import test from '../../../assets/Portfolio/Illustration';
import LogoCard from './LogoCard';

import CoutureLogo1 from '../../../assets/Portfolio/Vallena/Logos1_.svg';
import CoutureLogo1Back from '../../../assets/Portfolio/Vallena/Logos1_back.svg';
import CoutureLogo2 from '../../../assets/Portfolio/Vallena/Logos2_.png';
import CoutureLogo2Back from '../../../assets/Portfolio/Vallena/Logos2_back.png';
import CoutureLogo3 from '../../../assets/Portfolio/Vallena/Logos3_.svg';
import CoutureLogo3Back from '../../../assets/Portfolio/Vallena/Logos3_back.svg';


console.log(test);

const Portfolio = () => {

  const [data, setData] = useState();

  const [addClass1, setAddClass1] = useState(false)
  const [addClass2, setAddClass2] = useState(false)
  const [addClass3, setAddClass3] = useState(false)

  const [mainP, setMainP] = useState('main')
  const [secondP, setSecondP] = useState('second')
  const [thirdP, setThirdP] = useState('third')

  const moveUp = () => {
    setMainP(thirdP)
    setSecondP(mainP)
    setThirdP(secondP)
  }

  const theme = localStorage.getItem('theme');
  const [backG, setBackG] = useState()
  useEffect(() => {
    if (theme !== 'light') {
      setBackG("#F5F5F5")
    } else { setBackG("#222222")}
  }, [theme])
  
  const RedirectTo = (url, title) => {
    if (window.confirm(`Vous allez être redirigé vers ${title}`)) {
      window.open(url);
    }
  }

  // const [refVall, isVisible] = useInView({ threshold: .4 });
  const [refLogos, isibleLogos] = useInView({ threshold: 1 });
  const [refModals, isibleModals] = useInView({ threshold: .4 });
  const slideTop = {
    visible: { opacity: 1, y: 0, },
    hidden: { opacity: 0, y: 50, },
  }; 
  const slideLeft = {
    visible: { opacity: 1, x: 0, },
    hidden: { opacity: 1, x: 0, },
  }; 


  return (
    <section id="sectionPortfolio">
                    

      <div className="row justify-content-center section-content">

        <div className="col-12 mt-5">
          <h3>Travaux</h3>
        </div>

        <div className="col-12 ">

          <div className="row align-items-center vallena-web" style={{minHeight:"80vh"}}>

              <div className="col-md-4 web-parallax">
              <Parallax y={[300, -500]} tagOuter="figure">
                <h4> WEB </h4>
                </Parallax>

                <div className="wave-circle">
                    <CircleWave />
                </div>
              </div>

              <div className="col-md-8 vallena-affiche-web">

                <div className={`${thirdP}`}>
                    <img src={VallenaImg3} alt="1" className="img-fluid"
                    onClick={() => {
                      if (thirdP === 'main') { RedirectTo("https://vallena.fr/", 'www.vallena.fr')} else {moveUp()}
                    }}
                    />
                </div>

                <div className={`${mainP}`}>
                    <img src={VallenaImg1} alt="2" className="img-fluid "
                    onClick={() => {
                      if (mainP === 'main') {RedirectTo("https://vallena.fr/", 'www.vallena.fr')} else {moveUp()}
                    }}
                    />
                </div>

                <div className={`${secondP}`}>
                <img src={VallenaImg2} alt="3" className="img-fluid"
                  onClick={() => {
                    if (secondP === 'main') {RedirectTo("https://vallena.fr/", 'www.vallena.fr')} else {moveUp()}
                  }}
                 />
                </div>

              </div>
          </div>


          
          <motion.div
            ref={refLogos}
            variants={slideLeft}
            animate={isibleLogos ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
          <div className="row align-items-center logo-card">

            <div className="col-md-6" >
              <LogoCard logo={CircleLogo} bg={"#F5F5F5"} text={"Logo"} bgCircle="linear-gradient(to right, #00a7f0, #0091f4, #4976ef, #7b52dd, #a200bc)"/>
            </div>
            <div className="col-md-6">
              <LogoCard logo={VallenaLogo} bg={backG} text={"Vallena"}/>
            </div>
          </div>

          <div className="row align-items-center logo-vallena">
            <div className="col-md-4 logo-content">
              <img src={CoutureLogo1} alt="CoutureLogo2" className={`img-fluid logo`} onMouseEnter={() => setAddClass1(true) } onMouseLeave={() => setAddClass1(false)}/>
              <img src={CoutureLogo1Back} alt="CoutureLogo2Back" className={`img-fluid ${addClass1 ? "logo_back" : ""}`} />
            </div>
            <div className="col-md-4 logo-content"  >
              <img src={CoutureLogo2} alt="CoutureLogo2" className={`img-fluid logo`} onMouseEnter={() => setAddClass2(true) } onMouseLeave={() => setAddClass2(false)}/>
              <img src={CoutureLogo2Back} alt="CoutureLogo2Back" className={`img-fluid ${addClass2 ? "logo_back" : ""}`} />
            </div>
            <div className="col-md-4 logo-content">
              <img src={CoutureLogo3} alt="CoutureLogo2" className={`img-fluid logo`} onMouseEnter={() => setAddClass3(true) } onMouseLeave={() => setAddClass3(false)} />
              <img src={CoutureLogo3Back} alt="CoutureLogo2Back" className={`img-fluid ${addClass3 ? "logo_back" : ""}`} />
            </div>
          </div>
          </motion.div>


          <div className="row align-items-center">
            <div className="col-md-6">
                <SlideSlick 
                data={np2cLogo}
              />
            </div>              
            <div className="col-md-6">
              <SlideSlick 
                data={csi}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <ReactViewer data={test} />
          </div>   
            


          <div className="row mt-5 align-items-center justify-content-center contributions" style={{minHeight:"90vh"}}>
            <div className="col-12">
              <h3>Contributions</h3>
            </div>
          <motion.div
            ref={refModals}
            variants={slideTop}
            animate={isibleModals ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='row'
          >
            <div className="col-xl-4 col-md-6 p-3">
              <div className="row portfolio-card-contrib"
                onClick={() => { setData({ kokmoka: kokmoka.b}); }}>
                <ModalProject
                  preview={kokmoka.b}
                  data={data}
                  classn={"modal-preview-anim"}
                />
              </div>
            </div>           
            
             <div className="col-xl-4 col-md-6 p-3">
              <div className="row portfolio-card-contrib"
                onClick={() => { setData({ speedo: kokmoka.d}); }}>
                <ModalProject
                  preview={kokmoka.d}
                  data={data}
                  classn={"modal-preview-anim"}
                />
              </div>
            </div>             
            
            <div className="col-xl-4 col-md-6 p-3">
              <div className="row portfolio-card-contrib">
                <img src={kokmoka.e} alt="ffmi" className="img-fluid modal-preview" onClick={() => RedirectTo("https://www.ffmi.asso.fr/", "www.ffmi.asso.fr")} />
              </div>
            </div>            
            
            <div className="col-xl-4 col-md-6 p-3">
              <div className="row portfolio-card-contrib">
                  <img src={kokmoka.f} alt="aleph" className="img-fluid modal-preview" onClick={() => RedirectTo("https://www.aleph-ecriture.fr/", "www.aleph-ecriture.fr")}/>
              </div>
            </div>
          </motion.div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Portfolio;
