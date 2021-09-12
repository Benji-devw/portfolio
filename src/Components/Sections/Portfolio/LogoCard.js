import React from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion"
import styled from 'styled-components';


const CardWrapper = styled.div`
  width: 100%:
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;


const LogoContainer = styled.div`
  width: 100%;
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardLogo = styled(motion.div)`
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 10px 5px rgba(31, 31, 31, 0.5);
  // background-color: #1d1f21;
  color: #fff;
  position: relative;
  cursor: grab;

`;
const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;

`;
const Circle = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  bottom: -5em;
  right: -5em;
  z-index: 5;
  background-image: linear-gradient(to right top, #ebbc12, #ff8224, #ff3754, #ca0073, #a200bc);
  border-radius: 50%;
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align:items: center;
  justify-content: center;
  padding: 1em 15px;
`;
// const BottomContainer = styled.div`
//   display: flex;
//   flex: 0.8;
//   padding: 0 1em;
// `;
const LogoText = styled.div`
  // color #fff;
  text-trasform: uppercase;
  margin-top: -80px;
  z-index: 10;
  font-size: 45px;
  font-weight: 700;
`;
const LogoWrapper = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;  
  z-index: 99;
`;
const Logo = styled(motion.div)`
  width: auto;
  margin-top: -10rem;
  height: 250px;
  z-index: 99;
  use-select: none;
  img {
    width: auto;
    height: 100%;
    user-select: none;
    -moz-user-select: none;
  }
`;


function LogoCard(props) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
    <LogoContainer >
      <CardLogo
        style={{x, y, rotateX, rotateY, z: 100, backgroundColor:`${props.bg}` }} 
        drag 
        dragElastic={0.16} 
        dragConstraints={{top:0, left:0, right:0, bottom:0}}
        whileTap={{ cursor: "grabbing"}}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle style={{backgroundImage:`${props.bgCircle}`}} />
          </CircleWrapper>
          <LogoWrapper>
            <Logo 
              style={{x, y, rotateX, rotateY, rotate:"0deg", z: 10}}
              dragElastic={0.12} 
              whileTap={{ cursor: "grabbing"}}
            >
              <img draggable="false" src={props.logo} alt="logo" />
            </Logo>
          </LogoWrapper>
          <LogoText style={{color:`${(props.bg === "#222222") ? "#F5F5F5" : "#222222"}`}}>{props.text}</LogoText>
        </TopContainer>
        {/* <BottomContainer>Bottom</BottomContainer> */}
      </CardLogo>
    </LogoContainer>
    </CardWrapper>
  );
}

export default LogoCard;



