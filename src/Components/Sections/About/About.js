import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Aboutbtn from '../../GeneralComponents/About_Btn';
import costum from '../../../assets/About/Costum.png';


const About = () => {

  const theme = localStorage.getItem('theme');
  const [backG, setBackG] = React.useState()
  React.useEffect(() => {
    if (theme !== 'light') {
      setBackG("#F5F5F5")
    } else { setBackG("#222222")}
  }, [theme])

  const [refHandL, isibleHandL] = useInView({ threshold: .1 });
  const [refHandR, isibleHandR] = useInView({ threshold: .1 });
  const slideRight = {
    visible: { x: 0 },
    hidden: { x: -100 },
  }; 
  const slideLeft = {
    visible: {  x: 0 },
    hidden: { x: 100 },
  }; 

  return (
    <section id="sectionAbout">

      <div className="row section-content" style={{minHeight:"100vh"}}>

        <div className="col-12 mt-5">
          <h3>À propos de moi</h3>
        </div>

        <div className="col-12 ">

          <div className="row align-items-center logo-card">

            <div className="col-md-4">
              <Aboutbtn backG={backG} cv={'/CV_Numerique_2021.pdf'}>
              CV Numerique
              </Aboutbtn>
              <motion.div
                ref={refHandL}
                variants={slideLeft}
                animate={isibleHandL ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 768"
                    width="100%" height="120px"
                  >
                  <g
                    fill={backG}
                    stroke='#000000'
                    strokeMiterlimit="10"
                    >
                      <path className="st0" d="M968.4,385.9c-11.9-11.9-42.6-4.7-122.1-62.5c-98.3-71.5-107.2-68.5-157.8-71.5c-42.1-2.5-99.4,16.4-175.7,44.7
                        c-184.6,68.5-224.7,33.9-235.3,83.4c-8.9,41.7,47.7,44.7,134,26.8c41-8.5,61.4-20.9,104.2-14.9c35.2,4.9,66.8,21.5,65.5,26.8
                        c-1.2,4.8-28.4-5.4-68.5-6c-87.2-1.1-110.8,34.4-181.7,23.8c-14.3-2.1-55.8-7.4-65.5-32.8c-14.9-38.7,8.1-43.4,0-59.6
                        c-3-6-23.8-14.9-74.5-59.6c-36.6-32.3-87.6-70.2-101.3-56.6c-3,3-5.6,20-11.9,17.9c-8.9-3-20.8-11.9-29.8-3
                        c-18.1,18.1-3,38.7,14.9,62.5c39.4,52.5,35,73.4,83.4,110.2c109.2,83,238.3,143.1,288.9,140c143-8.9,172.7-62.5,256.1-59.6
                        c108.8,3.9,163.8,74.5,202.5,68.5C960.1,554.4,1011.8,429.3,968.4,385.9z"/>
                  </g>
                </svg>
                </motion.div>
            </div>

            <div className="col-md-4 p-3">
              <img src={costum} alt="e" className="img-fluid" />
            </div>

            <div className="col-md-4 ">
              <Aboutbtn backG={backG} cv={'/CV_Basic_2021.pdf'}>
                CV Basique
              </Aboutbtn>
              <motion.div
                ref={refHandR}
                variants={slideRight}
                animate={isibleHandR ? "visible" : "hidden"}
                transition={{ duration: 1, ease: "easeOut" }}
              >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1024 768"
                    width="100%" height="120px"
                  >
                  <g
                    fill={backG}
                    stroke='#000000'
                    strokeMiterlimit="10"
                    >
                      <path className="st0" d="M56,385.9c11.9-11.9,42.6-4.7,122.1-62.5c98.3-71.5,107.2-68.5,157.8-71.5c42.1-2.5,99.4,16.4,175.7,44.7
                        c184.6,68.5,224.7,33.9,235.3,83.4c8.9,41.7-47.7,44.7-134,26.8c-41-8.5-61.4-20.9-104.2-14.9c-35.2,4.9-66.8,21.5-65.5,26.8
                        c1.2,4.8,28.4-5.4,68.5-6c87.2-1.1,110.8,34.4,181.7,23.8c14.3-2.1,55.8-7.4,65.5-32.8c14.9-38.7-8.1-43.4,0-59.6
                        c3-6,23.8-14.9,74.5-59.6c36.6-32.3,87.6-70.2,101.3-56.6c3,3,5.6,20,11.9,17.9c8.9-3,20.8-11.9,29.8-3c18.1,18.1,3,38.7-14.9,62.5
                        c-39.4,52.5-35,73.4-83.4,110.2c-109.2,83-238.3,143.1-288.9,140c-143-8.9-172.7-62.5-256.1-59.6c-108.8,3.9-163.8,74.5-202.5,68.5
                        C64.3,554.4,12.6,429.3,56,385.9z"/>
                  </g>
                </svg>
                </motion.div>
            </div>

          </div>

        </div>


      </div>

    </section>
  );
};

export default About;
