'use client'

import Experience from '@/components/canvas/Experience'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas shadows={false}>
        <Experience />
      </Canvas>
    </>
  )
}
