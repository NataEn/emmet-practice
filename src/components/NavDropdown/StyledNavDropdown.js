import styled from "styled-components";

export const StyledTooltipWrapper = styled.div`
  border-radius: ${(props) => props.theme.border.radius};
  position: absolute;
  z-index: 1;
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(1.6rem * 6);
  background-color: ${(props) => props.theme.colors.secondaryDarker};
  top: 44px;
  padding: ${(props) => props.theme.padding.small};

  &::after {
    content: "";
    position: absolute;
    top: -11px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid ${(props) => props.theme.colors.secondaryDarker};
  }
`;
export const StyledLevels = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const StyledLevel = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 600;
  height: 1.6rem;
  width: 1.6rem;
  border: 2px solid
    ${(props) =>
      props.correct
        ? props.theme.colors.success
        : props.theme.colors.primaryDark};
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  color: white;
  margin: ${(props) => props.theme.margin.small};
  background-color: ${(props) => props.theme.colors.primaryDark};
  cursor: pointer;

  &.selected {
    border: 2px solid
      ${(props) =>
        props.correct
          ? props.theme.colors.successDark
          : props.theme.colors.primaryLight};
    background-color: ${(props) =>
      props.correct
        ? props.theme.colors.success
        : props.theme.colors.primaryDark};
    color: ${(props) =>
      props.correct ? props.theme.colors.primaryDark : "white"};
    font-weight: ${(props) => (props.correct ? 800 : "regular")};
  }
`;

export const StyledButton = styled.button`
  margin: ${(props) => props.theme.margin.small};
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: ${(props) => props.theme.border.radius};
  padding: ${(props) => props.theme.padding.small};
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primaryLight};
  }
`;
