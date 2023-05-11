import { OrbitControls, Html } from '@react-three/drei'

function CubeExample() {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh castShadow>
        <Html className='text-gre whitespace-nowrap font-serif text-2xl' center position-y={1}>
          Spin me around!
        </Html>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export default CubeExample
