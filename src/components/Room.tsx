import { OrbitControls, Html } from '@react-three/drei'

function CubeExample() {
  return (
    <>
      <OrbitControls makeDefault />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh rotation-x={Math.PI * -0.5} position-y={-1} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color='greenyellow' /> */}
        <meshStandardMaterial color='lightGreen' />
      </mesh>
    </>
  )
}

export default CubeExample
