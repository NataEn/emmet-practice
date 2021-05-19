import React from "react";
import {
  StyledTooltipWrapper,
  StyledLevels,
  StyledLevel,
} from "./StyledNavDropdown";

const NavDropdown = ({ show, currentLevel }) => {
  const levels = 24;
  const levelsArr = new Array(levels).fill("");
  return (
    <StyledTooltipWrapper show={show}>
      <StyledLevels>
        {levelsArr.map((level, index) => (
          <StyledLevel className={currentLevel === index ? "selected" : ""}>
            {index + 1}
          </StyledLevel>
        ))}
      </StyledLevels>
    </StyledTooltipWrapper>
  );
};

export default NavDropdown;
