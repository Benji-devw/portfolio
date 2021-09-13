import React from 'react';

const AboutBtn = (props) => {
  return (
    <a href={props.cv} target="_blank" rel="noreferrer">
    <div 
      className="btn download-btn" 
      style={{backgroundColor: props.backG}}>
        <span 
          className={`${props.backG !== '#F5F5F5' ? 'colorW' : 'colorD'}`}
        >
          {props.children}
        </span>
    </div>
        </a>
  )
};
export default AboutBtn;