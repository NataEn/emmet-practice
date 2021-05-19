import React from "react";
import styled from "styled-components";
const StyledInstructions = styled.div`
  border: 1px solid black;
  border-radius: ${(props) => props.theme.border.radius};
  grid-area: instructions;
  overflow: hidden;
  text-align: left;
`;

export default function Instructions({ text }) {
  return (
    <StyledInstructions>
      <p>{text}</p>
    </StyledInstructions>
  );
}
