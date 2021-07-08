import React, { useState } from "react";
import styled, { css } from "styled-components";
import Theme, { beat, shake } from "../../theme/theme";

const animatedProp = css`
  animation: ${(props) =>
    props.active
      ? `${beat} 0.7s infinite alternate`
      : `${shake} 2s infinite ease-in`};
`;

const beatAnimation = css`
  ${beat} 0.7s infinite alternate
`;
const shakeAnimation = css`
  ${shake} 2s infinite ease-in
`;

const StyledBtn = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: fit-content;
  align-self: flex-end;
  padding: ${Theme.padding.small} calc(${Theme.padding.small}*2);
  color: #fff;
  /* opacity: 0.5; */
  font-size: 150%;
  font-family: inherit;
  border: 0;
  border-radius: ${Theme.border.radius};
  cursor: pointer;
  background: ${(props) =>
    props.active ? `${Theme.colors.success}` : `${Theme.colors.danger}`};
  animation: ${(props) => (props.active ? beatAnimation : null)};
  &:hover {
    animation: ${(props) => (!props.active ? shakeAnimation : null)};
  }
`;
//  animation: ${shake} 2s infinite ease-in;

export default function NextBtn({ isCorrect, setQuestion, currentLevel }) {
  return (
    <StyledBtn
      active={isCorrect}
      onClick={isCorrect ? setQuestion : () => console.log("wrong answer")}
    >
      Next
    </StyledBtn>
  );
}
