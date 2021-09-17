import React from 'react';
import styled, { keyframes } from 'styled-components';

const textAnim = keyframes`
  0% { transform: translateX(0px), }
  25% { transform: translateX(20px) }
  40% { transform: translateX(50px) }
  75% { transform: translateX(0px) }
  100% {transform:  translateX(0px) }
`; 

const Wrapper = styled.span`
  display: inline-block;
  span {
    display: inline-block;
    animation-name: ${textAnim};
    animation-duration: 7s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  span:nth-child(1) { animation-delay: .1s }
  span:nth-child(2) { animation-delay: .15s }
  span:nth-child(3) { animation-delay: .20s }
  span:nth-child(4) { animation-delay: .25s }
  span:nth-child(5) { animation-delay: .30s }
  span:nth-child(6) { animation-delay: .35s }
  span:nth-child(7) { animation-delay: .40s }
  span:nth-child(8) { animation-delay: .45s }
  span:nth-child(9) { 
    animation-delay: .50s; 
    transform: rotateY(180deg)
    }
`;


const TextAnimation = (props) => {
  const theme = localStorage.getItem('theme');
  const [pause, setPause] = React.useState(true)
  const reactArray = props.data.split("")

  return (
    <Wrapper style={{color: theme === 'light' ? '#333333' : '#F5F5F5'}}>
      {reactArray.map((item, id) => (
        <span key={id}  
          style={{animationPlayState: pause ? 'running' : 'paused'}}
          onClick={() => setPause(pause ? false : true)}
        > {item} </span>
      ))}
    </Wrapper>
  );
};
export default TextAnimation