import styled from "styled-components";

export const StyledTooltipWrapper = styled.div`
  border-radius: ${(props) => props.theme.border.radius};
  position: absolute;
  z-index: 1;
  display: flex;
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
  border: 2px solid ${(props) => props.theme.colors.primaryDark};
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  color: white;
  margin: ${(props) => props.theme.margin.small};
  background-color: ${(props) => props.theme.colors.primaryDark};

  &.selected {
    border: 2px solid ${(props) => props.theme.colors.primaryLight};
  }
`;
