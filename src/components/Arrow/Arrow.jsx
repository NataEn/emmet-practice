import React from "react";
import { StyledArrow, StyledArrowWrapper } from "./StyledArrow";

export default function Arrow({
  size,
  direction,
  position,
  background = null,
  hover = null,
  color = null,
  onClick,
}) {
  return (
    <StyledArrowWrapper
      position={position}
      hover={hover}
      background={background}
      onClick={onClick}
    >
      <StyledArrow size={size} direction={direction} color={color} />
    </StyledArrowWrapper>
  );
}
