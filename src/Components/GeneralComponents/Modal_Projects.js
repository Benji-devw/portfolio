import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Slider from "react-slick";



const ModalProject = props => {


  const itemsNP2C = [];
  for (let files in props.np2clogo) {
    itemsNP2C.push(props.np2clogo[files])
  }


  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-projects"
    >
      <Slider {...settings}>
        {itemsNP2C.map((url, id) =>
          <div key={id} className="slide-portfolio-gallery">
            <img src={url} alt="img" className="img-content mx-auto" />
          </div>
          )}
      </Slider>
    </Modal>
  );

};
export default ModalProject