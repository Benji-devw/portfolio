import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'

import git from '../../../assets/GitHub-Mark-64px.png';
import codeingame from '../../../assets/codingame-1.svg';
import linkedin from '../../../assets/linkedin.svg';



const Contact = () => {

  const theme = localStorage.getItem('theme');
  
  const RedirectTo = (url) => {
    if (window.confirm(`Vous allez être redirigé vers ${url}`)) {
      window.open(url);
    }
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_p30kj4b', 'template_vt5vkmk', e.target, 'user_P4qxKysnq3VXzYotI8OQc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <section id="sectionContact" style={{minHeight:"100vh"}}>

      <div className="row section-content">

        <div className="col-12 contact" 
        // style={{backgroundColor: theme === "light" ? "#222222" : "#F5F5F5", color: theme === "light" ? "#F5F5F5" : "#222222"}}
        >
          <ScrollTo to="sectionAbout" classn="scroll-to-prev-btn" />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-btop" >
            <path fill={theme === "light" ? "#F5F5F5" : "#222222"} 
              fillOpacity="1" 
              d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg>

          <div className="row">
          <div className="col-12" style={{ color: theme === "light" ? "#222222" : "#F5F5F5"}}>
            <h3>Contact</h3>
          </div>
          </div>

          <div className="row align-items-center justify-content-center contact-content">

            <div className="col-lg-6 col-md-8 col-sm-10 p-3 form-content" style={{ color: theme === "light" ? "#222222" : "#F5F5F5"}}>
            <Form.Group controlId="exampleForm.ControlTextarea1" className="contact-form" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />
              <Form.Control type="text" name="user_name" placeholder="Name" className="form-input" />
              <Form.Control type="email" name="user_email" placeholder="name@example.com" className="form-input"/>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                className="form-input"
                style={{height:'150px', maxHeight: '200px' }}
              />
          
              <input type="submit" value="Envoyer" className="btn send-btn m-3 mx-auto" />
            </Form.Group>
            </div>

            <div className="col-12"></div>


            <div className="col-6 m-3 text-center icon-logo">
              <div className="row align-items-center justify-content-center">
                <div className="col-2">
                <img src={linkedin} alt='git' onClick={() => RedirectTo('https://www.linkedin.com/in/benjamin-navarro-586713220/')}/>
                </div>
                <div className="col-2">
                <img src={git} alt='git' onClick={() => RedirectTo('https://github.com/Benji-devw')}/>
                </div>
                <div className="col-2">
                  <img src={codeingame} alt='cig' onClick={() => RedirectTo('https://www.codingame.com/profile/8128c71052e71eada45ebe8b6fa522bd4316153')}/>
                </div>
              </div>
            </div>

            <div className="col-12 text-center">
             <p> Développé par Benjamin Navarro</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;
