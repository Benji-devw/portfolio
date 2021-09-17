import React from 'react';
import styled from 'styled-components';


const BtnWrapper = styled.div`
a{ text-decoration: none; }
border-color: #a200bc;
border-radius: 20px;
position: relative;
top: 30%;
left: 50%;
transform: translate(-50%, -30%);
overflow: hidden;
z-index: 1;
font-weight: 400;
box-shadow: 0 0 15px 8px #a300bc2e;

&:after {
  content: '';
  position: absolute;
  display: block;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 100%;
  border-radius: 20px;
  background-image: linear-gradient(to right bottom, #ebbc12, #ff8224, #ff3754, #ca0073, #a200bc);

  z-index: -1;
  transition: width 300ms ease-in-out;
}

&:hover {
  box-shadow: 5px 5px 5px 3px #a300bc46;
  transition-duration: .3s;
  &:after {
  width: 110%;
  }
}
`;

const AboutBtn = (props) => {
  return (
    <BtnWrapper
      className="btn" 
      style={{backgroundColor: props.backG}}>
        <a href={props.cv} target="_blank" rel="noreferrer">
          <span 
            className={`${props.backG !== '#F5F5F5' ? 'colorW' : 'colorD'}`}
          >
            {props.children}
          </span>
        </a>
    </BtnWrapper>
  )
};
export default AboutBtn;