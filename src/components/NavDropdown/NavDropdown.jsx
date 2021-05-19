import React from "react";
import {
  StyledTooltipWrapper,
  StyledLevels,
  StyledLevel,
} from "./StyledNavDropdown";

const NavDropdown = ({ show }) => {
  const levels = 24;
  const levelsArr = new Array(levels).fill("");
  const selectedIndex = 3;
  return (
    <StyledTooltipWrapper show={show}>
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
