import React from 'react'
import { useState } from 'react';
import { LinearProgress } from '@mui/material';
import { linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

function HealthBar() {

    // initiate health levels and increment
    const [health, setHealth] = useState(100);
    const [increment, setIncrement] = useState(10); //TODO: NEED TO INITIATE, AND FIND OUT NUMBER OF TASKS

    // decreases health
    function Attack(inc){
        if (health > 0){ 
            setHealth(health - inc)
        }
    }

    // the health of the monster regenerates
    function MonsterRegen(inc){

        // updating increment
        // setIncrement(health);

        if (health < 100){
            setHealth(health + inc)
        }
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
            <Button variant='outlined' onClick={() => Attack(increment)}>ATTACK</Button>
            <Button variant='outlined' onClick={() => MonsterRegen(increment)}>MONSTER</Button>
        </>
  )
}

export default HealthBar