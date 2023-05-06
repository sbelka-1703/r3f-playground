'use client'

import CubeExample from '@/components/CubeExample'
import Room from '@/components/Room'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas>
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <ambientLight intensity={0.7} color='yellowGreen' />
        <Room />
      </Canvas>
    </>
  )
}
