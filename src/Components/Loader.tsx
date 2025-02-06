import { Html, useProgress } from "@react-three/drei";
import  PacmanLoader  from "react-spinners/PacmanLoader";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <PacmanLoader color="white" size={30}/>
    </Html>
  );
};

export default CanvasLoader;
