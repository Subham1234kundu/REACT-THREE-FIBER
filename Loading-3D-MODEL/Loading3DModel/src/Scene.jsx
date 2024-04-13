import React from 'react'
import Model from './Model';
import { Suspense } from 'react';
import {OrbitControls} from "@react-three/drei";


const Scene = () => {

  return (
<>
<ambientLight intensity={4}/>
<directionalLight/>
<OrbitControls/>




<Suspense fallback={<mesh>
    <boxGeometry/>
    <meshBasicMaterial/>
</mesh>}/>
<Model/>
</>
  )
}

export default Scene
