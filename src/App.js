import "./App.css";
import HealthBar from "./components/HealthBar/HealthBar";
import TaskBar from "./components/TaskBar/TaskBar";
import LeafParticles from "./components/Particles/LeafParticles";
import RainParticles from "./components/Particles/RainParticles";
import SmokeParticles from "./components/Particles/SmokeParticles";
import LandingPage from "./components/LandingPage/LandingPage";
import EndPage from "./components/EndPage/EndPage";
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <LandingPage />
      <HealthBar />
      <TaskBar />
      <EndPage />
    </>
  );
}

export default App;
