import { Text, Html, ContactShadows, Float, useGLTF, Environment, PresentationControls } from '@react-three/drei'

const Experience51 = () => {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
  )
  return (
    <>
      <Environment preset='studio' />
      <color args={['#695b5b']} attach='background' />
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        rotation={[0.12, 0.1, 0]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#ff6900'}
            rotation={[0.1, Math.PI, 0]}
            position={(0, 0.55, -1.15)}
          />
          <primitive position-y={-1} object={computer.scene}>
            <Html distanceFactor={1.17} transform position={[0, 1.56, -1.4]} rotation-x={-0.256}>
              <iframe
                className='background-black h-[670px] w-[1024px] rounded-[20px] border-0'
                src='https://bruno-simon.com/html/'
              />
            </Html>
          </primitive>
          <Text
            maxWidth={2}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            fontSize={1}
            font='./bangers-v20-latin-regular.woff'
            textAlign='center'
          >
            SERGEY BELYAEV
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  )
}

export default Experience51
