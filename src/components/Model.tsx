import { useLoader } from '@react-three/fiber'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader'
import { useGLTF } from '@react-three/drei'

import { useState } from 'react'

function Model({ url }) {
  //   const { scene: modelScene } = useLoader(ColladaLoader, url)
  const [scale] = useState(1)
  const [position] = useState([0, 1, 0])
  const [rotation] = useState([0, 1.5, 0])

  const { scene } = useGLTF(url)
  return <primitive object={scene} dispose={null} />
}

export default Model
