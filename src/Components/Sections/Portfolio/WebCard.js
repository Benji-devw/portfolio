import React, {useState} from 'react';
import VallenaImg1 from '../../../assets/Portfolio/Vallena/perspective-1.jpg';
import VallenaImg2 from '../../../assets/Portfolio/Vallena/perspective-2.jpg';
import VallenaImg3 from '../../../assets/Portfolio/Vallena/perspective-3.jpg';
import Stouflydoc1 from '../../../assets/Portfolio/Stouflydoc/Stouflydoc-1.png';
import Stouflydoc2 from '../../../assets/Portfolio/Stouflydoc/Stouflydoc-2.png';
import Stouflydoc3 from '../../../assets/Portfolio/Stouflydoc/Stouflydoc-3.png';



function WebCard(props) {

  const [mainP, setMainP] = useState('main')
  const [secondP, setSecondP] = useState('second')
  const [thirdP, setThirdP] = useState('third')

  const moveUp = () => {
    setMainP(thirdP)
    setSecondP(mainP)
    setThirdP(secondP)
  }

  const RedirectTo = (url, title) => {
    if (window.confirm(`Vous allez être redirigé vers ${title}`)) {
      window.open(url);
    }
  }


  return (
    <>
      <div className={`${thirdP}`}>
          <img src={props.datas === 'vallena' ? VallenaImg3 : Stouflydoc3} alt="1" className="img-fluid"
          onClick={() => {
            if (thirdP === 'main') { RedirectTo(props.url, props.nameUrl)} else {moveUp()}
          }}
          />
      </div>

      <div className={`${mainP}`}>
          <img src={props.datas === 'vallena' ? VallenaImg1 : Stouflydoc1} alt="2" className="img-fluid "
          onClick={() => {
            if (mainP === 'main') {RedirectTo(props.url, props.nameUrl)} else {moveUp()}
          }}
          />
      </div>

      <div className={`${secondP}`}>
      <img src={props.datas === 'vallena' ? VallenaImg2 : Stouflydoc2} alt="3" className="img-fluid"
        onClick={() => {
          if (secondP === 'main') {RedirectTo(props.url, props.nameUrl)} else {moveUp()}
        }}
       />
      </div>
    </>
  );
}

export default WebCard;