import React from "react";
import "./style.css";
import ChooseMonster from "./ChooseMonster/ChooseMonster";
import LeafParticles from '../Particles/LeafParticles';
import RainParticles from '../Particles/RainParticles';
import SmokeParticles from '../Particles/SmokeParticles';

function LandingPage() {
    return (
        <>
        <div className="background">
        <LeafParticles/>
        <ChooseMonster/>
        </div>
        </>
      );
}

export default LandingPage;
