import React from "react";
import {
  StyledTooltipWrapper,
  StyledLevels,
  StyledLevel,
  StyledButton,
} from "./StyledNavDropdown";

const NavDropdown = ({ show, currentLevel, setLevel, reset }) => {
  const levels = 24;
  const levelsArr = new Array(levels).fill("");
  return (
    <StyledTooltipWrapper show={show}>
      <StyledLevels>
        {levelsArr.map((level, index) => (
          <StyledLevel
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
