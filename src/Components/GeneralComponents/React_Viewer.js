import React, {useState, useCallback} from "react";
import ImageViewer from 'react-simple-image-viewer';
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
        right: ".5rem",
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
        left: ".5rem",
        zIndex: 100,
        height: "1.6em",
        cursor: "pointer"
      }}
      onClick={onClick}
    />
  );
}



const ReactViewer = (props) => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "slick-slide-wrapper",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = props.data;

  
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  return (
    <>
    <Slider {...settings}>
        {images.map((src, index) => (
          <div key={ index } className="col-lg-4 col-md-6 text-center p-3 illustration-preview">
            <img
              src={ src }
              onClick={ () => openImageViewer(index) }
              alt={index}
              className="img-fluid"
            />
          </div>
        ))}

      </Slider>
        {isViewerOpen && (
          <ImageViewer
            src={ images }
            currentIndex={ currentImage }
            disableScroll={ true }
            closeOnClickOutside={ true }
            onClose={ closeImageViewer }
          />
        )}

      </>
  );
    
}

export default ReactViewer;