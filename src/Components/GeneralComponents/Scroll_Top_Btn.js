import React from 'react';
import styled from "styled-components"
import { BiArrowToTop } from "react-icons/bi";

const ScrollTop = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  cursor: pointer;
  transition: all .5s;
  border: none;
  backgroundColor: #F5F5F5;
  svg {
    font-size: 2.5em;
  }
  // &:hover {
  //   color: rgba(0, 0, 0, 0.8);
  // }
`;

const ScrollToTop = () => {
  const [display, setDisplay] = React.useState(false)
  const scrollTo = () => {window.scrollTo({ top: 0 });}

  React.useEffect(() => {
    let unmounted = true;
    if (unmounted) {
      window.addEventListener('scroll', () => {
       if (window.scrollY >= 500) {
       setDisplay(true)
       }
       else {  setDisplay(false)  }
     });
   }
  return () => { unmounted = false };
  }, [])

  return (
    <ScrollTop
      className={`scroll-to-top-btn ${display ? "fadeIn" : "hide-div"}`}
      onClick={() => scrollTo()}>
      <BiArrowToTop />
    </ScrollTop>
  );
};
export default ScrollToTop