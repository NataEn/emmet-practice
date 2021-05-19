import React from "react";
import { StyledArrow, StyledArrowWrapper } from "./StyledArrow";

export default function Arrow({
  size,
  direction,
  position,
  background = false,
  hover = false,
  color = false,
}) {
  return (
    <StyledArrowWrapper
      position={position}
      hover={hover}
      background={background}
    >
      <StyledArrow size={size} direction={direction} color={color} />
    </StyledArrowWrapper>
  );
}
