import React from "react";
import styled from "styled-components";
const StyledInstructionsWrapper = styled.div`
  border-radius: ${(props) => props.theme.border.radius};
  grid-area: instructions;
  text-align: left;
  margin: 2rem;
  margin-bottom: 0;
`;
const StyledInfo = styled.ul``;
const StyledSpan = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 900;
  font-family: "Source Code Pro", monospace;
  padding: 0 ${(props) => props.theme.padding.micro};
`;
const StyledInstruction = styled.p`
  margin: 0;
  line-height: 1.2;
`;
const StyledGreeting = styled.p`
  margin: 0;
  position: relative;
  top: -1.5rem;
  line-height: 1.5;
  font-size: 1.3em;
`;
const StyledH2 = styled.h2`
  font-family: "Fredoka One", cursive;
  text-align: left;
  margin-top: 0;
  line-height: 25px;
`;

export default function Instructions({
  instructions,
  greeting,
  tags,
  info,
  subject,
}) {
  return (
    <StyledInstructionsWrapper>
      {greeting &&
        greeting.map((item, index) => (
          <StyledGreeting key={index}>{item}</StyledGreeting>
        ))}
      <StyledH2>{subject}</StyledH2>
      {instructions.map((item, index) => (
        <StyledInstruction key={index}>{item}</StyledInstruction>
      ))}

      <StyledInfo>
        {info.length > 0 &&
          info.map((item, index) => {
            const splitInstruction = item.split(":");
            return (
              <li key={index}>
                <StyledSpan>{splitInstruction[0]}</StyledSpan>:
                {splitInstruction[1]}
              </li>
            );
          })}
      </StyledInfo>
    </StyledInstructionsWrapper>
  );
}
