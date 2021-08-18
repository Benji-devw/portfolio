import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import ModalProject from '../../GeneralComponents/Modal_Projects';
import VallenaImg from '../../../Scss/img/vallena-affiche2.jpg';
import VallenaLogo from '../../../Scss/img/Logo-Vallena.svg';
import np2cLogo from '../../../Scss/img/Logo-np2c';
import csi from '../../../Scss/img/3csi';
import kokmoka from '../../../Scss/img/Kokmoka'



const Portfolio = () => {

  // const data = []
  const [data, setData] = React.useState();
  
  const [backG, setBackG] = React.useState()
  const theme = localStorage.getItem('theme');
  
  React.useEffect(() => {
    if (theme !== 'light') {
      setBackG("rgba(0, 0, 0, 0.2)")
    } else { setBackG("rgba(255, 255, 255, .8)")}
  }, [theme])
  
  const RedirectTo = (url) => {
    if (window.confirm(`Vous allez être redirigé vers ${url}`)) {
      window.open(url);
    }
  }


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
                <div className="row p-2 portfolio-card" style={{ backgroundColor: backG }}>
                  <img src={VallenaImg} alt="vallena-affiche" className="img-fluid modal-preview" onClick={() => RedirectTo("https://vallena.fr/")} />
                </div>
            </div>

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-2 portfolio-card" style={{backgroundColor:backG}}
                onClick={() => { setData({VallenaLogo: VallenaLogo}); }}
                >
                <ModalProject
                  preview={VallenaLogo}
                  data={data}
                />
              </div>
            </div>

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-2 portfolio-card" variant="primary" style={{ backgroundColor: backG }} 
                onClick={() => { setData(np2cLogo); }}>
                <ModalProject
                  preview={np2cLogo.b}
                  data={data}
                />
              </div>
            </div>

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-2 portfolio-card" variant="primary" style={{ backgroundColor: backG }}
                onClick={() => { setData(csi); }}>
                <ModalProject
                  preview={csi.a}
                  data={data}
                  />
              </div>
            </div>



            <div className="col-12">
              <h3>Mes Contributions</h3>
            </div>

            <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-2 portfolio-card" variant="primary" style={{ backgroundColor: backG }}
                onClick={() => { setData({ kokmoka: kokmoka.b}); }}>
                <ModalProject
                  preview={kokmoka.a}
                  data={data}
                />
              </div>
            </div>           
            
             <div className="col-xl-4 col-md-6 p-3">
              <div className="row p-2 portfolio-card" variant="primary" style={{ backgroundColor: backG }}
                onClick={() => { setData({ speedo: kokmoka.d}); }}>
                <ModalProject
                  preview={kokmoka.c}
                  data={data}
                />
              </div>
            </div>             
            
            <div className="col-xl-4 col-md-6 p-3">
                <div className="row p-2 portfolio-card" variant="primary" style={{ backgroundColor: backG }}>
                  <img src={kokmoka.e} alt="ffmi" className="img-fluid modal-preview" onClick={() => RedirectTo("https://www.ffmi.asso.fr/")} />
                </div>
            </div>            
            
            <div className="col-xl-4 col-md-6 p-3">
                <div className="row p-2 portfolio-card" variant="primary" style={{ backgroundColor: backG }}>
                    <img src={kokmoka.f} alt="aleph" className="img-fluid modal-preview" onClick={() => RedirectTo("https://www.aleph-ecriture.fr/")}/>
                </div>
            </div>


          </div>
        </div>

      <ScrollTo to="sectionAbout" classn="scroll-to-next-btn" />
      </div>

    </section>
  );
};

export default Portfolio;
