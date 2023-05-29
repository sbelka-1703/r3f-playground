import { shaderMaterial, useGLTF, OrbitControls, useTexture, Center, Sparkles } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'Three'
import portalVertexShader from 'shaders/portal/vertex.js'
import portalFragmentShader from 'shaders/portal/fragment.js'

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#0000000'),
  },
  portalVertexShader,
  portalFragmentShader,
)

extend({ PortalMaterial })

export default function Experience48() {
  const { nodes } = useGLTF('./model/portal.glb')

  const bakedTexture = useTexture('./model/baked.jpg')
  bakedTexture.flipY = false
  return (
    <>
      <color args={['#201919']} attach='background' />
      <OrbitControls makeDefault />
      <Center>
        <mesh texture={bakedTexture} geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
          <mesh geometry={nodes.poleLightA.geometry} position={nodes.poleLightA.position}>
            {' '}
            <meshBasicMaterial color='#ffffe5' />{' '}
          </mesh>
          <mesh geometry={nodes.poleLightB.geometry} position={nodes.poleLightB.position} />
        </mesh>

        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <portalMaterial />
        </mesh>
        <Sparkles size={6} scale={[4, 2, 4]} position-y={1.3} count={40} speed={0.2} />
      </Center>
    </>
  )
}
