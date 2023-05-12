import { useTexture } from '@react-three/drei'
import { Vector3 } from 'three'

interface linkProps {
  position?: Vector3 | [number, number, number]
  rotation?: Vector3 | [number, number, number]
  mapLink?: string
  normalMapLink?: string
  roughnessMapLink?: string
  displacementMapLink?: string
}

export default function Wall({
  position,
  rotation,
  mapLink,
  normalMapLink,
  roughnessMapLink,
  displacementMapLink,
}: linkProps) {
  // const map = mapLink ? useTexture(mapLink) : undefined
  // const normalMap = normalMapLink ? useTexture(normalMapLink) : undefined
  // const roughnessMap = roughnessMapLink ? useTexture(roughnessMapLink) : undefined
  // const displacementMap = displacementMapLink ? useTexture(displacementMapLink) : undefined

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
