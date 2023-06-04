'use client'

import Experience from '@/components/canvas/Experience46'
import Experience47 from '@/components/canvas/Experience47'
import Experience48 from '@/components/canvas/Experience48'
import Experience49 from '@/components/canvas/Experience49'
import Experience51 from '@/components/canvas/Experience51'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <>
      <Canvas className='touch-none' flat shadows={false}>
        <Experience51 />
      </Canvas>
    </>
  )
}
