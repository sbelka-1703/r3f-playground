import { OrbitControls, Html } from '@react-three/drei'

function CubeExample() {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh>
        <Html className='whitespace-nowrap font-serif text-2xl text-green-900' center position-y={1}>
          Spin me around!
        </Html>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}

export default CubeExample
