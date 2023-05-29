import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Experience47() {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
  const [torusGeometry, setTorusGeometry] = useState('')
  const [material, setMaterial] = useState('')

  const donutGroup = useRef()

  useFrame((state, delta) => {
    for (const donut of donutGroup.current.children) {
      donut.rotation.y += delta * 0.2
    }
  })

  return (
    <>
      <Perf position='top-left' />
      <OrbitControls makeDefault />
      <torusGeometry ref={setTorusGeometry} ags={[1, 0.6, 16, 32]} />
      <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} />

      <Center>
        <Text3D
          size={0.75}
          height={0.2}
          material={material}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          font='./fonts/helvetiker_regular.typeface.json'
        >
          HELLO R3F
        </Text3D>
      </Center>
      <group ref={donutGroup}>
        {[...Array(100)].map((value, index) => (
          <mesh
            geometry={torusGeometry}
            material={material}
            key={index}
            position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          ></mesh>
        ))}
      </group>
    </>
  )
}
