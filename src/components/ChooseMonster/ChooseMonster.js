import React from "react";
import "./styles.css";
import monsterOne from "./images/monster1.png";
import monsterTwo from "./images/monster2.png";
import monsterThree from "./images/monster3.png";

// hello
function ChooseMonster() {
  return (
    <div className="mainContainer">
      <button className="left-section">
        <span className="title">CHOOSE</span>
        <img className="monster-image" src={monsterOne} alt="" />
      </button>
      <button className="middle-section">
        <span className="title">YOUR</span>
        <img className="monster-image" src={monsterTwo} alt="" />
      </button>
      <button className="right-section">
        <span className="title">MONSTER</span>
        <img className="monster-image" src={monsterThree} alt="" />
      </button>
    </div>
  );
}

export default ChooseMonster;
