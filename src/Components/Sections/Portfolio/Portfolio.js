import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import VallenaImg from '../../../Scss/img/vallena-affiche.jpg';
import VallenaLogo from '../../../Scss/img/Logo-Vallena.svg';
import np2cLogo from '../../../Scss/img/Logo-np2c';
import ModalProject from '../../GeneralComponents/Modal_Projects';



const Portfolio = () => {
  // const data = []
  const [modalShow, setModalShow] = React.useState(false);

  const [backG, setBackG] = React.useState()
  const theme = localStorage.getItem('theme');
  
  React.useEffect(() => {
    if (theme !== 'light') {
      setBackG("rgba(0, 0, 0, 0.2)")
    } else { setBackG("rgba(255, 255, 255, .8)")}
  }, [theme])
  
  


  return (
    <section id="sectionPortfolio">

      <div className="row justify-content-center section-content">
      <ScrollTo to="sectionObjectifs" classn="scroll-to-prev-btn" />

        <div className="col-12">
          <h3>Mes Travaux</h3>
        </div>

        <div className="col-12 portfolio-content">
          <div className="row justify-content-center text-center">

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-4 portfolio-card" style={{ backgroundColor: backG }}>
                <img src={VallenaImg} alt="vallena-affiche" className="img-fluid" />
              </div>
            </div>

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-4 portfolio-card" style={{backgroundColor:backG}}>
                <img src={VallenaLogo} alt="vallena-logo" className="img-fluid" />
              </div>
            </div>

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-4 portfolio-card" variant="primary" onClick={() => setModalShow(true)} style={{ backgroundColor: backG }}>
                <img src={np2cLogo.w} alt="np2cLogo" className="img-fluid" />
              </div>

              <ModalProject
                show={modalShow}
                onHide={() => setModalShow(false)}
                np2clogo={np2cLogo}
              />

            </div>

          </div>
        </div>

      <ScrollTo to="sectionAbout" classn="scroll-to-next-btn" />
      </div>

    </section>
  );
};

export default Portfolio;
