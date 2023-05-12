import { OrbitControls, useTexture, PivotControls } from '@react-three/drei'
import Wall from './Wall'
import Model from './Model'

function Room() {
  const map = useTexture('models/Plank030A/Planks030A_2K_Color.jpg')
  const normalMap = useTexture('models/Plank030A/Planks030A_2K_NormalGL.jpg')
  const roughnessMap = useTexture('models/Plank030A/Planks030A_2K_Roughness.jpg')
  const displacementMap = useTexture('models/Plank030A/Planks030A_2K_Displacement.jpg')
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
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
        />
      </mesh>
      <Wall position={[0, 2, 5]} rotation={[0, 0, 0]} />
      <Wall position={[0, 2, -5]} rotation={[0, Math.PI, 0]} />
      <Wall position={[5, 2, 0]} rotation={[0, Math.PI * 0.5, 0]} />

      <Model url='/models/broken-window/broken_window.glb' position={[0, 0, 2]} rotation={[0, 1.5, 0]} />
    </>
  )
}

export default Room
