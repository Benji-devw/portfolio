import React, { useRef, useMemo, Suspense, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useThree, useFrame, useLoader} from '@react-three/fiber';
import { Text, CameraShake } from '@react-three/drei'
import { TextureLoader } from 'three';

import Degrade from '../../../assets/HomeDegradé.jpg';




function TitleName({position}) {
  return <Text 
    position={position}
    color="black" anchorX="center" anchorY="middle"
    fontSize={2}
    // maxWidth={200}
    lineHeight={2}
    letterSpacing={0.02}
    font="./fonts/Satisfy-Regular.ttf"

  >
    Developpeur Web</Text>
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
  >
    Navarro Benjamin</Text>
}



function Dots() {
  // const [timeControl, setTimeControl] = useState(1);
  const [rotationControl, setRotationControl] = useState(0.009);

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

      position.y += (i % 2) * 0.5  // Offset every other column (hexagonal pattern)
      
      // Add some noise
      position.x += Math.random() * 0
      position.y += Math.random() * 0
      return position
    })
    // Precompute initial distances with octagonal offset
    const right = new THREE.Vector3(1, 0, 0)
    const distances = positions.map((pos) => {
    // return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
      return pos.length() + Math.cos(pos.angleTo(right) * 8) * 6 
    })
    return {vec, transform, positions, distances};
  }, [])

  useFrame(( {clock} ) => {

    ref.current.rotation.z += rotationControl;
    // ref.current.rotation.z += 0.009;

    for (let i = 0; i < 10000; ++i) {

      const dist = distances[i]

      // Distance affects the wave phase
      const t = clock.elapsedTime / 1.5 + dist / 15


      // Oscillates between -0.4 and +0.4
      // const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8);
      const wave = roundedSquareWave(t, 0.15 + (1 * dist) / 72, 0.4, 1 / 4.5);


        vec.copy(positions[i]).multiplyScalar(wave + .75)    // Scale initial position by our oscillator
        transform.setPosition(vec)                          // Apply the Vector3 to a Matrix4
        ref.current.setMatrixAt(i, transform)              // Update Matrix4 for this instance

    }
    ref.current.instanceMatrix.needsUpdate = true;
  })
  const [mapSun] = useLoader(TextureLoader, [Degrade])

  return (
    <>
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.03]} />
      <meshBasicMaterial />
    </instancedMesh>
    <mesh position={[0, 0, -10]} rotation={[0, 5.5, 0]}
      onPointerEnter={(e) => {
        setRotationControl(0.005) 
        // setTimeControl(5)
      }} 
      onPointerLeave={(e) => {
        setRotationControl(0.008) 
        // setTimeControl(1)
      }}
    >
      <sphereBufferGeometry args={[5, 30, 30 ]} attach="geometry" />
      <meshStandardMaterial map={mapSun} attach='material' color="white" />
    </mesh>
    </>
  )
}

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
    <Canvas orthographic  camera={{zoom: 25}} colorManagement={false}>
      {/* <color attach="background" args={['red']} /> */}
      {/* <axesHelper /> */}
      <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
      <ambientLight intensity={1} />
      {/* <spotLight position={[2, 0, 15]} angle={0.2} intensity={.2} penumbra={.05} castShadow /> */}

            <Rig>
        <Suspense fallback={null}>
          <TitleName position={[0, 0, 1]}/>
          <TitleDev position={[0, 2, 1]}/>
          <Dots/>
          {/* <Sun /> */}
        </Suspense>
      </Rig>



    </Canvas>
  )
}