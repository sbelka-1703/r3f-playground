import { useTexture } from '@react-three/drei'
export default function Wall({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation} receiveShadow castShadow>
      <boxGeometry args={[10, 6, 0.1]} />
      <meshStandardMaterial
        color='white'
        // map={map}
        // normalMap={normalMap}
        // roughnessMap={roughnessMap}
        // displacementMap={displacementMap}
      />
    </mesh>
  )
}
