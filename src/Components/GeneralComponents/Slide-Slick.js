import React from 'react';
import Slider from "react-slick";


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