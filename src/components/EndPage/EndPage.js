import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import LeafParticles from "../Particles/LeafParticles";
import nastyDeath from "./images/nasty_rip.GIF";
import bonkcoDeath from "./images/bonkco_rip.GIF";
import ashleighDeath from "./images/ashleigh_rip.GIF";

function EndPage(deathImage) {
  function getImage() {
    if (deathImage === "nastyDeath") {
      return <img className="badge-icon" src={nastyDeath}></img>;
    } else if (deathImage === "bonkcoDeath") {
      return <img className="badge-icon" src={bonkcoDeath}></img>;
    } else {
      return <img className="badge-icon" src={ashleighDeath}></img>;
    }
  }

  return (
    <>
      <LeafParticles />
      <div className="text-container">
        <h1 className="header">CONGRATULATIONS, YOU SLAYED!</h1>

        <div className="message-container">
          {getImage()}
          <h2>You've earned a new badge!</h2>
        </div>

        <Link to="/">
          <button className="replay-button"> PLAY AGAIN?</button>
        </Link>
      </div>
    </>
  );
}

export default EndPage;
