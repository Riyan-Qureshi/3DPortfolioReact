import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
// useProgress gives you number from 0 to 100 of how much the content is loaded
  const {progress} = useProgress();

  return (
    <Html 
        as='div' 
        center 
        style={{
            display: 'flex', 
            justifyContent: 'center',
             alignItems: 'center',
            flexDirection: 'column'
        }}>
        <span className='canvas-loader'/>
        <p className='text-base text-white font-bold mt-40'>
            {progress != 0 ? `${progress.toFixed(2)}%`:`Loading...`}
        </p>
    </Html>
  )
}

export default CanvasLoader