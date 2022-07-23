import './App.css';
import ChooseMonster from './components/ChooseMonster/ChooseMonster';
import HealthBar from './components/HealthBar/HealthBar';
import TaskBar from './components/TaskBar/TaskBar';
import LeafParticles from './components/Particles/LeafParticles';
import RainParticles from './components/Particles/RainParticles';
import SmokeParticles from './components/Particles/SmokeParticles';

function App() {
  return (
    <>
      <ChooseMonster/>
      <HealthBar/>
      <TaskBar/>
      <SmokeParticles/>
    </>
  );
}

export default App;
