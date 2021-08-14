import React from 'react';
import { Link } from "react-scroll";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';


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
          )}
        </Link>
      </div>
    </div>
  );
};
export default ScrollTo