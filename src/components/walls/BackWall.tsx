import { useTexture } from '@react-three/drei'
import { Geometry, Base, Subtraction } from '@react-three/csg'

export default function BackWall({ position, rotation }) {
  const props = useTexture({
    map: 'textures/Concrete043D/Concrete043D_1K_Color.jpg',
    normalMap: 'textures/Concrete043D/Concrete043D_1K_NormalGL.jpg',
    roughnessMap: 'textures/Concrete043D/Concrete043D_1K_Roughness.jpg',
  })

  return (
    <mesh position={position} rotation={rotation} receiveShadow castShadow>
      <Geometry>
        <Base>
          <boxGeometry args={[10, 6, 0.1]} />
        </Base>
        <Subtraction>
          <boxGeometry args={[1.95, 1.34, 0.1]} position={[0, 0, 0]} />
        </Subtraction>
      </Geometry>
      <meshStandardMaterial color='white' {...props} />
    </mesh>
  )
}

// <mesh position={position} rotation={rotation} receiveShadow castShadow>
//   <boxGeometry args={[10, 6, 0.1]} />
//   <meshStandardMaterial color='white' {...props} />
// </mesh>
