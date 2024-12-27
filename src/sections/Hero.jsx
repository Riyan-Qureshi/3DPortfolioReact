/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import PokeBall from '../components/PokeBall.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Rings.jsx'

const Hero = () => {
    // Creating a control panel with sliders using Leva to adjust 3D properties like rotation, size, and position 
//   const controls = useControls('HackerRoom', {
//     positionX: {
//         value: 0.8,
//         min: -10,
//         max: 10
//     },
//     positionY: {
//         value: -9,
//         min: -10,
//         max: 10
//     },
//     positionZ: {
//         value: 2,
//         min: -10,
//         max: 10
//     },
//     rotationX: {
//         value: 0,
//         min: -10,
//         max: 10
//     },
//     rotationY: {
//         value: -Math.PI,
//         min: -10,
//         max: 10
//     },
//     rotationZ: {
//         value: 0,
//         min: -10,
//         max: 10
//     },
//     scale: {
//         value: 0.1,
//         min: 0.1,
//         max: 10
//     }
// });
// useMediaQuery() lets you check whether current device dimensions conform to specified dimension boundaries 
const isSmall = useMediaQuery({maxWidth: 440});
const isMobile = useMediaQuery({maxWidth: 768});
const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        {/* sm:mt-36 mt-20 helps counteract the height of the navbar */}
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:3xl text-2xl font-medium text-white text-center font-generalsans'>
                Hi, I am Riyan! <span className='waving-hand'>👋🏼</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                I Build Software
            </p>
        </div>

        <div className='w-full h-full absolute inset-0'>
            {/* <Leva /> */}
            {/* When you have components in the canvas remember they are all in Threejs not jsx */}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>

                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    
                    <HackerRoom 
                        scale={sizes.deskScale}
                        position={sizes.deskPosition}
                        rotation={[0, -Math.PI, 0]}

                        // Leva Object Orientation Controls
                        // position={[controls.positionX, controls.positionY, controls.positionZ]}
                        // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                        // scale={[controls.scale, controls.scale, controls.scale]}
                    />

                    <group>
                        <Target position={sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition}/>
                        <PokeBall position={sizes.pokePosition}/>
                        <Cube position={sizes.cubePosition}/>
                        <Rings position={sizes.ringPosition}/>
                    </group>
                    
                    <ambientLight intensity={1}/>
                    <directionalLight position={[10,10,10]} intensity={0.5} color={0xF0F0F0}/>
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero