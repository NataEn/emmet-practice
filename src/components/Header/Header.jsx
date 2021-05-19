import React from "react";
import styled from "styled-components";
import Nav from "../ExercisesNav/ExercisesNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  grid-area: header;
`;

const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  font-family: "Fredoka One", cursive;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Emmet practice</StyledH1>
      <Nav />
    </StyledHeader>
  );
}
