'use client'

import CubeExample from '@/components/CubeExample'
import Room from '@/components/Room'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas shadows>
        <directionalLight
          castShadow
          position={[5, 5, 0]}
          intensity={2}
          color='white'
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <ambientLight intensity={0.7} color='white' />
        <Room />
      </Canvas>
    </>
  )
}
