import React from "react";
import "./style.css";
import ChooseMonster from "./ChooseMonster/ChooseMonster";
import LeafParticles from '../Particles/LeafParticles';

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
