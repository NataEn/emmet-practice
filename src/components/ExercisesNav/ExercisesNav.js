import React from "react";
import "./ExercisesNav.css";
import Arrow from "../Arrow/Arrow";

export default function ExercisesNav({ currentLevel }) {
  return (
    <div className="header_exercises">
      <Arrow size={"7px"} direction={"left"} position={"left"} hover={true} />
      <div className="header_exercises__nav-title">
        Level
        {currentLevel || 1} of 24 <Arrow size={"3px"} direction={"down"} />
      </div>
      <Arrow size={"7px"} direction={"right"} position={"right"} hover={true} />
    </div>
  );
}
