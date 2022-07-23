import './App.css';
import ChooseMonster from './components/ChooseMonster/ChooseMonster';
import HealthBar from './components/HealthBar/HealthBar';
import TaskBar from './components/TaskBar/TaskBar';
import Particles from './components/Particles/Particles';

function App() {
  return (
    <>
      <ChooseMonster/>
      <HealthBar/>
      <TaskBar/>
      <Particles/>
    </>
  );
}

export default App;
