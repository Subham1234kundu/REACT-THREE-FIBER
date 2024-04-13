import { useLoader,useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import React from 'react';
import * as THREE from "three";

const Particales = () => {
    const particales = useRef();
    useFrame((_,delta)=>{
        particales.current.rotation.y += delta*0.1;
        particales.current.rotation.x += delta*0.1;
    })

    const texture = useLoader(THREE.TextureLoader,"./public/alphaSnow.jpg");

    const vertiicesAmount = 2000;
    const positionArray = new Float32Array(vertiicesAmount*3);
    for(let i = 0; i<vertiicesAmount*3;i++){
        positionArray[i] = (Math.random()-0.5)*10;
    }
  return (
    <>
    <points ref={particales}>
        <bufferGeometry>
            <bufferAttribute 
            attach="attributes-position" 
            count={positionArray.length}
            itemSize={3}
            array={positionArray}
            />
        </bufferGeometry>
        <pointsMaterial size={0.06} alphaMap={texture} transparent depthTest={false}/>
    </points>
      
    </>
  )
}

export default Particales;
