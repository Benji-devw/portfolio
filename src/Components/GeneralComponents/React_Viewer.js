import React, {useState, useCallback} from "react";
import ImageViewer from 'react-simple-image-viewer';


const ReactViewer = (props) => {


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
        {images.map((src, index) => (
          <div key={ index } className="col-lg-4 col-md-6 text-center p-3 illustration-preview">
            <img
              src={ src }
              onClick={ () => openImageViewer(index) }
              width="500"
              alt={index}
              className="img-fluid"
            />
          </div>
        ))}

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