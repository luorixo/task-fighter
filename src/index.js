import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FightPage from "./components/FightPage/FightPage";
import LandingPage from "./components/LandingPage/LandingPage";
import EndPage from "./components/EndPage/EndPage";
import nastyDeath from "./images/nasty_rip.GIF";
import bonkcoDeath from "./images/bonkco_rip.GIF";
import ashleighDeath from "./images/ashleigh_rip.GIF";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fight" element={<FightPage />} />
      <Route path="/nastywin" element={<EndPage deathImage="nastyDeath" />} />
      <Route
        path="/ashleighwin"
        element={<EndPage deathImage="ashleighDeath" />}
      />
      <Route path="/bonkcowin" element={<EndPage deathImage="bonkcoDeath" />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
