import React, { useState } from 'react'
import { useFrame , extend ,useThree} from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';


extend({OrbitControls:OrbitControls})
const Scene = () => {
 const [active,setActive] = useState(false);
   
    const clickEvent = ()=>{
      setActive(!active);
    }

  return (
    <>
    <OrbitControls />

    
    <mesh onClick={clickEvent}  position-x={-0.5}>
    <boxGeometry />
    <meshBasicMaterial  color={active?"yellow":"orange"} side={THREE.DoubleSide}/>
    </mesh>

    <mesh  onClick = {(e)=>{
      e.stopPropagation()
    }} position-x={1} >
    <boxGeometry />
    <meshBasicMaterial color={"green"}  />
    </mesh>
        
    </>

  )
}

export default Scene;
