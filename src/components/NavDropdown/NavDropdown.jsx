import React from "react";
import {
  StyledTooltipWrapper,
  StyledLevels,
  StyledLevel,
  StyledButton,
} from "./StyledNavDropdown";

const NavDropdown = ({
  numberOfLevels,
  show,
  currentLevel,
  setLevel,
  reset,
  answers,
}) => {
  const levelsArr = new Array(numberOfLevels).fill("");
  return (
    <StyledTooltipWrapper show={show}>
      <StyledLevels>
        {levelsArr.map((level, index) => (
          <StyledLevel
            correct={answers && answers[index].isCorrect}
            key={index}
            className={currentLevel === index ? "selected" : ""}
            onClick={() => setLevel(index)}
          >
            {index + 1}
          </StyledLevel>
        ))}
      </StyledLevels>
      <StyledButton onClick={reset}>Reset</StyledButton>
    </StyledTooltipWrapper>
  );
};

export default NavDropdown;
