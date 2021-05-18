import React from "react";
import { StyledArrow, StyledArrowWrapper } from "./StyledArrow";

export default function Arrow({ size, direction, position, hover = false }) {
  return (
    <StyledArrowWrapper position={position} hover={hover}>
      <StyledArrow size={size} direction={direction} />
    </StyledArrowWrapper>
  );
}
