import React from 'react';
import { Link } from "react-scroll";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
// import SvgArrowDark from '../../assets/up-arrow-Dark.svg'

const ScrollTo = props => {
  // console.log(props.to);
  return (
    <div className="row scroll-to justify-content-center text-center">
      <div className="col-2">
        <Link activeClass="section-inactive"
          to={props.to}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={props.classn}
          // onClick={() => console.log(props.to)}
        >
          {props.classn === "scroll-to-prev-btn" ? (
            <AiOutlineArrowUp />
          ) : (
              <AiOutlineArrowDown />
              // <SvgArrowDark className="arrow-down"
              //   stroke="red"
              //   fill="green"
              //   filter="url(#inset-shadow)" />

              // <svg	xmlns="http://www.w3.org/2000/svg"
              //   xmlns:xlink="http://www.w3.org/1999/xlink"
              //   width="500" height="600">
              //   <path d="M200 260L280 260L400 290L250 320e" 
              //   stroke-width="10" stroke="#cccccc" stroke-linecap="round" stroke-linejoin="round" fill="none" filter="url(#innershadow)"></path>
              // </svg>
          )}
        </Link>
      </div>
    </div>
  );
};
export default ScrollTo