import React,{ useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  POPUP
</div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  //MARK: untuk mengukur ulang Island
  const adjustIslandForScreenSize = () => {
    let screenScale = [15, 15, 15];
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];


    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [2, -4, -4]
    }

    return [screenScale, screenPosition];
  }

  //MARK: untuk memanggil Screen yang sudah di adjust
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>  

          <Bird />
          <Sky isRotating = {isRotating}/>
          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          <Plane 
            isRotating = {isRotating}
            planeScale = {planeScale}
            planePosition= {planePosition}
            rotation = {[0, 20, 0]}
          />
        </Suspense>
        
      </Canvas>
    </section>
  )
}

export default Home