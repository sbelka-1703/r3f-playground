import { useTexture } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'

export default function SideWall({ position, rotation }) {
  const props = useTexture({
    map: 'textures/Plaster-wall/color_map.jpg',
    normalMap: 'textures/Plaster-wall/normal_map_opengl.jpg',
    roughnessMap: 'textures/Plaster-wall/roughness_map.jpg',
  })

  return (
    <mesh position={position} rotation={rotation} receiveShadow castShadow>
      <Geometry>
        <Base>
          <boxGeometry args={[10, 6, 0.1]} />
        </Base>
      </Geometry>
      <meshStandardMaterial color='white' {...props} />
    </mesh>
  )
}
