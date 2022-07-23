import React from "react";
import "./styles.css";
import badgeIcon from "./badge.gif";

function EndPage() {
  return (
    <>
      <div className="text-container">
        <h1 className="header">CONGRATULATIONS, YOU SLAYED!</h1>

        <div className="message-container">
          <img className="badge-icon" src={badgeIcon}></img>
          <h2>You've earned a new badge!</h2>
        </div>

        <button className="replay-button"> PLAY AGAIN?</button>
      </div>
    </>
  );
}

export default EndPage;
