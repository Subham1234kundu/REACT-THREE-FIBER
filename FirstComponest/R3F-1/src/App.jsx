
import './App.css'
import {Canvas} from "@react-three/fiber";
import Scene from './Scene';
function App() {
 
  const createCanvasHandler = (state)=>{
    // state.gl.setClearColor("gray",0.5)
  }

  return (
    
    <Canvas 
    gl={{
      antialias:true,
      alpha:true
    }}
    // orthographic
    camera={
      {fov:45,
      near:0.1,
      far:100 , 
      // zoom:120
    }
    }
    onCreated={createCanvasHandler}
    
    >
      {/* <axesHelper/> */}
      {/* <gridHelper/> */}
      <Scene/>
    </Canvas>
    
  )
}

export default App
