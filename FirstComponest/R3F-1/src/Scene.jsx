import React from 'react'
import { useFrame , extend ,useThree,useLoader} from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from "three";
import { OrbitControls } from '@react-three/drei';
import Custom from './Custom';
import Particales from './Particales';

extend({OrbitControls:OrbitControls})
const Scene = () => {
    const cubeRef = useRef();
    const planeRef = useRef();
    const {gl,camera}= useThree();
    const texture = useLoader(THREE.TextureLoader,"./public/download.png");

    useFrame((state,delta)=>{
        // cubeRef.current.rotation.y += 0.01;
        // planeRef.current.rotation.y += delta;
        // state.camera.position.x = Math.sin(state.clock.elapsedTime)
    });

  return (
    <>
    <OrbitControls />
    {/* <Custom/>
    <mesh ref={planeRef} position-x={-1}>
    <planeGeometry ref={planeRef} args={[1,1]}/>
    <meshBasicMaterial map={texture}  side={THREE.DoubleSide}/>
    </mesh>

    <mesh ref={cubeRef} position-x={1} >
    <boxGeometry />
    <meshBasicMaterial color={"green"} wireframe/>
    </mesh> */}
     
     <Particales/>
        
    </>

  )
}

export default Scene;
