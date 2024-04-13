import React from 'react'
import * as THREE from "three";

const Custom = () => {
    const positionArray = new Float32Array([
        0,0,0,
        0,1,0,
        1,0,0
    ])
  return (
 <>
 <mesh>
    <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={3} itemSize={3} array={positionArray}/>
    </bufferGeometry>
    <meshBasicMaterial color={"purple"} side={THREE.DoubleSide}/>
 </mesh>
 </>
  )
}

export default Custom
