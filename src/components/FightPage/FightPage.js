import React from 'react'
import HealthBar from './HealthBar/HealthBar'
import TaskBar from './TaskBar/TaskBar'
import { useState } from 'react';

function FightPage() {
    // this page is for the fight page screen view.

    // state variables for healthbar
    const [noFirstTask, setFirstTask] = useState(true);
    const [numOfTasks, setNumOfTasks] = useState(0);
    const [health, setHealth] = useState(100);

    /* START OF FUNCTIONS FOR HEALTHBAR */
    function CompleteTask(){
        if (numOfTasks !== 0 && !noFirstTask){
            setNumOfTasks(numOfTasks - 1);
        }
        Attack((noFirstTask) ? 0 : (health / numOfTasks));
    }

    // decreases health.
    function Attack(inc){

        if (health > 0){ 
            setHealth(health - inc)
        }
    }

    function AddTask(){

        if (noFirstTask) {
            setFirstTask(false);
        }
        
        setNumOfTasks(numOfTasks + 1);
    }

 
    /* END OF HEALTHBAR FUNCTIONS */

    /* START OF TASKBAR FUNCTIONS */
    
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState("");

    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        if(inputText !== ""){
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ])
        setInputText("");
        }
    };

    /* END OF TASKBAR FUNCTIONS */

    return (
        <>
            <HealthBar 
                health={health}
                CompleteTask={CompleteTask}
                AddTask={AddTask}
            />

            <TaskBar
                inputText={inputText}
                inputTextHandler={inputTextHandler}
                submitTodoHandler={submitTodoHandler}
                todos={todos}
                setTodos={setTodos}
            />
        </>
  )
}

export default FightPage