import React from "react";
import styled from "styled-components";
import Nav from "../ExercisesNav/ExercisesNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-area: header;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: "Fredoka One", cursive;
  text-align: left;
  margin-bottom: ${(props) => props.theme.margin.small};
  margin-top: 0;
  line-height: 25px;
`;

export default function Header({ setLevel, currentLevel, reset }) {
  return (
    <StyledHeader>
      <StyledH1>Emmet practice</StyledH1>
      <Nav setLevel={setLevel} currentLevel={currentLevel} reset={reset} />
    </StyledHeader>
  );
}
