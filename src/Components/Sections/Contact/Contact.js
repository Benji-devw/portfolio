import React, {useState, useEffect} from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
import emailjs from 'emailjs-com';
import git from '../../../assets/GitHub-Mark-64px.png';
import codeingame from '../../../assets/codingame-1.svg';
import linkedin from '../../../assets/linkedin.svg';
import {RiMailSendLine, RiErrorWarningLine} from 'react-icons/ri';
// import ReCAPTCHA from "react-google-recaptcha";


const Contact = () => {

  const theme = localStorage.getItem('theme');
  const [fromSendValid, setFormSendValid] = useState(false)
  const [formSendError, setFormSendError] = useState(false)
  const [sendTry, setsendTry] = useState(false)

  const [formInputError, setFormInputError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  // const [reCaptcha, setRecaptcha] = useState(false)
  // function recaptchaCheck(value) {
  //   if (value !== null) {
  //     setRecaptcha(true);
  //   }
  // }

  function sendEmail(e) {
    e.preventDefault();

    if (name.length < 1 || !name.match(/^[a-zA-Z]*$/)) {
      setFormInputError("Champ NAME invalide !");
      return;
    } 
    if (!email.match(/\S+@\S+\.\S+/)) {
      setFormInputError("Champ EMAIL invalide !");
      return;
    }
    if (message.length < 1) {
      setFormInputError("Champ MESSAGE invalide !");
    }  
    else {
      // let massageUpdate = message.replace(/(?:\r\n|\r|\n)/g, '<br />')
      setFormInputError("");
      setsendTry(true)

      emailjs.sendForm('service_p30kj4b', 'template_vt5vkmk', e.target, 'user_P4qxKysnq3VXzYotI8OQc')
      .then((result) => {
        setFormSendValid(true);
        setFormSendError(false)
        setsendTry(false)
        document.getElementById("form-contact").reset();
        }, 
        (error) => {
          setFormSendValid(false);
          setFormSendError(true)
          setsendTry(false)
          });
    
    }
  }

   
  
  const RedirectTo = (url, title) => {
    if (window.confirm(`Vous allez être redirigé vers ${title}`)) {
      window.open(url);
    }
  }

  useEffect(() => {
    if (fromSendValid && !formSendError) {
      const interval = setInterval(() => {
        setFormSendValid(false)
      }, 4000);
      return () => clearInterval(interval);
    }

  }, [fromSendValid, formSendError]);



  return (
    <section id="sectionContact" style={{minHeight:"100vh"}}>

      {fromSendValid  ? (
        <div className={`send-success text-center p-2 ${fromSendValid ? 'slideInRight in-out' : 'fadeOut'}`}>
          <span> <RiMailSendLine /> Message Envoyé. <br /> Merci pour votre visite ! </span>
        </div>
      ) : (
        <div onClick={() => setFormSendError(false)} className={`send-error text-center p-2 ${formSendError ? 'slideInRight in-out' : 'hide-div'}`}>
          <span> <RiErrorWarningLine /> Error ! </span>
      </div>
      )}

      <div className="row section-content">
        <div className="col-12 contact" 
        // style={{backgroundColor: theme === "light" ? "#222222" : "#F5F5F5", color: theme === "light" ? "#F5F5F5" : "#222222"}}
        >

          <ScrollTo to="sectionAbout" classn="scroll-to-prev-btn" />

          <div className="row">
            <div className="col-12" style={{ color: theme === "light" ? "#222222" : "#F5F5F5"}}>
              <h3>Contact</h3>
            </div>
          </div>

          <div className="row align-items-center justify-content-center contact-content">
            <div className="col-lg-6 col-md-8 col-sm-10 p-3 form-content" style={{ color: theme === "light" ? "#222222" : "#F5F5F5"}}>

              <form   className="form-row" id="form-contact" onSubmit={(e) => sendEmail(e)}>
                <input type="hidden" name="contact_number" />
                <input type="text" name="user_name" placeholder="Name" className="form-control"
                onChange={e => setName(e.target.value)} />
                <input type="email" name="user_email" placeholder="name@example.com" className="form-control"
                onChange={e => setEmail(e.target.value)} />
                <textarea as="textarea" name="message" placeholder="Message" className="form-control"
                  style={{minHeight:'150px', maxHeight: '500px' }}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                  <div className="alert-form"><span>{formInputError}</span></div>
                  <input  type='submit' value="Envoyer" className="btn send-btn m-3" style={{display: sendTry ? 'none' : 'block' }} />
                  <div className="lds-ellipsis m-3 fadeIn" style={{display: sendTry ? 'block' : 'none' }}><div></div><div></div><div></div><div></div></div>
              </form >
                {/* <ReCAPTCHA
                className="mt-1"
                  sitekey="6Le1LXYcAAAAAJcQEnv2jy7KGIP3z76MJi4ljHr-"
                  onChange={recaptchaCheck}
                /> */}

            </div>

            <div className="col-12"></div>

            <div className="col-6 m-3 text-center icon-logo">
              <div className="row align-items-center justify-content-center">
                <div className="col-2">
                <img src={linkedin} alt='git' title='' onClick={() => RedirectTo('https://www.linkedin.com/in/benjamin-navarro-586713220/', 'www.linkedin.com/in/benjamin-navarro')}/>
                </div>
                <div className="col-2">
                <img src={git} alt='git' onClick={() => RedirectTo('https://github.com/Benji-devw', 'www.github.com/Benji-devw')}/>
                </div>
                <div className="col-2">
                  <img src={codeingame} alt='cig' onClick={() => RedirectTo('https://www.codingame.com/profile/8128c71052e71eada45ebe8b6fa522bd4316153', 'www.codingame.com/profile/benjamin')}/>
                </div>
              </div>
            </div>

            <div className="col-12 text-center">
             <p> 2021 - Développé par Benjamin Navarro</p>
            </div>

          </div>

        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-btop" 
        height='150xp'
      >
        <path fill={theme === "light" ? "#222222" : "#F5F5F5"} 
          fillOpacity="1" 
          d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg> */}

    </section>
  );
};

export default Contact;