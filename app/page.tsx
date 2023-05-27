'use client'

import { useEffect } from 'react'
import CubeExample from '@/components/CubeExample'
import Room from '@/components/Room'
import { useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'

export default function Page() {
  return (
    <>
      <Canvas shadows>
        <ambientLight intensity={0.4} color='white' />
        <Room />
      </Canvas>
    </>
  )
}
