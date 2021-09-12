import React from 'react';
import { Link } from "react-scroll";


const ScrollTo = props => {

  const theme = localStorage.getItem('theme');
  const [backG, setBackG] = React.useState()
  React.useEffect(() => {
    if (theme !== 'light') {
      setBackG("#F5F5F5")
    } else { setBackG("#333333")}
  }, [theme])


  return (
    <div className="row scroll-to justify-content-center text-center">
      <div className="col-2">
        <Link activeClass="section-inactive"
          to={props.to}
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          className={props.classn}
          
        >
          {props.classn === "scroll-to-prev-btn" ? (
            // <AiOutlineArrowUp />
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"
              width="30px" height="30px"
            >
              <filter id="blur-filter" x="2" y="2" width="200" height="200"></filter>
              <g
                fill={backG}
                stroke='#000000'
                strokeMiterlimit="10"
                >
                <path className="arrow-up" d="M500.7,324.9L285.8,110c-16.8-16.7-43.8-16.7-60.6,0L10.3,324.9c-13.8,16.1-13.8,39.8,0,55.9c15.4,18,42.6,20.1,60.6,4.7l184.4-184.4l184.8,184.4c16.8,16.7,43.8,16.7,60.6,0C517.4,368.7,517.4,341.7,500.7,324.9z"/>
              </g>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"
                width="30px" height="30px"
              >
              <g
                fill={backG}
                stroke='#000000'
                strokeMiterlimit="10"
                >
                  <path className="arrow-down" d="M500.7,171.2L285.8,384.6c-16.8,16.6-43.8,16.6-60.6,0L10.3,171.2c-13.8-16-13.8-39.6,0-55.5c15.4-17.9,42.6-20,60.6-4.7l184.4,183.1L440.1,111c16.8-16.6,43.8-16.6,60.6,0C517.4,127.6,517.4,154.5,500.7,171.2z"/>
              </g>
            </svg>
          )}
        </Link>
      </div>
    </div>
  );
};
export default ScrollTo