import React from "react";
import styled, { css } from "styled-components";

export const StyledArrowWrapper = styled.div`
  padding: ${(props) => props.theme.padding.small};
  ${({ position }) => {
    return (
      position &&
      css`
    border-top-${position}-radius: ${(props) => props.theme.border.radius};
    border-bottom-${position}-radius: ${(props) => props.theme.border.radius};
  `
    );
  }};
  ${({ position }) =>
    position &&
    css`
      ${position === "left"
        ? "border-right"
        : "border-left"}:1px solid rgba(255, 255, 255, 0.2); ;
    `}
  ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: rgba(255, 255, 255, 0.3);
        cursor: pointer;
      }
    `}
`;

export const StyledArrow = styled.div`
  width: 0;
  height: 0;
  padding: 0;

  ${({ direction, size }) => {
    switch (direction) {
      case "left":
        return css`
          border-top: ${size} solid transparent;
          border-bottom: ${size} solid transparent;
          border-right: ${size} solid white;
        `;
      case "right":
        return css`
          border-top: ${size} solid transparent;
          border-bottom: ${size} solid transparent;
          border-left: ${size} solid white;
        `;
      case "up":
        return css`
          border-left: ${size} solid transparent;
          border-right: ${size} solid transparent;
          border-bottom: ${size} solid white;
        `;
      case "down":
        return css`
          border-left: ${size} solid transparent;
          border-right: ${size} solid transparent;
          border-top: ${size} solid white;
        `;
    }
  }}
`;
