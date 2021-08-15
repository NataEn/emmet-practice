import React from "react";
import styled from "styled-components";
import Nav from "../ExercisesNav/ExercisesNav";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  grid-area: header;
  margin: 1rem 2rem;

  @media (min-width: 840px) and (max-width: 870px) {
    flex-direction: column;
  }

  @media (max-width: 700px) {
    width: 80vw;
    margin: 2.5rem 2rem;
  }
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: stretch;
    height: 9rem;
    justify-content: space-between;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2.7rem;
  font-weight: 800;
  font-family: "Fredoka One", cursive;
  text-align: left;
  margin-bottom: ${(props) => props.theme.margin.small};
  margin-top: 0;
  line-height: 2.5rem;
`;

export default function Header({
  setLevel,
  currentLevel,
  reset,
  numberOfLevels,
  answers,
}) {
  return (
    <StyledHeader>
      <StyledH1>Emmet practice</StyledH1>
      <Nav
        setLevel={setLevel}
        currentLevel={currentLevel}
        reset={reset}
        numberOfLevels={numberOfLevels}
        answers={answers}
      />
    </StyledHeader>
  );
}
