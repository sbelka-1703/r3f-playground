import { OrbitControls, useTexture, PivotControls, Sky, Stage } from '@react-three/drei'
import Wall from './Wall'
import Model from './Model'
import { Perf } from 'r3f-perf'

import BackWall from './walls/BackWall'
import SideWall from './walls/SideWall'
import { useControls } from 'leva'
import DirectionalLightWithHelper from './light/DeriectionalLightHelper'

function Room() {
  const map = useTexture('textures/Plank030A/Planks030A_2K_Color.jpg')
  const normalMap = useTexture('textures/Plank030A/Planks030A_2K_NormalGL.jpg')
  const roughnessMap = useTexture('textures/Plank030A/Planks030A_2K_Roughness.jpg')
  const displacementMap = useTexture('textures/Plank030A/Planks030A_2K_Displacement.jpg')

  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  })

  return (
    <Stage>
      {/* <Sky sunPosition={sunPosition} /> */}
      {/* <DirectionalLightWithHelper position={sunPosition} intensity={10} /> */}

      <OrbitControls makeDefault />
      <PivotControls>
        <mesh castShadow>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </PivotControls>
      <mesh receiveShadow rotation-x={Math.PI * -0.51} position-y={-1.32} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          map={map}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
        />
      </mesh>

      <SideWall position={[0, 2, 5]} rotation={[0, 0, 0]} />
      <SideWall position={[0, 2, -5]} rotation={[0, Math.PI, 0]} />
      <BackWall position={[5, 2, 0]} rotation={[0, Math.PI * 0.5, 0]} />

      <Model url='/models/broken-window/broken_window.glb' position={[5, 2, 0]} rotation={[0, 1.55, 0]} />
      <Perf position='top-left' />
    </Stage>
  )
}

export default Room
