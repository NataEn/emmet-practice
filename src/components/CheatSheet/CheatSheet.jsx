import React from "react";
import {
  StyledCheatSheetWrapper,
  StyledList,
  StyledListItem,
  StyledSpan,
  StyledRulesWrapper,
  CheatSheetBoard,
  BoardButton,
  Wrapper,
} from "./StyledCheatSheet";

export default function CheatSheet({ rules }) {
  // const splitRules = () => {
  //   const middle = rules.length / 2;
  //   return [rules.slice(0, middle), rules.slice(middle + 1)];
  // };
  const generateRules = (rulesList) => {
    const list = rules.map((rule, index) => {
      const splitRule = rule.split(":");
      return (
        <StyledListItem key={index}>
          <input
            type="checkbox"
            id={splitRule[0]}
            name={splitRule[0]}
            onChange={(e) => {
              console.log(e);
            }}
          />
          <label htmlFor={splitRule[0]}>
            <StyledSpan>{splitRule[0]}</StyledSpan>:{splitRule[1]}
          </label>
        </StyledListItem>
      );
    });
    return list;
  };

  return (
    <Wrapper>
      <StyledCheatSheetWrapper>
        <h2>Rules</h2>
        <CheatSheetBoard>
          <h4>Select Rules for a custom Cheat Sheet</h4>
          <BoardButton>Select All</BoardButton>
          <BoardButton>Create</BoardButton>
        </CheatSheetBoard>
        <StyledRulesWrapper>
          <StyledList>{generateRules(rules)}</StyledList>
        </StyledRulesWrapper>
      </StyledCheatSheetWrapper>

      <StyledCheatSheetWrapper>
        <h2>Selected Rules</h2>
        <CheatSheetBoard>
          <BoardButton>Print PDF</BoardButton>
        </CheatSheetBoard>
        <StyledRulesWrapper>
          <StyledList>{generateRules(rules)}</StyledList>
        </StyledRulesWrapper>
      </StyledCheatSheetWrapper>
    </Wrapper>
  );
}
