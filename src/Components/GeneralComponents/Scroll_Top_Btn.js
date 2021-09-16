import React from 'react';
import styled from "styled-components"

const ScrollTop = styled.div`
  position: fixed;
  z-index: 1000;
  right: 2rem;
  bottom: 2rem;
  cursor: pointer;
  transition: all .5s;
  svg {
    font-size: 12.5em;
  }
  // &:hover {
  //   color: rgba(0, 0, 0, 0.8);
  // }
`;

const ScrollToTop = () => {
  const [display, setDisplay] = React.useState(false)
  const theme = localStorage.getItem('theme');
  const scrollTo = () => {window.scrollTo({ top: 0 });}

  React.useEffect(() => {
    let unmounted = true;
    if (unmounted) {
      window.addEventListener('scroll', () => {
       if (window.scrollY >= 500) {
       setDisplay(true)
       }
       else { setDisplay(false)  }
     });
   }
  return () => { unmounted = false };
  }, [])

  return (
    <ScrollTop
      className={`scroll-to-top-btn ${display ? "fadeIn" : "hide-div"}`}
      onClick={() => scrollTo()}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 200 200"
        width="100%" height="30px"
        >
          <g
            fill={theme === 'light' ? '#222222' : '#F5F5F5'}
            stroke={theme === 'light' ? '#F5F5F5' : '#222222'}
            strokeMiterlimit="10"
            >
            <path className="st0" d="M100,80.1c-4.2,0-7.6,3.4-7.6,7.6v101.7c0,4.2,3.4,7.6,7.6,7.6c4.2,0,7.6-3.4,7.6-7.6V87.7
              C107.6,83.5,104.2,80.1,100,80.1z"/>
            <path className="st0" d="M116.1,48.7c-8.9-8.8-23.3-8.8-32.1,0L55.6,77c-3,3-3,7.8,0,10.7C57.1,89.2,59,90,61,90
              c1.9,0,3.9-0.7,5.4-2.2l28.3-28.3c3-3,7.8-3,10.7,0c0,0,0,0,0,0l28.7,28.3c3,2.9,7.8,2.9,10.7-0.1c2.9-3,2.9-7.8-0.1-10.7
              L116.1,48.7z"/>
            <path className="st0" d="M189.4,3H10.6C6.4,3,3,6.4,3,10.6s3.4,7.6,7.6,7.6h178.8c4.2,0,7.6-3.4,7.6-7.6S193.6,3,189.4,3z"/>
          </g>
        </svg>
    </ScrollTop>
  );
};
export default ScrollToTop