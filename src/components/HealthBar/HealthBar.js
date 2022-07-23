import React from 'react'
import { useState } from 'react';
import { LinearProgress } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

function HealthBar() {
    const [noFirstTask, setFirstTask] = useState(true);
    const [numOfTasks, setNumOfTasks] = useState(0);
    const [health, setHealth] = useState(100);

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

    function progressBarColour() {
        if (health > 70){
            return 'lime'

        } else if (health > 50){
            return 'orange'

        } else if (health > 30){
            return 'orange'

        } else {
            return 'red'
        }
    }

    // STYLING
    const StyledHealthBar = styled(LinearProgress)(() => ({
        width: '50%',
        height: '1vw',
        backgroundColor: 'grey',
        border: 'solid 1px black',
        borderRadius: '25px',
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: progressBarColour(),
            borderRadius: '25px',
        }
    }));

    return (
        <>
            <StyledHealthBar variant='determinate' value={health}/> 
            <Button variant='outlined' onClick={() => CompleteTask()}>ATTACK</Button>
            <Button variant='outlined' onClick={() => AddTask()}>ADD TASK</Button>
        </>
  )
}

export default HealthBar