import React, {useState} from 'react';
import styled, { keyframes } from 'styled-components';
import RangeSlider from 'react-bootstrap-range-slider';
import FillControl from '../../../assets/setting.svg';
import Form from 'react-bootstrap/Form';


let timeValueG = 15;
let rotateX5 = `${50}deg`;
let rotateY5 = `${50}deg`;
let rotateZ5 =  `${360}deg`;
let translateX5 =  `${20}px`;
let scale50G = .9;
let color1 = '#00A6FF'
let color2 = '#009DFF'
let color3 = '#006EFF'
let color4 = '#4400FF'
let color5 = '#C800FF'



const WaveAnimation = () => keyframes`
  0% { transform: translateX(0)  rotateX(${rotateX5}) rotateY(${rotateY5}) rotateZ(0) scale(.7)};
  50% { transform: translateX(${translateX5} )rotateX(10deg) rotateY(10deg)  rotateZ(${rotateZ5}) scale(${scale50G})};
  100% { transform: translateX(0) rotateX(${rotateX5}) rotateY(${rotateY5}) rotateZ(0) scale(.7)};
`;
const WaveWrapper = styled.div`
  position: absolute;
  top: -20rem;
  left: -3rem;
  display: inline-block;
  width:600px;
  height:600px;
  z-index: 1;
  @media screen and (max-width: 600px) {
    top: -15rem;
    width:500px;
    height:500px;
  };
  svg {
    z-index: 1;
    display: inline-block;
    animation-name: ${WaveAnimation};
    animation-duration: ${() => `${timeValueG}s`};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  };
  svg:nth-child(-n+5) {
    position: absolute;
    top: 0rem;
    left: 0;
  }
  svg:nth-child(1) { animation-delay: .6s; filter: blur(1.5px)};
  svg:nth-child(2) { animation-delay: .5s; filter: blur(1.2px)};
  svg:nth-child(3) { animation-delay: .4s; filter: blur(.9px)};
  svg:nth-child(4) { animation-delay: .3s; filter: blur(.6px)};
  svg:nth-child(5) { animation-delay: .2s; filter: blur(.3px)};
  svg:nth-child(6) { animation-delay: .1s; filter: blur(0px)};
`;






