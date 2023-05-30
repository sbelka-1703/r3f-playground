import { useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'
export default function Experience49() {
  const cube = useRef()
  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2
  })

  const eventHandler = () => {
    cube.current.material.color.set(`hsl(${Math.random() * 360}, 100%, 75%)`)
  }

  const hamburger = useGLTF('./hamburger.glb')
  console.log(hamburger)

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} onClick={eventHandler} />
      <ambientLight intensity={0.5} />
      <mesh
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
        }}
        onPointerLeave={(e) => {
          document.body.style.cursor = 'default'
        }}
        ref={cube}
        onClick={eventHandler}
        scale={1.5}
        position-x={-2}
      >
        <boxGeometry />
        <meshStandardMaterial color='purple' />
      </mesh>
      <mesh position-x={2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <primitive object={hamburger.scene} position-y={4} scale={0.3} />
    </>
  )
}
