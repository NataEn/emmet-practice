import React from "react";
import styled from "styled-components";
const StyledInstructionsWrapper = styled.div`
  border-radius: ${(props) => props.theme.border.radius};
  grid-area: instructions;
  overflow: hidden;
  text-align: left;
`;
const StyledInstructions = styled.p`
  margin: 0;
`;

export default function Instructions({ text }) {
  return (
    <StyledInstructionsWrapper>
      <StyledInstructions>{text}</StyledInstructions>
    </StyledInstructionsWrapper>
  );
}
