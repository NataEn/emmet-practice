import React, { useState } from "react";
import "./ExercisesNav.css";
import Arrow from "../Arrow/Arrow";
import NavDropdown from "../NavDropdown/NavDropdown.jsx";

export default function ExercisesNav({ currentLevel, setLevel, reset }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="header_exercises">
      <Arrow
        size={"7px"}
        direction={"left"}
        position={"left"}
        hover={true}
        onClick={() => {
          console.log("prev level");
          if (currentLevel >= 1 && currentLevel <= 23)
            setLevel(currentLevel - 1);
        }}
      />
      <div
        className="header_exercises__nav-title"
        onClick={() => setShowTooltip(!showTooltip)}
      >
        Level
        <span>{currentLevel + 1}</span> of 24
        <Arrow size={"3px"} direction={"down"} />
      </div>
      <Arrow
        size={"7px"}
        direction={"right"}
        position={"right"}
        hover={true}
        onClick={() => {
          console.log("next level");

          if (currentLevel >= 0 && currentLevel <= 22)
            setLevel(currentLevel + 1);
        }}
      />
      <NavDropdown
        show={showTooltip}
        currentLevel={currentLevel}
        setLevel={setLevel}
        reset={reset}
      />
    </div>
  );
}
