import { OrbitControls, useTexture } from '@react-three/drei'

function CubeExample() {
  const [woodenFloor] = useTexture(['Planks030A_4K_Color.jpg'])
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
        <meshStandardMaterial map={woodenFloor} />
      </mesh>
    </>
  )
}

export default CubeExample
