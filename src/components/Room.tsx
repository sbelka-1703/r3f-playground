import { OrbitControls, useTexture, PivotControls } from '@react-three/drei'
import Wall from './Wall'
import { useLoader } from '@react-three/fiber'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import Model from './Model'

function Room() {
  const [woodenFloor] = useTexture(['Planks030A_4K_Color.jpg'])
  return (
    <>
      <OrbitControls makeDefault />
      <PivotControls>
        <mesh castShadow>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </PivotControls>
      <mesh receiveShadow rotation-x={Math.PI * -0.5} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
        <meshStandardMaterial map={woodenFloor} />
      </mesh>
      <Wall position={[0, 2, 5]} rotation={[0, 0, 0]} />
      <Wall position={[0, 2, -5]} rotation={[0, Math.PI, 0]} />
      <Wall position={[5, 2, 0]} rotation={[0, Math.PI * 0.5, 0]} />

      {/* <Model url='/models/broken-windowGLTF/scene.gltf' /> */}
    </>
  )
}

export default Room
