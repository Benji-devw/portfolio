import React from 'react';
import ScrollTo from '../../GeneralComponents/Scroll_To';
// import cvNum from '../../../assets/CV_Navarro_2021.pdf'
// Import the main component
// import { Viewer } from '@react-pdf-viewer/core';
// import { Worker } from '@react-pdf-viewer/core';
// Import the styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { RenderCurrentScaleProps } from '@react-pdf-viewer/zoom';
// import { zoomPlugin } from '@react-pdf-viewer/zoom';
// import { RenderZoomOutProps } from '@react-pdf-viewer/zoom';
// import { getFilePlugin } from '@react-pdf-viewer/get-file';


const About = props => {
  // console.log('props', props)

  // const zoomPluginInstance = zoomPlugin();
  // const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
  return (
    <section id="sectionAbout">

      <ScrollTo to="sectionPortfolio" classn="scroll-to-prev-btn" />

      <div className="row section-content">
        <div className="col-12 mt-5">
          <h3>About me</h3>





          {/* <ZoomOut>
            {
              (props: RenderZoomOutProps) => (
                <button
                  style={{
                    height: "20px"
            }}
                  onClick={props.onClick}
                >
                  Print
                </button>
              )
            }
          </ZoomOut> */}

          {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div
              style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                height: '750px',
              }}
            >
              <Viewer fileUrl={cvNum} />
            </div>
          </Worker> */}





        </div>
      </div>

      <ScrollTo to="sectionContact" classn="scroll-to-next-btn" />

    </section>
  );
};

export default About;
