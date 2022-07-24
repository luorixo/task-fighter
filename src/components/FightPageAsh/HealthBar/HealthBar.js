import React from "react";
import { LinearProgress } from "@mui/material";
import { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import "./style.css";

function HealthBar({ health }) {
  function ProgressBarColour() {
    if (health > 67) {
      return "green";
    } else if (health > 34) {
      return "orange";
    } else {
      return "red";
    }
  }

  // STYLING
  const StyledHealthBar = styled(LinearProgress)(() => ({
    width: "80%",
    height: "1vw",
    backgroundColor: "grey",
    border: "none",
    borderRadius: "25px",
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: ProgressBarColour(),
      borderRadius: "25px",
    },
  }));

  return (
    <>
      <div className="healthbox">
        <label className="namelabel">ASH-LEIGH</label>
        <div className="hpbox">
          <StyledHealthBar variant="determinate" value={health} />
        </div>
      </div>
    </>
  );
}

export default HealthBar;
