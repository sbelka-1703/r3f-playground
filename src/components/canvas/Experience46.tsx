import { useFrame } from '@react-three/fiber'
import {
  Sparkles,
  Stage,
  Float,
  Lightformer,
  Environment,
  Sky,
  ContactShadows,
  RandomizedLight,
  AccumulativeShadows,
  softShadows,
  BakeShadows,
  useHelper,
  OrbitControls,
} from '@react-three/drei'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useControls } from 'leva'

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// })

export default function Experience46() {
  const cube = useRef()
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2
    const time = state.clock.elapsedTime
    cube.current.position.x = 2 + Math.sin(time)
  })

  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#000000 ',
    opacity: { value: 0.5, min: 0, max: 1 },
    blur: { value: 0.5, min: 0, max: 10 },
  })

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  })

  const { envMapIntensity } = useControls('environment map', {
    envMapIntensity: { value: 3.5, min: 0, max: 12 },
  })

  // Causing out of memory error
  // const { envMapIntensity } = useControls('environment map', {
  //   envMapIntensity: { value: 1, min: 0, max: 12 },
  // })
  return (
    <>
      {/* <Environment
        ground={{ height: 7, radius: 28, scale: 28 }}
        preset='sunset'
        // files={'./environmentMaps/the_sky_is_on_fire_2k.hdr'}
      > */}
      {/* <color args={['#000000']} attach='background' />
        <Lightformer position-z={-5} scale={10} intensity={10} color='red' form='ring' /> */}

      {/* <mesh scale={10} position-z={-5}>
          <planeGeometry />
          <meshBasicMaterial color={[200, 0, 0]} />
        </mesh> */}
      {/* </Environment> */}

      {/* <Sky sunPosition={sunPosition} /> */}
      {/* <ContactShadows
        position={[0, -0.99, 0]}
        scale={10}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
      /> */}
      {/* <BakeShadows />
      <color attach='background' args={['ivory']} /> */}

      {/* <directionalLight
        position={sunPosition}
        intensity={1.5}
        ref={directionalLight}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      /> */}
      {/* <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}
      >
       
      </AccumulativeShadows> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <Sky sunPosition={sunPosition} /> */}
      {/* <directionalLight position={[1, 2, 3]} castShadow /> */}
      {/* <RandomizedLight amount={8} radius={1} ambient={0.5} intensity={1} position={[1, 2, 3]} bias={0.001} /> */}

      {/* <Stage
        contactShadow={{ opacity: 0.2, blur: 3 }}
        environment="sunset"
        // Change the directional lights preset ('rembrandt', 'portrait', 'upfront', 'soft')
        preset="soft"
        // Change the directional lights intensity
        intensity={1}
      > */}
      {/* <Stage
        contactShadow={{ opacity: 0.2, blur: 3 }}
        shadows
        adjustCamera
        intensity={1}
        environment='city'
        preset='rembrandt'
      > */}
      <Perf position='top-left' />

      <OrbitControls makeDefault />
      <Stage contactShadow={{ opacity: 0.2, blur: 3 }} preset='portrait' intensity={2} environment='sunset'>
        <mesh position-x={-2} position-y={1} castShadow>
          <sphereGeometry />
          <meshStandardMaterial
            color='orange'
            // envMapIntensity={3.5}
          />
        </mesh>
        <mesh ref={cube} position-x={2} position-y={1} scale={1.5} castShadow>
          <boxGeometry />
          <meshStandardMaterial
            color='mediumpurple'
            envMapIntensity={envMapIntensity}
            // envMapIntensity={3.5}
          />
        </mesh>
      </Stage>

      {/* </Stage> */}

      {/* <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        // receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial
          color='greenyellow'
          envMapIntensity={envMapIntensity}
          // envMapIntensity={3.5}
        />
      </mesh> */}
    </>
  )
}
