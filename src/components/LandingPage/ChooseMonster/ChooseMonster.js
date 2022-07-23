import React from "react";
import "./styles.css";
import monsterOne from "./images/monster1.png";
import monsterTwo from "./images/monster2.png";
import monsterThree from "./images/monster3.png";
import monsterOneGIF from "./images/monster1.GIF";
import monsterTwoGIF from "./images/monster2.GIF";
import monsterThreeGIF from "./images/monster3.GIF";

function ChooseMonster() {
  return (
    <>
      <h1>TASKFIGHTER</h1>

      <div className="box-container">
        <button className="box-section-1">
          <span className="title">CHOOSE</span>
          <img
            className="monster-image"
            id="monster-1"
            src={monsterOne}
            alt=""
          />
          <img
            className="monster-gif"
            id="monster-1-gif"
            src={monsterOneGIF}
            alt=""
          />
          <span className="name">NAS-TY</span>
        </button>
        <button className="box-section-2">
          <span className="title">YOUR</span>
          <img
            className="monster-image"
            id="monster-2"
            src={monsterTwo}
            alt=""
          />
          <img
            className="monster-gif"
            id="monster-2-gif"
            src={monsterTwoGIF}
            alt=""
          />
          <span className="name">ASH-LEIGH</span>
        </button>
        <button className="box-section-3">
          <span className="title">MONSTER</span>
          <img
            className="monster-image"
            id="monster-3"
            src={monsterThree}
            alt=""
          />
          <img
            className="monster-gif"
            id="monster-3-gif"
            src={monsterThreeGIF}
            alt=""
          />
          <span className="name">BON-KCO</span>
        </button>
      </div>
    </>
  );
}

export default ChooseMonster;
