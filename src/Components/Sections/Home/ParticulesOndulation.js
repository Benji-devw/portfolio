import React, { useRef, useMemo, Suspense, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame, useLoader} from '@react-three/fiber';
import { Text, CameraShake } from '@react-three/drei';
import { TextureLoader } from 'three';
import Degrade from '../../../assets/HomeDegradé.jpg';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import FillControl from '../../../assets/setting.svg';
import { BsArrowsFullscreen } from 'react-icons/bs';



function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}
function RedirectTo(url, title) {
  if (window.confirm(`Vous allez être redirigé vers ${title}`)) {
    window.open(url);
  }
}

// Global Variables
let rotationControl = 0.009;
let TimeControl = 1.5;
let multiplyScalar = 0.75;
let rotateReverse = false;
let waveReverse = true;
// let waveNoise = 0;



function Controller() {
  
  const [openMenu, setOpenMenu] = useState(true)
  const [ valueRotate, setValueRotate ] = useState(0.009); 
  const [ valueReverseRotate, setReverseRotate ] = useState(false); 
  const [ valueTime, setValueTime ] = useState(1.50); 
  const [ valueScalePosition, setValueScalePosition ] = useState(0.75); 
  const [ valueWaveReverse, setWaveReverse ] = useState(true); 
  // const [ valueWaveNoise, setWaveNoise ] = useState(0); 

  function SwitchRotate(props) {
    return rotationControl = props * 1.2
  }
  function SwitchRotateReverse(props) {
    return rotateReverse = props
  }
  function SwitchTime(props) {
    return TimeControl = 2 /  props
  }
  function SwitchScalePosition(props) {
    return multiplyScalar = 1 * props
  }
  function SwitchWaveReverse(props) {
    return waveReverse = props
  }
  // function SwitchWaveNoise(props) {
  //   console.log(props)
  //   return waveNoise = props
  // }

  function reset() {
    SwitchRotate(0.009)
    setValueRotate(0.009)
    SwitchRotateReverse(false)
    setReverseRotate(false)
    SwitchTime(1.5)
    setValueTime(1.5)
    SwitchScalePosition(0.75)
    setValueScalePosition(0.75)
    SwitchWaveReverse(true)
    setWaveReverse(true)
  }

  // console.log(color);

  return (
    <>
      <div className="row particules-controller">

        <div className={`fill-controls`} style={{left: openMenu ? "-16rem" : "1rem"}}>

          <div className={`text-center fill-controls-btn`}>
            <img src={FillControl} alt="fillcontrol" className="img-fluid" onClick={() => setOpenMenu(!openMenu)} />
          </div>

          <div className="full-screen">
            <div onClick={() => toggleFullScreen()} ><BsArrowsFullscreen/>Fullscreen (F11)</div>
          </div>

          <div className="col p-2 range-sliders rotate">
            <label htmlFor="rotate" className="form-label">Rotate</label><br />
            <RangeSlider 
              className="range"
              value={valueRotate}
              min={0}
              max={0.10}
              step={0.001}
              variant='secondary'
              onChange={ (e) => {
                setValueRotate(e.target.value)
                SwitchRotate(e.target.value)
              }}
            />
            <Form.Check
              className="check-rotate"
              checked={valueReverseRotate}
              label="Reverse rotate"
              name="reverseRotate"
              type="checkbox"
              onChange={(e) => {
                setReverseRotate(e.target.checked)
                SwitchRotateReverse(e.target.checked)
              }}
            />
          </div>

          <div className="col p-2 range-sliders speed">
            <label htmlFor="time" className="form-label">Time</label><br />
            <RangeSlider
              value={valueTime}
              min={0.1}
              max={5.1}
              step={0.001}
              variant='danger'
              onChange={ (e) => {
                setValueTime(e.target.value)
                SwitchTime(e.target.value)
              }}
            />
          </div>

          <div className="col p-2 range-sliders scale">
            <label htmlFor="ScalePosition" className="form-label">Scale Position</label><br />
            <RangeSlider
              value={valueScalePosition}
              min={0}
              max={2}
              step={0.01}
              onChange={ (e) => {
                setValueScalePosition(e.target.value)
                SwitchScalePosition(e.target.value)
              }}
            />
          </div>


          <div className="col p-2 range-sliders wave-reverse">
            <Form.Check
              inline
              checked={valueWaveReverse}
              label="Reverse Wave"
              name="group2"
              type="checkbox"
              onChange={(e) => {
                setWaveReverse(e.target.checked)
                SwitchWaveReverse(e.target.checked)
              }}
              />
          </div>

          {/* <div className="col p-2 range-sliders  wave-noise">
            <label htmlFor="waveNoise" className="form-label">Noise</label><br />
            <RangeSlider
              value={valueWaveNoise}
              min={0}
              max={10}
              step={0.5}
              onChange={ (e) => {
                setWaveNoise(e.target.value)
                SwitchWaveNoise(e.target.value)
              }}
            />
          </div> */}

          {/* <div className="col p-2 range-sliders color">
            <label htmlFor="color">color</label>
              <Form.Control
                type="color"
                id="color"
                value={valueColor}
                title="Choose your color"
                onChange={(e) => {
                  setColor1(e.target.value)
                  SwitchColor1(e.target.value)
                }}
              />
          </div> */}

          <div className="reset-btn text-center" onClick={() => reset()}>reset</div>
          
          <div className="autor">
            <span title="Matt Rossman" onClick={() => RedirectTo('https://tympanus.net/codrops/2020/12/17/recreating-a-dave-whyte-animation-in-react-three-fiber/', 'https://tympanus.net')}
            >Matt Rossman</span>
          </div>
        </div>

      </div>
    </>
    )
  }


