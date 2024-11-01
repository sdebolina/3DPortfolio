import { Suspense, useEffect, useState ,useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Islands from '../models/Islands'; // Assuming Islands is the 3D model
import Sky from '../models/Sky';
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3';
import { soundon, soundoff } from '../assets/icons'; // Import both icons



const Home = () => {
  const audioRef=useRef(new Audio(sakura));
  audioRef.current.volume=0.4;
  audioRef.current.loop=true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic]=useState(false);
  useEffect(()=>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return()=>{
      audioRef.current.pause();
    }
  },[isPlayingMusic])

  const [islandScale, setIslandScale] = useState([1, 1, 1]);
  const [islandPosition, setIslandPosition] = useState([0, -6.5, -43.4]);
  const [islandRotation, setIslandRotation] = useState([0.1, 4.7077, 0]);

  const [planeScale, setPlaneScale] = useState([1, 1, 1]);
  const [planePosition, setPlanePosition] = useState([0, 10, 15]);

  const adjustForScreenSize = () => {
    if (window.innerWidth < 768) {
      setIslandScale([0.9, 0.9, 0.9]);
      setIslandPosition([0, -6.5, -43.4]);
      setPlaneScale([0.05, 0.05, 0.05]);
      setPlanePosition([0, -1, 0]);
    } else {
      setIslandScale([1, 1, 1]);
      setIslandPosition([0, -6.5, -43.4]);
      setPlaneScale([0.05, 0.05, 0.05]);
      setPlanePosition([0, -1, 0]);
    }
  };

  useEffect(() => {
    adjustForScreenSize();
    window.addEventListener('resize', adjustForScreenSize);
    return () => window.removeEventListener('resize', adjustForScreenSize);
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ fov: 75, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={2} position={[5, 5, 5]} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <Sky isRotating={isRotating} />
          <Bird />
          <Islands
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane 
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, Math.PI / 3, 0]} // Adjusted Y-axis rotation
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={!isPlayingMusic? soundoff :soundon}
          alt="sound"
          className='w-10 h-10 cursor-pointer object-contain'
          onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
}

export default Home;
