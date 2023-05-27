import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

export default function DirectionalLightWithHelper({ position, intensity }) {
  const directionalLight = useRef()
  useHelper(directionalLight, THREE.DirectionalLightHelper)

  return <directionalLight ref={directionalLight} castShadow position={position} intensity={intensity} color='white' />
}
