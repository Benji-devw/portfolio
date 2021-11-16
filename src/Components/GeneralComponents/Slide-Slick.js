import React from 'react';
import Slider from "react-slick";
import Arrow from '../../assets/arrow.svg'


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <img src={Arrow} alt="next"
      className={''}
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        right: "3.5rem",
        height: "1.6em",
        cursor: "pointer",
        transform: "rotate(180deg)"
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <img src={Arrow} alt="prev"
      className={''}
      style={{
        ...style,
        position: "absolute",
        top: "45%",
        left: "3.5rem",
        zIndex: 100,
        height: "1.6em",
        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}

const SlideSlick = props => {
  const data = [];
  for (let files in props.data) {
    data.push(props.data[files])
  }

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slick-slide-wrapper"
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((url, id) =>
          <div key={id} className="slick-slide-content">
            <img src={url} alt={id} className="mx-auto" />
          </div>
          )}
      </Slider>
    </>
  );
};
export default SlideSlick