import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FightPage from "./components/FightPage/FightPage";
import FightPageAsh from "./components/FightPageAsh/FightPageAsh";
import FightPageBonk from "./components/FightPageBonk/FightPageBonk";
import LandingPage from "./components/LandingPage/LandingPage";
import EndPage from "./components/EndPage/EndPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fightnasty" element={<FightPage />} />
      <Route path="/fightbonk" element={<FightPageBonk />} />
      <Route path="/fightash" element={<FightPageAsh />} />
      <Route path="/nastywin" element={<EndPage deathImage={1} />} />
      <Route path="/ashwin" element={<EndPage deathImage={2} />} />
      <Route path="/bonkwin" element={<EndPage deathImage={3} />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