function CircleWave() {
  const RedirectTo = (url, title) => {
    if (window.confirm(`Vous allez être redirigé vers ${title}`)) {
      window.open(url);
    }
  }
  const circleSvg = [
    `M364.4,24.9C171.2,38.4-52.9,427.7,95.6,641c132.9,190.9,515.3,170.3,621.7,8.5C848.3,450.3,578.5,10,364.4,24.9z`,
    `M366.7,42.8C182.8,55.6-30.4,426.2,110.9,629.1c126.5,181.7,490.5,162.1,591.7,8.1C827.3,447.6,570.5,28.6,366.7,42.8z`,
    `M367.4,58.9C191.7,71.2-11.9,425.1,123.1,619c120.9,173.6,468.5,154.8,565.2,7.7C807.3,445.6,562.1,45.3,367.4,58.9z`,
    `M369.2,77.9C203.3,89.5,10.9,423.7,138.4,606.8c114.1,163.9,442.5,146.2,533.8,7.3C784.7,443.1,553.1,65.1,369.2,77.9z`,
    `M371.7,93.3c-157.9,11-341,329.2-219.7,503.5c108.7,156,421.2,139.2,508.2,7C767.2,441,546.7,81.1,371.7,93.3z`,
    `M374.1,115.1C227.1,125.3,56.8,421.4,169.7,583.6c101.1,145.2,391.9,129.5,472.8,6.5C742.1,438.6,537,103.7,374.1,115.1z`
  ];


  const [openMenu, setOpenMenu] = useState(false)
  const [ timeValue, setTimeValue ] = useState(15); 
  const [ rotateX50, setRotateX50 ] = useState(50); 
  const [ rotateY50, setRotateY50 ] = useState(50); 
  const [ rotateZ50, setRotateZ50 ] = useState(360); 
  const [ translateX50, setTranslateX50 ] = useState(20); 
  const [ scale50, setScale50 ] = useState(.9); 
  const [ valueColor1, setColor1 ] = useState('#00A6FF'); 
  const [ valueColor2, setColor2 ] = useState('#009DFF'); 
  const [ valueColor3, setColor3 ] = useState('#006EFF'); 
  const [ valueColor4, setColor4 ] = useState('#4400FF'); 
  const [ valueColor5, setColor5 ] = useState('#C800FF'); 



  function SwitchColor1(props) { return color1 = props };
  function SwitchColor2(props) { return color2 = props };
  function SwitchColor3(props) { return color3 = props };
  function SwitchColor4(props) { return color4 = props };
  function SwitchColor5(props) { return color5 = props };
  function timeUpdate(props) { return timeValueG = props };
  function rotateX50Update(props) { return rotateX5 = `${props}deg` };
  function rotateY50Update(props) { return rotateY5 = `${props}deg` };
  function rotateZ50Update(props) { return rotateZ5 = `${props}deg` };
  function translateX5Update(props) {  return translateX5 = `${props}px` };
  function scale50Update(props) { return scale50G = props };

  function reset() {
    setTimeValue(15);
    timeUpdate(15);
    setRotateY50(50);
    rotateX50Update(50);
    setRotateX50(50);
    rotateY50Update(50);
    setRotateZ50(360);
    rotateZ50Update(360);
    setTranslateX50(20);
    translateX5Update(20);
    setScale50(.9);
    scale50Update(.9);
    setColor1('#00A6FF');
    setColor2('#009DFF');
    setColor3('#006EFF');
    setColor4('#4400FF');
    setColor5('#C800FF');
    SwitchColor1('#00A6FF')
    SwitchColor2('#009DFF')
    SwitchColor3('#006EFF')
    SwitchColor4('#4400FF')
    SwitchColor5('#C800FF')
  }

  // console.log(colors);

  return (
    <>

    <div className="wave-circle-controller">
      <div className={`text-center circle-wave-controls-btn`}>
        <img src={FillControl} alt="fillcontrol" className="img-fluid" onClick={() => setOpenMenu(!openMenu)} />
      </div>
      <div className={`row circle-wave-controls ${openMenu ? "fadeIn" : "hide-div"}`}>
      <div className="reset-btn text-center" onClick={() => reset()}>reset</div>

        <div className="col-4 p-1 range-sliders time">
          <label htmlFor="TranslateX0" className="form-label">Time</label><br />
            <RangeSlider
              className="range" value={timeValue} min={0} max={50} step={.1} variant='danger'
              onChange={ (e) => { setTimeValue(e.target.value); timeUpdate(e.target.value) }}
            />  
          </div>
          <div className="col-4 p-1 range-sliders scale50">
            <label htmlFor="scale50" className="form-label">Scale</label><br />
            <RangeSlider className="range" value={scale50}  min={.2} max={2} step={0.1} variant='secondary'
              onChange={ (e) => { setScale50(e.target.value); scale50Update(e.target.value) }}
            />
          </div>
          <div className="col-4 p-1 range-sliders translateX50">
            <label htmlFor="translateX50" className="form-label">translateX</label><br />
            <RangeSlider className="range" value={translateX50}  min={-400} max={400} step={10} variant='secondary'
              onChange={ (e) => { setTranslateX50(e.target.value); translateX5Update(e.target.value) }}
            />
          </div>
          <div className="col-4 p-1 range-sliders rotateX50">
            <label htmlFor="rotateX50" className="form-label">RotateX</label><br />
            <RangeSlider className="range" value={rotateX50}  min={-360} max={360} step={10} variant='secondary'
              onChange={ (e) => { setRotateX50(e.target.value); rotateX50Update(e.target.value) }}
            />
          </div>
          <div className="col-4 p-1 range-sliders rotateY50">
            <label htmlFor="rotateY50" className="form-label">RotateY</label><br />
            <RangeSlider className="range" value={rotateY50} min={-360} max={360} step={10} variant='secondary'
              onChange={ (e) => { setRotateY50(e.target.value); rotateY50Update(e.target.value)  }}
            />
          </div>
          <div className="col-4 p-1 range-sliders rotateZ50">
            <label htmlFor="rotateZ50" className="form-label">RotateZ</label><br />
            <RangeSlider className="range" value={rotateZ50}  min={-360} max={360} step={10} variant='secondary'
              onChange={ (e) => { setRotateZ50(e.target.value); rotateZ50Update(e.target.value) }}
            />
          </div>

           <div className="col-2 p-2 range-sliders color">
              <Form.Control type="color" id="color"
                value={valueColor1}
                title="Choose your color"
                onChange={(e) => {
                  setColor1(e.target.value)
                  SwitchColor1(e.target.value)
                }}
              />
            </div>
            <div className="col-2 p-2 range-sliders color">
              <Form.Control type="color" id="color"
                value={valueColor2}
                title="Choose your color"
                onChange={(e) => {
                  setColor2(e.target.value)
                  SwitchColor2(e.target.value)
                }}
              />
            </div>
            <div className="col-2 p-2 range-sliders color">
              <Form.Control type="color" id="color"
                value={valueColor3}
                title="Choose your color"
                onChange={(e) => {
                  setColor3(e.target.value)
                  SwitchColor3(e.target.value)
                }}
              />
            </div>
            <div className="col-2 p-2 range-sliders color">
              <Form.Control type="color" id="color"
                value={valueColor4}
                title="Choose your color"
                onChange={(e) => {
                  setColor4(e.target.value)
                  SwitchColor4(e.target.value)
                }}
              />
            </div>
            <div className="col-2 p-2 range-sliders color">
              <Form.Control type="color"  id="color"
                value={valueColor5}
                title="Choose your color"
                onChange={(e) => {
                  setColor5(e.target.value)
                  SwitchColor5(e.target.value)
                }}
              />
            </div>
            <p style={{textDecoration:"underline", cursor:"pointer"}} onClick={() => RedirectTo("https://mycolor.space/gradient?ori=to+right+bottom&hex=%2300A6FF&hex2=%23C800FF&sub=1", "https://mycolor.space")}>ColorSpace</p>
      </div>
    </div>

    <WaveWrapper id='wavewrapper'>
      {circleSvg.map((fill, id) => (
        <svg key={id} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 800 800">
          <g
            fill="none" 
            stroke='url(#SVGID_1_)'
            strokeWidth='1.5'
            strokeMiterlimit="10"
            >
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="45.8809" y1="401.0384" x2="753.2609" y2="401.0384">
              <stop  offset="0" style={{stopColor: color1}}/>
              <stop  offset="0.1672" style={{stopColor:color2}}/>
              <stop  offset="0.4454" style={{stopColor:color3}}/>
              <stop  offset="0.7978" style={{stopColor:color4}}/>
              <stop  offset="0.9944" style={{stopColor:color5}}/>
            </linearGradient>
            <path  d={fill}/>
          </g>
        </svg>
      ))}
    </WaveWrapper>
    </>
  );
}

export default CircleWave;