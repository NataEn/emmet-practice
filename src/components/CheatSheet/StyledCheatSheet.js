import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;
export const StyledCheatSheetWrapper = styled.div`
  padding: ${(props) => props.theme.padding.small};
  font-size: ${(props) => props.theme.fonts.medium};
  color: black;
  height: 93%;
  width: 50%;
  text-align: left;
`;
export const StyledRulesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.colors.primaryLight};
  opacity: 0.7;
  heigh: max-content;
  width: 100%;
`;
export const CheatSheetBoard = styled.div`
  display: flex;
  align-items: baseline;
`;

export const StyledList = styled.div`
  padding: ${(props) => props.theme.padding.small};
  display: flex;
  flex-wrap: wrap;
`;

export const StyledListItem = styled.p`
  margin: ${(props) => props.theme.margin.small};
  width: 100%;
  line-height: 1.6;
  & input {
    margin-right: ${(props) => props.theme.margin.small};
  }
`;
export const StyledSpan = styled.span`
  background-color: ${(props) => props.theme.colors.secondaryLight};
  font-weight: 900;
  font-family: "Source Code Pro", monospace;
  padding: 0 ${(props) => props.theme.padding.micro};
`;
export const BoardButton = styled.span`
  padding: ${(props) => props.theme.padding.small};
  margin: 0 ${(props) => props.theme.padding.small};
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.border.radius};
`;
