import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Slider from "react-slick";
import CloseM from '../../assets/x-mark.svg';


const ModalProject = props => {

  // console.log(props.data);
  const [show, setShow] = React.useState(false);

  const data = [];
  for (let files in props.data) {
    data.push(props.data[files])
  }


  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // className: "fadeInDelay"
  };


  return (
    <>
      <div onClick={() => setShow(true)} >
        <img src={props.preview} alt="img" className="img-fluid modal-preview" />
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-projects"
      >
        <Modal.Header onClick={() => setShow(false)}>
          <img src={CloseM} alt="X" className="fadeInDelay"/>
        </Modal.Header>
        <Slider {...settings}>
          {data.map((url, id) =>
            <div key={id} className="modal-projects-slick">
              <img src={url} alt="img" className="modal-projects-img mx-auto" />
            </div>
            )}
        </Slider>
      </Modal>
    </>
  );
};
export default ModalProject