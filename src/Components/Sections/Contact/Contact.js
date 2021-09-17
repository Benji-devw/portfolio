import React, {useState, useEffect} from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
// import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form';
import git from '../../../assets/GitHub-Mark-64px.png';
import codeingame from '../../../assets/codingame-1.svg';
import linkedin from '../../../assets/linkedin.svg';
import {RiMailSendLine} from 'react-icons/ri';









const Contact = () => {

  const theme = localStorage.getItem('theme');
  const [valide, setValide] = useState(false)
  const [sendTry, setsendTry] = useState(false)

  const RedirectTo = (url) => {
    if (window.confirm(`Vous allez être redirigé vers ${url}`)) {
      window.open(url);
    }
  }



  // let fields = this.state.fields;
  // let [errors, setErrors] = useState({});
  // let [formIsValid, setFormIsValid] = useState(false);
  // let [formName, setFormName] = useState(false);
  // let [formEmail, setFormEmail] = useState(false);


  // //Name
  // if (!fields["name"]) {
  //   formIsValid = false;
  //   errors["name"] = "Cannot be empty";
  // }

  // if (typeof fields["name"] !== "undefined") {
  //   if (!fields["name"].match(/^[a-zA-Z]+$/)) {
  //     formIsValid = false;
  //     errors["name"] = "Only letters";
  //   }
  // }

  // //Email
  // if (!fields["email"]) {
  //   formIsValid = false;
  //   errors["email"] = "Cannot be empty";
  // }

  // if (typeof fields["email"] !== "undefined") {
  //   let lastAtPos = fields["email"].lastIndexOf("@");
  //   let lastDotPos = fields["email"].lastIndexOf(".");

  //   if (
  //     !(
  //       lastAtPos < lastDotPos &&
  //       lastAtPos > 0 &&
  //       fields["email"].indexOf("@@") == -1 &&
  //       lastDotPos > 2 &&
  //       fields["email"].length - lastDotPos > 2
  //     )
  //   ) {
  //     formIsValid = false;
  //     errors["email"] = "Email is not valid";
  //   }
  // }

  const [formError, setFormError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail() {

   
  if (name.length < 1) {
    // if (!name.match(/^[a-zA-Z]*$/)) {
    // }
    setFormError("Probleme NAME");

  }
  console.log('OK');

  //Email
  // else if (email.length > 0 && typeof(name) !== 'undefined') {
  //   let lastAtPos = email.lastIndexOf("@");
  //   let lastDotPos = email.lastIndexOf(".");

  //   if (
  //     !(
  //       lastAtPos < lastDotPos &&
  //       lastAtPos > 0 &&
  //       email.indexOf("@@") === -1 &&
  //       lastDotPos > 2 &&
  //       email.length - lastDotPos > 2
  //     )
  //   ) {
  //     setFormError("Email is not valid");
  //   }


  //   console.log('OK');


  // } else {return;}


  
      // setValide(true)
      // setsendTry(true)
      // emailjs.sendForm('service_p30kj4b', 'template_vt5vkmk', e.target, 'user_P4qxKysnq3VXzYotI8OQc')
      //   .then((result) => {
      //   }, (error) => {
      //       console.log(error.text);
      //   });
   
  }


  useEffect(() => {
    if (valide) {
      const interval = setInterval(() => {
        setValide(false)
        setsendTry(false)
      }, 4000);
      return () => clearInterval(interval);
    }

  }, [valide]);





  console.log(name.length);
  console.log(formError);

  return (
    <section id="sectionContact" style={{minHeight:"100vh"}}>

      {valide && (
        <div className={`send-success text-center p-2 ${valide ? 'slideInRight test' : 'fadeOut'}`}>
          <span> <RiMailSendLine /> Message Envoyé. <br /> Merci pour votre visite ! </span>
        </div>
      )}

      <div className="row section-content">
        <div className="col-12 contact" 
        // style={{backgroundColor: theme === "light" ? "#222222" : "#F5F5F5", color: theme === "light" ? "#F5F5F5" : "#222222"}}
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg-btop" >
            <path fill={theme === "light" ? "#F5F5F5" : "#222222"} 
              fillOpacity="1" 
              d="M0,192L120,176C240,160,480,128,720,128C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
          </svg> */}

          <ScrollTo to="sectionAbout" classn="scroll-to-prev-btn" />

          <div className="row">
          <div className="col-12" style={{ color: theme === "light" ? "#222222" : "#F5F5F5"}}>
            <h3>Contact</h3>
          </div>
          </div>

          <div className="row align-items-center justify-content-center contact-content">

            <div className="col-lg-6 col-md-8 col-sm-10 p-3 form-content" style={{ color: theme === "light" ? "#222222" : "#F5F5F5"}}>
            <Form.Group controlId="exampleForm.ControlTextarea1" className="contact-form">
              <input type="hidden" name="contact_number" />

              <Form.Control type="text" name="user_name" placeholder="Name" className="form-input"
              onChange={e => setName(e.target.value)}
               />
              <Form.Control type="email" name="user_email" placeholder="name@example.com" className="form-input"
              onChange={e => setEmail(e.target.value)}
              />
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                className="form-input"
                style={{height:'150px', maxHeight: '500px' }}
                onChange={e => setMessage(e.target.value)}
              />
          
              <input onClick={() => sendEmail()} type='submit' value="Envoyer" className="btn send-btn m-3" style={{display: sendTry ? 'none' : 'block' }} />
              <div className="lds-ellipsis m-3 fadeIn" style={{display: sendTry ? 'block' : 'none' }}><div></div><div></div><div></div><div></div></div>
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
             <p> 2021 - Développé par Benjamin Navarro</p>
            </div>

          </div>

        </div>
      </div>


    </section>
  );
};

export default Contact;


Contact.propTypes = {
  children: PropTypes.element.isRequired
}