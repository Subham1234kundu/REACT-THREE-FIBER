import React,{useEffect} from 'react'
import { useGLTF,useAnimations } from '@react-three/drei';
import Bike from '../public/model/Bike';

const Model = () => {
    const model  =  useGLTF("./public/model/dog.glb");
    const animations =  useAnimations(model.animations,model.scene);
    useEffect(()=>{
        animations.actions.Writing.play()
    },[])
  return (
    <>
    <primitive object={model.scene} rotation-y="2"  position-x="-0.2" position-y="0.3" />
    <Bike scale={0.85} />
    </>
  )
}

export default Model
