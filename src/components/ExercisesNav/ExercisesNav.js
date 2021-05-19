import React, { useState } from "react";
import "./ExercisesNav.css";
import Arrow from "../Arrow/Arrow";
import NavDropdown from "../NavDropdown/NavDropdown.jsx";

export default function ExercisesNav({ currentLevel }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="header_exercises">
      <Arrow size={"7px"} direction={"left"} position={"left"} hover={true} />
      <div
        className="header_exercises__nav-title"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        Level
        {currentLevel || 1} of 24 <Arrow size={"3px"} direction={"down"} />
      </div>
      <Arrow size={"7px"} direction={"right"} position={"right"} hover={true} />
      <NavDropdown show={showTooltip} />
    </div>
  );
}
