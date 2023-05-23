import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib'
import { Vector3 } from 'three'

interface ModelProps {
  url: string
  position?: Vector3 | [number, number, number]
  scale?: Vector3 | [number, number, number]
  rotation?: Vector3 | [number, number, number]
}

function Model({ url, position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0] }: ModelProps) {
  const model = useLoader(GLTFLoader, url)

  return <primitive object={model.scene} position={position} scale={scale} rotation={rotation} />
}

export default Model
