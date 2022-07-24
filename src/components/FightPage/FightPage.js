import React from "react";
import "./styles.css";
import HealthBar from "./HealthBar/HealthBar";
import TaskBar from "./TaskBar/TaskBar";
import { useState } from "react";
import LeafParticles from "../Particles/LeafParticles";
import RainParticles from "../Particles/RainParticles";
import SmokeParticles from "../Particles/SmokeParticles";
import nastyIdle from "./images/nasty_idle_1.GIF";
import nastyDamageOne from "./images/nasty_damage_1.GIF";
import nastyDamageTwo from "./images/nasty_damage_2.GIF";
import nastyDamageThree from "./images/nasty_damage_3.GIF";
import nastyDeath from "./images/nasty_rip.GIF";

function FightPage() {
  // this page is for the fight page screen view.

  // state variables for healthbar
  const [noFirstTask, setFirstTask] = useState(true);
  const [numOfTasks, setNumOfTasks] = useState(0);
  const [health, setHealth] = useState(100);

  /* START OF FUNCTIONS FOR HEALTHBAR */
  function CompleteTask() {
    if (numOfTasks !== 0 && !noFirstTask) {
      setNumOfTasks(numOfTasks - 1);
    }
    Attack(noFirstTask ? 0 : health / numOfTasks);
  }

  // decreases health.
  function Attack(inc) {
    if (health > 0) {
      setHealth(health - inc);
    }
  }

  /* END OF HEALTHBAR FUNCTIONS */

  /* START OF TASKBAR FUNCTIONS */

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");

      if (noFirstTask) {
        setFirstTask(false);
      }

      setNumOfTasks(numOfTasks + 1);
    }
  };

  /* END OF TASKBAR FUNCTIONS */

  return (
    <>
      <LeafParticles />
      <div className="root">
        <div className="task-div">
          <TaskBar
            inputText={inputText}
            inputTextHandler={inputTextHandler}
            submitTodoHandler={submitTodoHandler}
            todos={todos}
            setTodos={setTodos}
            CompleteTask={CompleteTask}
            noFirstTask={noFirstTask}
            setNumOfTasks={setNumOfTasks}
            numOfTasks={numOfTasks}
          />
        </div>

        <div className="right-side">
          <div className="health-div">
            <HealthBar health={health} />
          </div>
          <div className="monster-div">
            <img src={nastyIdle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FightPage;
