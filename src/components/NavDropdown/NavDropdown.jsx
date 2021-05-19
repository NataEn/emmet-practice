import React from "react";
import {
  StyledTooltipWrapper,
  StyledLevels,
  StyledLevel,
} from "./StyledNavDropdown";
import Arrow from "../Arrow/Arrow";

const NavDropdown = () => {
  const levels = 24;
  const levelsArr = new Array(levels).fill("");
  const selectedIndex = 3;
  return (
    <StyledTooltipWrapper>
      <StyledLevels>
        {levelsArr.map((level, index) => (
          <StyledLevel className={selectedIndex === index ? "selected" : ""}>
            {index + 1}
          </StyledLevel>
        ))}
      </StyledLevels>
    </StyledTooltipWrapper>
  );
};

export default NavDropdown;
