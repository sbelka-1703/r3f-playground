import { useFrame } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { useRef } from 'react'
export default function Experience49() {
  const cube = useRef()
  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2
  })

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <mesh ref={cube} scale={1.5} position-x={-2}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>
      <mesh position-x={2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
    </>
  )
}