function TitleName({position}) {
  return <Text 
    position={position}
    color="black" anchorX="center" anchorY="middle"
    fontSize={2}
    maxWidth={200}
    lineHeight={2}
    letterSpacing={0.02}
    font="./fonts/Satisfy-Regular.ttf"
  > Developpeur Web</Text>
}
function TitleDev({position}) {
  return <Text 
    position={position}
    color="black" anchorX="center" anchorY="middle"
    fontSize={1}
    // maxWidth={200}
    lineHeight={2}
    letterSpacing={0.02}
    font="./fonts/Satisfy-Regular.ttf"
  > Navarro Benjamin</Text>
}

  
function Dots() {

  // F Math calculs
  const roundedSquareWave = (t, delta, a, f) => {
    return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
  }

  const ref = useRef()
  
  const {vec, transform, positions, distances} = useMemo(() => {
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()    // THREE.Matrix4 defaults to an identity matrix
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3();
      
      // Place in a grid
      position.x = (i % 100) - 50; 
      position.y = Math.floor(i / 100) - 50

      position.y += (i % 2) * 0.5           // Offset every other column (hexagonal pattern)
      
      // Noise
      position.x += Math.random() * 0
      position.y += Math.random() * 0
      return position
    })
    // Precompute initial distances with octagonal offset
    const right = new THREE.Vector3(1, 0, 0)
    const distances = positions.map((pos) => {
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 6
    })
    return {vec, transform, positions, distances};
  }, [])

  useFrame(( {clock} ) => {

    // console.log(ref.current)

    if (!rotateReverse) {
      ref.current.rotation.z += rotationControl;
    } else { ref.current.rotation.z -= rotationControl; }

    for (let i = 0; i < 10000; ++i) {

      const dist = distances[i]

      // Distance affects the wave phase
      let t = clock.elapsedTime / TimeControl - dist / 15
      if (waveReverse) {
         t = clock.elapsedTime / TimeControl + dist / 15
      } else { t = clock.elapsedTime / TimeControl - dist / 15 }

      const wave = roundedSquareWave(t, 0.15 + (1 * dist) / 72, 0.4, 1 / 4.5);

      vec.copy(positions[i]).multiplyScalar(wave + multiplyScalar)    // Scale initial position by our oscillator
      transform.setPosition(vec)                                    // Apply the Vector3 to a Matrix4
      ref.current.setMatrixAt(i, transform)                       // Update Matrix4 for this instance

    }
    ref.current.instanceMatrix.needsUpdate = true;
  })
  const [mapSun] = useLoader(TextureLoader, [Degrade])

  return (
    <>
    {/* Particules */}
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.03]} />
      <meshBasicMaterial />
    </instancedMesh>

    {/* SUN */}
    <mesh position={[0, 0, -10]} rotation={[0, 5.5, 0]}
      // onPointerEnter={() => {}} 
      // onPointerLeave={() => {}}
    >
      <sphereBufferGeometry args={[5, 30, 30 ]} attach="geometry" />
      <meshStandardMaterial map={mapSun} attach='material' color="white" />
    </mesh>
    </>
  )
}

// Camera effect
function Rig({ children }) {
  const ref = useRef()
  const vec = new THREE.Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 10), 0.05)
    ref.current.position.lerp(vec.set(mouse.x * -4, mouse.y * -4, 0), 0.1)
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
  })
  return <group ref={ref}>{children}</group>
}



export default function ParticulesOndulation() {
  return (
    <>    
    <Controller />
    <Canvas orthographic  camera={{zoom: 25}} colorManagement={false}>
      {/* <color attach="background" args={['red']} /> */}
      {/* <axesHelper /> */}
      <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
      <ambientLight intensity={1} />
      {/* <spotLight position={[2, 0, 15]} angle={0.2} intensity={.2} penumbra={.05} castShadow /> */}

      <Rig>
        <Suspense fallback={null}>
          <Dots/>
          <TitleName position={[0, 0, 1]}/>
          <TitleDev position={[0, 2, 1]}/>
        </Suspense>
      </Rig>
    </Canvas>
    </>
  )
}