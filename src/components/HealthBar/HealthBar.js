import React from 'react'
import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Button } from '@mui/material';

function HealthBar() {

    // initiate health levels
    const [health, setHealth] = useState(100);
    
    // decreases health
    function Attack(){
        setHealth(health - 10)
    }

    // the health of the monster regenerates
    function MonsterRegen(){
        setHealth(health + 10)
    }

    return (
        <>
            <LinearProgress variant='determinate' value={health} />
            <Button variant='outlined' onClick={() => Attack()}>ATTACK</Button>
            <Button variant='outlined' onClick={() => MonsterRegen()}>MONSTER</Button>
        </>
  )
}

export default HealthBar